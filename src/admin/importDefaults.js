/**
 * Importa o conteudo de src/content/defaults.js para a API.
 *
 * buildPlan compara o que esta publicado com o defaultContent e diz o que vai
 * ser criado, atualizado ou removido. applyPlan executa esse plano usando os
 * mesmos endpoints do painel. Certificados nao entram: ficam como estao.
 */

/** Nomes antigos (em PT) que devem casar com o item novo, em vez de virar duplicata. */
const ALIASES = {
  experiences: {
    'analista de suporte técnico': 'technical support analyst',
  },
  projects: {
    'agent - ia para whatsapp': 'agent - ai agents for whatsapp',
  },
};

const normalize = (value) => String(value ?? '').trim().toLowerCase();

const keyOf = {
  skills: (item) => normalize(item.name),
  experiences: (item) => {
    const role = normalize(item.role);
    return `${normalize(item.company)}|${ALIASES.experiences[role] ?? role}`;
  },
  projects: (item) => {
    const title = normalize(item.title);
    return ALIASES.projects[title] ?? title;
  },
};

/** Campos que a API aceita para cada colecao (sem uuid, order e isActive). */
const FIELDS = {
  skills: ['name', 'category', 'categoryOrder', 'color'],
  experiences: ['company', 'role', 'period', 'description', 'logoUrl', 'tags'],
  projects: ['title', 'description', 'tags', 'images', 'links'],
};

const LABEL = {
  skills: (item) => item.name,
  experiences: (item) => `${item.role} — ${item.company}`,
  projects: (item) => item.title,
};

export const COLLECTIONS = ['skills', 'experiences', 'projects'];

const ENDPOINT = {
  skills: '/admin/skills',
  experiences: '/admin/experiences',
  projects: '/admin/projects',
};

const pick = (item, fields) =>
  Object.fromEntries(fields.filter((field) => item[field] !== undefined).map((field) => [field, item[field]]));

const same = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

/** O defaults guarda as skills agrupadas por categoria; a API guarda uma lista simples. */
export function flattenSkills(groups) {
  return groups.flatMap((group) => group.items);
}

function desiredItems(collection, defaults) {
  const list = collection === 'skills' ? flattenSkills(defaults.skills) : defaults[collection];

  return list.map((item) => pick(item, FIELDS[collection]));
}

/**
 * Mantem imagens e logo ja publicados (ex.: enviados pro Cloudinary pelo painel)
 * quando o item ja existe e tem esses campos preenchidos.
 */
function keepUploads(collection, desired, live) {
  const result = { ...desired };

  if (collection === 'projects' && live.images?.length) {
    result.images = live.images;
  }

  if (collection === 'experiences' && live.logoUrl) {
    result.logoUrl = live.logoUrl;
  }

  return result;
}

function planCollection(collection, liveItems, defaults) {
  const desired = desiredItems(collection, defaults);
  const liveByKey = new Map();

  for (const item of liveItems) {
    const key = keyOf[collection](item);
    if (!liveByKey.has(key)) liveByKey.set(key, item);
  }

  const matched = new Set();
  const create = [];
  const update = [];
  const order = [];

  for (const item of desired) {
    const live = liveByKey.get(keyOf[collection](item));

    if (live) {
      matched.add(live.uuid);
      const payload = keepUploads(collection, item, live);
      const changed = Object.keys(payload).some((field) => !same(payload[field], live[field]));

      if (changed) update.push({ uuid: live.uuid, payload, label: LABEL[collection](payload) });
      order.push({ uuid: live.uuid });
    } else {
      create.push({ payload: item, label: LABEL[collection](item) });
      order.push({ create: create.length - 1 });
    }
  }

  const remove = liveItems
    .filter((item) => !matched.has(item.uuid))
    .map((item) => ({ uuid: item.uuid, label: LABEL[collection](item) }));

  return { create, update, remove, order };
}

/**
 * live = { profile, skills, experiences, projects } como vem de GET /admin/...
 * (skills em lista simples).
 */
export function buildPlan(live, defaults) {
  const profilePayload = { title: defaults.profile.title, about: defaults.profile.about };
  const profileChanged =
    !same(live.profile?.title, profilePayload.title) || !same(live.profile?.about, profilePayload.about);

  const plan = { profile: profileChanged ? profilePayload : null };

  for (const collection of COLLECTIONS) {
    plan[collection] = planCollection(collection, live[collection] ?? [], defaults);
  }

  return plan;
}

export function planIsEmpty(plan) {
  return (
    !plan.profile &&
    COLLECTIONS.every((c) => !plan[c].create.length && !plan[c].update.length && !plan[c].remove.length)
  );
}

export async function loadLive(api) {
  const [profile, ...lists] = await Promise.all([
    api.get('/admin/profile'),
    ...COLLECTIONS.map((collection) => api.get(ENDPOINT[collection])),
  ]);

  const live = { profile: profile.data.data };
  COLLECTIONS.forEach((collection, index) => {
    live[collection] = lists[index].data.data;
  });

  return live;
}

/** Executa o plano. onProgress recebe uma frase curta a cada etapa. */
export async function applyPlan(plan, api, onProgress = () => {}) {
  if (plan.profile) {
    onProgress('Perfil');
    await api.put('/admin/profile', plan.profile);
  }

  for (const collection of COLLECTIONS) {
    const { create, update, remove, order } = plan[collection];
    const endpoint = ENDPOINT[collection];
    const created = [];

    for (const item of update) {
      onProgress(`${collection}: atualizando ${item.label}`);
      await api.put(`${endpoint}/${item.uuid}`, item.payload);
    }

    for (const [index, item] of create.entries()) {
      onProgress(`${collection}: criando ${item.label}`);
      const { data } = await api.post(endpoint, { ...item.payload, order: order.length + index });
      created.push(data.data.uuid);
    }

    for (const item of remove) {
      onProgress(`${collection}: removendo ${item.label}`);
      await api.delete(`${endpoint}/${item.uuid}`);
    }

    if (order.length) {
      onProgress(`${collection}: ordenando`);
      await api.patch(`${endpoint}/reorder`, {
        items: order.map((entry, position) => ({
          uuid: entry.uuid ?? created[entry.create],
          order: position,
        })),
      });
    }
  }
}
