import { useCallback, useEffect, useState } from 'react';
import { Download, RefreshCw } from 'lucide-react';
import { apiMessage, contentApi } from '@/lib/api';
import { defaultContent } from '@/content/defaults';
import { applyPlan, buildPlan, COLLECTIONS, loadLive, planIsEmpty } from './importDefaults';
import { feedbackClass, ghostButton, primaryButton } from './styles';

const TITLES = { skills: 'Tech Stack', experiences: 'Experiência', projects: 'Projetos' };

function Names({ items, className }) {
  if (!items.length) return null;

  return <span className={`block text-[12px] ${className}`}>{items.map((item) => item.label).join(' · ')}</span>;
}

export function ImportPanel({ onChanged }) {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [progress, setProgress] = useState('');
  const [feedback, setFeedback] = useState(null);

  const preview = useCallback(async () => {
    setLoading(true);

    try {
      const live = await loadLive(contentApi);
      setPlan(buildPlan(live, defaultContent));
    } catch (error) {
      setFeedback({ type: 'error', text: apiMessage(error, 'Não foi possível carregar o conteúdo publicado.') });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    preview();
  }, [preview]);

  const apply = async () => {
    setApplying(true);
    setFeedback(null);
    let step = '';

    try {
      await applyPlan(plan, contentApi, (text) => {
        step = text;
        setProgress(text);
      });
      setFeedback({ type: 'success', text: 'Conteúdo importado. O site já mostra a versão nova.' });
      onChanged?.();
      await preview();
    } catch (error) {
      setFeedback({ type: 'error', text: `Parou em "${step}": ${apiMessage(error)}` });
      await preview();
    } finally {
      setApplying(false);
      setProgress('');
    }
  };

  const empty = plan && planIsEmpty(plan);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-2">
        <h2 className="text-text-primary text-xl">Importar conteúdo</h2>
        <button type="button" className={ghostButton} onClick={preview} disabled={loading || applying}>
          <RefreshCw size={14} /> Atualizar prévia
        </button>
      </div>
      <p className="text-text-secondary text-[13px] mb-6">
        Publica o conteúdo do arquivo <code>src/content/defaults.js</code>: perfil (cargo e "sobre mim"), tech stack,
        experiência e projetos. Imagens e logos já enviados são mantidos. Certificados não mudam.
      </p>

      {feedback ? <div className={feedbackClass(feedback.type)}>{feedback.text}</div> : null}

      {loading ? (
        <span className="text-text-secondary text-[13px]">Comparando com o que está publicado...</span>
      ) : plan ? (
        <>
          <div className="flex flex-col gap-3 mb-6">
            <div className="rounded-xl border border-border-primary p-3">
              <span className="text-text-primary text-sm">Perfil</span>
              <span className="block text-text-secondary text-[12px]">
                {plan.profile ? 'Cargo e "sobre mim" serão atualizados' : 'Sem mudanças'}
              </span>
            </div>

            {COLLECTIONS.map((collection) => {
              const { create, update, remove } = plan[collection];

              return (
                <div key={collection} className="rounded-xl border border-border-primary p-3">
                  <span className="text-text-primary text-sm">{TITLES[collection]}</span>
                  <span className="block text-text-secondary text-[12px] mb-1">
                    {create.length} novo(s) · {update.length} atualizado(s) · {remove.length} removido(s)
                  </span>
                  <Names items={create} className="text-green-600" />
                  <Names items={update} className="text-text-secondary" />
                  {remove.length ? (
                    <span className="block text-[12px] text-red-500">
                      Sai do site: {remove.map((item) => item.label).join(' · ')}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>

          <button type="button" className={primaryButton} onClick={apply} disabled={applying || empty}>
            <Download size={16} />
            {applying ? `Importando... ${progress}` : empty ? 'Tudo já está atualizado' : 'Importar agora'}
          </button>
        </>
      ) : null}
    </div>
  );
}
