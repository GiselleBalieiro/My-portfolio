import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { apiMessage, contentApi } from '@/lib/api';
import { profileDefinition } from './definitions';
import { Field } from './fields';
import { feedbackClass, primaryButton } from './styles';

const emptyProfile = {
  name: '',
  title: '',
  company: '',
  location: '',
  avatarUrl: '',
  headline: '',
  about: [],
  email: '',
  githubLabel: '',
  githubUrl: '',
  linkedinLabel: '',
  linkedinUrl: '',
  socials: [],
};

export function ProfilePanel({ onChanged }) {
  const [form, setForm] = useState(emptyProfile);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    contentApi
      .get(profileDefinition.endpoint)
      .then(({ data }) => {
        if (data.data) {
          setForm({ ...emptyProfile, ...data.data });
        }
      })
      .catch((error) =>
        setFeedback({ type: 'error', text: apiMessage(error, 'Não foi possível carregar o perfil.') }),
      )
      .finally(() => setLoading(false));
  }, []);

  const save = async (event) => {
    event.preventDefault();
    setSaving(true);
    setFeedback(null);

    try {
      await contentApi.put(profileDefinition.endpoint, form);
      setFeedback({ type: 'success', text: 'Perfil salvo.' });
      onChanged?.();
    } catch (error) {
      setFeedback({ type: 'error', text: apiMessage(error) });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <span className="text-text-secondary text-sm">Carregando...</span>;
  }

  return (
    <form onSubmit={save}>
      <div className="mb-6">
        <h2 className="text-text-primary text-xl">{profileDefinition.label}</h2>
        <span className="text-text-secondary text-[12px]">
          Aparece na coluna da esquerda e na aba Home do site
        </span>
      </div>

      {feedback ? (
        <div className={feedbackClass(feedback.type)}>{feedback.text}</div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {profileDefinition.fields.map((field) => (
          <Field
            key={field.name}
            field={field}
            value={form[field.name]}
            uploadFolder={profileDefinition.uploadFolder}
            onChange={(value) => setForm((current) => ({ ...current, [field.name]: value }))}
          />
        ))}
      </div>

      <button type="submit" className={`${primaryButton} mt-6`} disabled={saving}>
        <Check size={16} /> {saving ? 'Salvando...' : 'Salvar'}
      </button>
    </form>
  );
}
