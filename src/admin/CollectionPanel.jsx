import { useCallback, useEffect, useState } from 'react';
import { ArrowDown, ArrowUp, Check, Pencil, Plus, Trash2, X } from 'lucide-react';
import { apiMessage, contentApi } from '@/lib/api';
import { Field } from './fields';
import { feedbackClass, ghostButton, primaryButton } from './styles';

export function CollectionPanel({ definition, onChanged }) {
  const { endpoint, fields, emptyItem, summary, label, singular, uploadFolder } = definition;

  const [items, setItems] = useState([]);
  const [draft, setDraft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await contentApi.get(endpoint);
      setItems(data.data);
    } catch (error) {
      setFeedback({ type: 'error', text: apiMessage(error, 'Não foi possível carregar a lista.') });
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    load();
  }, [load]);

  const announce = (text, type = 'success') => {
    setFeedback({ type, text });
    onChanged?.();
  };

  const save = async (event) => {
    event.preventDefault();
    setSaving(true);
    setFeedback(null);

    try {
      const { uuid, ...payload } = draft;

      if (uuid) {
        await contentApi.put(`${endpoint}/${uuid}`, payload);
      } else {
        await contentApi.post(endpoint, { ...payload, order: items.length });
      }

      setDraft(null);
      await load();
      announce(uuid ? 'Alterações salvas.' : `${singular} adicionado(a).`);
    } catch (error) {
      setFeedback({ type: 'error', text: apiMessage(error) });
    } finally {
      setSaving(false);
    }
  };

  const remove = async (item) => {
    const name = summary(item).title;

    if (!window.confirm(`Remover "${name}"? Isso tira do site na hora.`)) return;

    try {
      await contentApi.delete(`${endpoint}/${item.uuid}`);
      await load();
      announce('Removido.');
    } catch (error) {
      setFeedback({ type: 'error', text: apiMessage(error) });
    }
  };

  const move = async (index, direction) => {
    const target = index + direction;

    if (target < 0 || target >= items.length) return;

    const reordered = [...items];
    [reordered[index], reordered[target]] = [reordered[target], reordered[index]];
    setItems(reordered);

    try {
      await contentApi.patch(`${endpoint}/reorder`, {
        items: reordered.map((item, position) => ({ uuid: item.uuid, order: position })),
      });
      announce('Ordem atualizada.');
    } catch (error) {
      setFeedback({ type: 'error', text: apiMessage(error) });
      await load();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-text-primary text-xl">{label}</h2>
          <span className="text-text-secondary text-[12px]">
            {loading ? 'Carregando...' : `${items.length} item(ns) publicados`}
          </span>
        </div>
        {!draft ? (
          <button type="button" className={primaryButton} onClick={() => setDraft({ ...emptyItem })}>
            <Plus size={16} /> Novo
          </button>
        ) : null}
      </div>

      {feedback ? (
        <div className={feedbackClass(feedback.type)}>{feedback.text}</div>
      ) : null}

      {draft ? (
        <form
          onSubmit={save}
          className="mb-6 rounded-xl border border-border-primary p-5 bg-bg-secondary"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map((field) => (
              <Field
                key={field.name}
                field={field}
                value={draft[field.name]}
                uploadFolder={uploadFolder}
                onChange={(value) => setDraft((current) => ({ ...current, [field.name]: value }))}
              />
            ))}
          </div>

          <div className="flex gap-3 mt-5">
            <button type="submit" className={primaryButton} disabled={saving}>
              <Check size={16} /> {saving ? 'Salvando...' : 'Salvar'}
            </button>
            <button type="button" className={ghostButton} onClick={() => setDraft(null)}>
              <X size={14} /> Cancelar
            </button>
          </div>
        </form>
      ) : null}

      <div className="flex flex-col gap-2">
        {items.map((item, index) => {
          const row = summary(item);

          return (
            <div
              key={item.uuid}
              className="flex items-center gap-3 rounded-xl border border-border-primary p-3 hover:bg-bg-tertiary transition-colors"
            >
              {row.thumbnail ? (
                <img
                  src={row.thumbnail}
                  alt=""
                  className="w-12 h-12 rounded-lg object-cover bg-bg-tertiary shrink-0"
                />
              ) : row.color ? (
                <span
                  className="w-5 h-5 rounded-full shrink-0 border border-border-primary"
                  style={{ backgroundColor: row.color }}
                />
              ) : null}

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-text-primary text-sm truncate">{row.title}</span>
                  {row.badge ? (
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-brand-indigo/40 text-brand-indigo shrink-0">
                      {row.badge}
                    </span>
                  ) : null}
                </div>
                <span className="text-text-secondary text-[12px] truncate block">
                  {row.subtitle}
                </span>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  className="p-2 text-text-secondary hover:text-text-primary disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                  aria-label="Subir"
                >
                  <ArrowUp size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => move(index, 1)}
                  disabled={index === items.length - 1}
                  className="p-2 text-text-secondary hover:text-text-primary disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                  aria-label="Descer"
                >
                  <ArrowDown size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setDraft({ ...emptyItem, ...item })}
                  className="p-2 text-text-secondary hover:text-brand-indigo cursor-pointer"
                  aria-label="Editar"
                >
                  <Pencil size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => remove(item)}
                  className="p-2 text-text-secondary hover:text-red-500 cursor-pointer"
                  aria-label="Remover"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          );
        })}

        {!loading && items.length === 0 ? (
          <span className="text-text-secondary text-sm">
            Nada cadastrado ainda. Clique em Novo para começar.
          </span>
        ) : null}
      </div>
    </div>
  );
}
