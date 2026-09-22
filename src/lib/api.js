import axios from 'axios';
import { clearSession, getStoredToken } from './storage';

/** Login: rota POST /user da ia-rag-api. */
export const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
});

/** Conteudo do portfolio: projeto portfolio-api. */
export const contentApi = axios.create({
  baseURL: import.meta.env.VITE_CONTENT_API_URL,
});

contentApi.interceptors.request.use((config) => {
  const token = getStoredToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

contentApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // So derruba a sessao dentro do painel: o site publico nao usa token.
    if (error.response?.status === 401 && window.location.pathname.startsWith('/admin')) {
      clearSession();
      window.location.assign('/admin/login');
    }

    return Promise.reject(error);
  },
);

/** Transforma o erro da API na frase que aparece pra pessoa. */
export function apiMessage(error, fallback = 'Algo deu errado. Tente de novo.') {
  const data = error?.response?.data;

  if (data?.issues?.length) {
    return data.issues.map((issue) => issue.message).join(' ');
  }

  return data?.message || error?.message || fallback;
}
