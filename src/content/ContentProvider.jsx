import { useCallback, useEffect, useMemo, useState } from 'react';
import { contentApi } from '@/lib/api';
import { ContentContext } from './content-context';
import { defaultContent } from './defaults';

/**
 * Busca o conteudo na API. Enquanto carrega - ou se a API estiver fora - o site
 * continua mostrando defaultContent, entao a pagina nunca aparece vazia.
 */
export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const { data } = await contentApi.get('/content');

      if (data?.success && data.data) {
        setContent({
          profile: data.data.profile ?? defaultContent.profile,
          skills: data.data.skills?.length ? data.data.skills : defaultContent.skills,
          experiences: data.data.experiences ?? [],
          projects: data.data.projects ?? [],
          certificates: data.data.certificates ?? [],
        });
      }
    } catch (error) {
      console.warn('Conteúdo dinâmico indisponível, usando o de reserva.', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const value = useMemo(() => ({ content, loading, refresh }), [content, loading, refresh]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}
