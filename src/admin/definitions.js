/**
 * Cada colecao do painel e descrita aqui: o CollectionPanel monta a lista e o
 * formulario a partir destes descritores, entao adicionar um campo novo e so
 * incluir uma linha em fields.
 */
export const collections = {
  skills: {
    label: 'Tech Stack',
    singular: 'tecnologia',
    endpoint: '/admin/skills',
    uploadFolder: 'profile',
    emptyItem: { name: '', category: '', color: '#4F46E5', categoryOrder: 0 },
    summary: (item) => ({ title: item.name, subtitle: item.category, color: item.color }),
    fields: [
      { name: 'name', label: 'Tecnologia', placeholder: 'React' },
      {
        name: 'category',
        label: 'Categoria',
        placeholder: 'Front-end',
        help: 'Itens com a mesma categoria aparecem no mesmo bloco do site',
      },
      { name: 'color', label: 'Cor do botão', type: 'color' },
      {
        name: 'categoryOrder',
        label: 'Ordem da categoria',
        type: 'number',
        help: 'Menor número aparece primeiro na página',
      },
    ],
  },

  experiences: {
    label: 'Experiência',
    singular: 'experiência',
    endpoint: '/admin/experiences',
    uploadFolder: 'experiences',
    emptyItem: { company: '', role: '', period: '', description: '', logoUrl: '', tags: [] },
    summary: (item) => ({ title: item.role, subtitle: `${item.company} • ${item.period}` }),
    fields: [
      { name: 'role', label: 'Cargo', placeholder: 'Full Stack Developer' },
      { name: 'company', label: 'Empresa', placeholder: 'ERA' },
      { name: 'period', label: 'Período', placeholder: 'Março 2025 – Presente' },
      { name: 'logoUrl', label: 'Logo da empresa', type: 'image', wide: true },
      { name: 'description', label: 'Descrição', type: 'textarea', rows: 5, wide: true },
      { name: 'tags', label: 'Tecnologias', type: 'tags', wide: true },
    ],
  },

  projects: {
    label: 'Projetos',
    singular: 'projeto',
    endpoint: '/admin/projects',
    uploadFolder: 'projects',
    emptyItem: { title: '', description: '', tags: [], images: [], links: [] },
    summary: (item) => ({
      title: item.title,
      subtitle: `${item.images?.length || 0} imagem(ns) • ${item.tags?.length || 0} tag(s)`,
      thumbnail: item.images?.[0],
    }),
    fields: [
      { name: 'title', label: 'Nome do projeto', placeholder: 'Expense Converter', wide: true },
      { name: 'description', label: 'Descrição', type: 'textarea', rows: 4, wide: true },
      { name: 'tags', label: 'Tecnologias', type: 'tags', wide: true },
      {
        name: 'images',
        label: 'Prints do projeto',
        type: 'images',
        wide: true,
        help: 'A primeira imagem é a que abre no card',
      },
      { name: 'links', label: 'Links', type: 'links', wide: true },
    ],
  },

  certificates: {
    label: 'Certificados',
    singular: 'certificado',
    endpoint: '/admin/certificates',
    uploadFolder: 'certificates',
    emptyItem: {
      type: 'Certificate',
      title: '',
      issuer: '',
      date: '',
      description: '',
      link: '',
      hours: '',
      logoUrl: '',
    },
    summary: (item) => ({
      title: item.title,
      subtitle: `${item.issuer} • ${item.date}`,
      thumbnail: item.logoUrl,
      badge: item.type === 'Graduation' ? 'Graduação' : null,
    }),
    fields: [
      { name: 'title', label: 'Título', placeholder: 'React: desenvolvendo com JavaScript', wide: true },
      {
        name: 'type',
        label: 'Tipo',
        type: 'select',
        options: [
          { value: 'Certificate', label: 'Certificado / Curso' },
          { value: 'Graduation', label: 'Graduação (card destacado)' },
        ],
      },
      { name: 'issuer', label: 'Instituição', placeholder: 'Alura' },
      { name: 'date', label: 'Data', placeholder: '28 de dezembro de 2024' },
      { name: 'hours', label: 'Carga horária', placeholder: '14h' },
      { name: 'link', label: 'Link do certificado', placeholder: 'https://...', wide: true },
      { name: 'logoUrl', label: 'Logo da instituição', type: 'image', wide: true },
      { name: 'description', label: 'Descrição', type: 'textarea', rows: 3, wide: true },
    ],
  },
};

export const profileDefinition = {
  label: 'Sobre mim',
  endpoint: '/admin/profile',
  uploadFolder: 'profile',
  fields: [
    { name: 'name', label: 'Nome' },
    { name: 'title', label: 'Cargo / titulação', placeholder: 'Software Engineering' },
    { name: 'company', label: 'Empresa atual', placeholder: 'ERA' },
    { name: 'location', label: 'Localização', placeholder: 'Campinas - São Paulo' },
    { name: 'avatarUrl', label: 'Foto', type: 'image', wide: true },
    { name: 'headline', label: 'Título da aba Home', placeholder: "Hi! I'm Giselle Balieiro", wide: true },
    {
      name: 'about',
      label: 'Sobre mim',
      type: 'list',
      wide: true,
      placeholder: 'Uma frase por linha — cada uma vira um item da lista',
    },
    { name: 'email', label: 'E-mail' },
    { name: 'githubLabel', label: 'GitHub (texto)', placeholder: 'GiselleBalieiro' },
    { name: 'githubUrl', label: 'GitHub (URL)', placeholder: 'https://github.com/...' },
    { name: 'linkedinLabel', label: 'LinkedIn (texto)', placeholder: 'in/gisellebalieiro' },
    { name: 'linkedinUrl', label: 'LinkedIn (URL)', placeholder: 'https://linkedin.com/in/...' },
    {
      name: 'socials',
      label: 'Botões de redes',
      type: 'socials',
      wide: true,
      help: 'Os botões coloridos da seção Sociais, na aba Home',
    },
  ],
};
