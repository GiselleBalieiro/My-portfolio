import { useRef, useState } from 'react';
import { Plus, Trash2, Upload, X } from 'lucide-react';
import { apiMessage, contentApi } from '@/lib/api';
import { chipClass, ghostButton, inputClass } from './styles';

export function Label({ children, help }) {
  return (
    <div className="mb-1.5">
      <span className="text-sm text-text-primary">{children}</span>
      {help ? <span className="block text-[11px] text-text-secondary">{help}</span> : null}
    </div>
  );
}

function TagsField({ value = [], onChange, placeholder }) {
  const [draft, setDraft] = useState('');

  const add = () => {
    const tag = draft.trim();

    if (!tag || value.includes(tag)) {
      setDraft('');
      return;
    }

    onChange([...value, tag]);
    setDraft('');
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {value.map((tag) => (
          <span key={tag} className={chipClass}>
            {tag}
            <button
              type="button"
              onClick={() => onChange(value.filter((current) => current !== tag))}
              className="text-text-secondary hover:text-red-500 cursor-pointer"
              aria-label={`Remover ${tag}`}
            >
              <X size={12} />
            </button>
          </span>
        ))}
        {value.length === 0 ? (
          <span className="text-[12px] text-text-secondary">Nenhum item ainda.</span>
        ) : null}
      </div>
      <div className="flex gap-2">
        <input
          className={inputClass}
          value={draft}
          placeholder={placeholder || 'Digite e aperte Enter'}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              add();
            }
          }}
        />
        <button type="button" onClick={add} className={ghostButton}>
          <Plus size={14} /> Adicionar
        </button>
      </div>
    </div>
  );
}

function useUpload(folder) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const send = async (file) => {
    setBusy(true);
    setError('');

    try {
      const form = new FormData();
      form.append('file', file);

      const { data } = await contentApi.post(`/admin/uploads/${folder}`, form);

      return data.data.url;
    } catch (uploadError) {
      setError(apiMessage(uploadError, 'Não foi possível enviar a imagem.'));
      return null;
    } finally {
      setBusy(false);
    }
  };

  return { send, busy, error };
}

function UploadButton({ folder, onUploaded, label = 'Enviar imagem' }) {
  const inputRef = useRef(null);
  const { send, busy, error } = useUpload(folder);

  return (
    <div>
      <button
        type="button"
        className={ghostButton}
        disabled={busy}
        onClick={() => inputRef.current?.click()}
      >
        <Upload size={14} /> {busy ? 'Enviando...' : label}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (event) => {
          const file = event.target.files?.[0];
          event.target.value = '';

          if (!file) return;

          const url = await send(file);

          if (url) onUploaded(url);
        }}
      />
      {error ? <span className="block text-[11px] text-red-500 mt-1">{error}</span> : null}
    </div>
  );
}

function ImageField({ value, onChange, folder }) {
  return (
    <div className="flex items-center gap-3">
      {value ? (
        <img
          src={value}
          alt=""
          className="w-12 h-12 rounded-lg object-contain bg-bg-tertiary p-1 shrink-0"
        />
      ) : null}
      <div className="flex-1">
        <input
          className={inputClass}
          value={value || ''}
          placeholder="URL da imagem"
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
      <UploadButton folder={folder} onUploaded={onChange} label="Enviar" />
    </div>
  );
}

function ImagesField({ value = [], onChange, folder }) {
  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-2">
        {value.map((url, index) => (
          <div key={`${url}-${index}`} className="relative">
            <img
              src={url}
              alt=""
              className="w-24 h-16 rounded-lg object-cover bg-bg-tertiary border border-border-primary"
            />
            <button
              type="button"
              onClick={() => onChange(value.filter((_, position) => position !== index))}
              className="absolute -top-2 -right-2 rounded-full bg-bg-tertiary border border-border-primary p-1 text-text-secondary hover:text-red-500 cursor-pointer"
              aria-label="Remover imagem"
            >
              <X size={12} />
            </button>
          </div>
        ))}
        {value.length === 0 ? (
          <span className="text-[12px] text-text-secondary">Nenhuma imagem ainda.</span>
        ) : null}
      </div>
      <UploadButton folder={folder} onUploaded={(url) => onChange([...value, url])} />
    </div>
  );
}

function LinksField({ value = [], onChange }) {
  const update = (index, patch) =>
    onChange(value.map((link, position) => (position === index ? { ...link, ...patch } : link)));

  return (
    <div className="flex flex-col gap-2">
      {value.map((link, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-2">
          <input
            className={`${inputClass} sm:w-28`}
            value={link.label || ''}
            placeholder="Texto"
            onChange={(event) => update(index, { label: event.target.value })}
          />
          <input
            className={inputClass}
            value={link.url || ''}
            placeholder="https://..."
            onChange={(event) => update(index, { url: event.target.value })}
          />
          <select
            className={`${inputClass} sm:w-32`}
            value={link.kind || 'external'}
            onChange={(event) => update(index, { kind: event.target.value })}
          >
            <option value="github">GitHub</option>
            <option value="external">Link</option>
          </select>
          <button
            type="button"
            onClick={() => onChange(value.filter((_, position) => position !== index))}
            className="rounded-lg border border-border-primary px-3 text-text-secondary hover:text-red-500 cursor-pointer"
            aria-label="Remover link"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      <button
        type="button"
        className={`${ghostButton} self-start`}
        onClick={() => onChange([...value, { label: '', url: '', kind: 'external' }])}
      >
        <Plus size={14} /> Adicionar link
      </button>
    </div>
  );
}

function SocialsField({ value = [], onChange }) {
  const update = (index, patch) =>
    onChange(value.map((item, position) => (position === index ? { ...item, ...patch } : item)));

  return (
    <div className="flex flex-col gap-2">
      {value.map((social, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-2">
          <input
            className={`${inputClass} sm:w-32`}
            value={social.label || ''}
            placeholder="Linkedin"
            onChange={(event) => update(index, { label: event.target.value })}
          />
          <input
            className={inputClass}
            value={social.url || ''}
            placeholder="https://..."
            onChange={(event) => update(index, { url: event.target.value })}
          />
          <input
            type="color"
            className="h-9 w-12 rounded-lg border border-border-primary bg-bg-secondary cursor-pointer shrink-0"
            value={social.color || '#2563EB'}
            onChange={(event) => update(index, { color: event.target.value })}
          />
          <button
            type="button"
            onClick={() => onChange(value.filter((_, position) => position !== index))}
            className="rounded-lg border border-border-primary px-3 text-text-secondary hover:text-red-500 cursor-pointer"
            aria-label="Remover rede"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      <button
        type="button"
        className={`${ghostButton} self-start`}
        onClick={() => onChange([...value, { label: '', url: '', color: '#2563EB' }])}
      >
        <Plus size={14} /> Adicionar rede
      </button>
    </div>
  );
}

function ListField({ value = [], onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      {value.map((line, index) => (
        <div key={index} className="flex gap-2">
          <textarea
            className={inputClass}
            rows={2}
            value={line}
            placeholder={placeholder}
            onChange={(event) =>
              onChange(
                value.map((current, position) =>
                  position === index ? event.target.value : current,
                ),
              )
            }
          />
          <button
            type="button"
            onClick={() => onChange(value.filter((_, position) => position !== index))}
            className="rounded-lg border border-border-primary px-3 text-text-secondary hover:text-red-500 cursor-pointer"
            aria-label="Remover linha"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      <button
        type="button"
        className={`${ghostButton} self-start`}
        onClick={() => onChange([...value, ''])}
      >
        <Plus size={14} /> Adicionar linha
      </button>
    </div>
  );
}

/** Desenha um campo a partir do descritor declarado em definitions.js. */
export function Field({ field, value, onChange, uploadFolder }) {
  const common = { className: inputClass, placeholder: field.placeholder };

  return (
    <div className={field.wide ? 'sm:col-span-2' : ''}>
      <Label help={field.help}>{field.label}</Label>

      {field.type === 'textarea' ? (
        <textarea
          {...common}
          rows={field.rows || 4}
          value={value || ''}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : field.type === 'select' ? (
        <select
          {...common}
          value={value || field.options[0].value}
          onChange={(event) => onChange(event.target.value)}
        >
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : field.type === 'color' ? (
        <div className="flex gap-2 items-center">
          <input
            type="color"
            className="h-9 w-12 rounded-lg border border-border-primary bg-bg-secondary cursor-pointer"
            value={value || '#4F46E5'}
            onChange={(event) => onChange(event.target.value)}
          />
          <input {...common} value={value || ''} onChange={(event) => onChange(event.target.value)} />
        </div>
      ) : field.type === 'number' ? (
        <input
          {...common}
          type="number"
          value={value ?? 0}
          onChange={(event) => onChange(Number(event.target.value))}
        />
      ) : field.type === 'tags' ? (
        <TagsField value={value} onChange={onChange} placeholder={field.placeholder} />
      ) : field.type === 'list' ? (
        <ListField value={value} onChange={onChange} placeholder={field.placeholder} />
      ) : field.type === 'links' ? (
        <LinksField value={value} onChange={onChange} />
      ) : field.type === 'socials' ? (
        <SocialsField value={value} onChange={onChange} />
      ) : field.type === 'image' ? (
        <ImageField value={value} onChange={onChange} folder={uploadFolder} />
      ) : field.type === 'images' ? (
        <ImagesField value={value} onChange={onChange} folder={uploadFolder} />
      ) : (
        <input {...common} value={value || ''} onChange={(event) => onChange(event.target.value)} />
      )}
    </div>
  );
}
