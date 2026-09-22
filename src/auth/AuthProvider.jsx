import { useCallback, useMemo, useState } from 'react';
import { authApi } from '@/lib/api';
import { clearSession, getStoredUser, storeSession } from '@/lib/storage';
import { AuthContext } from './auth-context';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getStoredUser());

  const login = useCallback(async (email, password) => {
    const { data } = await authApi.post('/user', { email, password });

    if (!data.success || !data.token) {
      throw new Error(data.message || 'Não foi possível entrar.');
    }

    if (data.user?.role !== 'admin') {
      throw new Error('Esta conta não tem permissão de administrador.');
    }

    storeSession(data.token, data.user);
    setUser(data.user);
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), login, logout }),
    [user, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
