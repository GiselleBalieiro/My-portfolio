import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useAuth } from '@/auth/auth-context';
import { inputClass, primaryButton } from './styles';

export function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/admin', { replace: true });
    } catch (loginError) {
      setError(
        loginError?.response?.data?.message || loginError.message || 'Não foi possível entrar.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-xl border border-border-primary p-6 bg-bg-secondary"
      >
        <h1 className="text-text-primary text-2xl mb-1">Painel do portfólio</h1>
        <span className="text-text-secondary text-[13px] block mb-6">
          Entre com a sua conta de administradora.
        </span>

        {error ? (
          <div className="mb-4 rounded-lg bg-red-500/10 px-3 py-2 text-[13px] text-red-500">
            {error}
          </div>
        ) : null}

        <div className="mb-4">
          <span className="text-sm text-text-primary block mb-1.5">E-mail</span>
          <input
            className={inputClass}
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <span className="text-sm text-text-primary block mb-1.5">Senha</span>
          <input
            className={inputClass}
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit" className={`${primaryButton} w-full justify-center`} disabled={loading}>
          <LogIn size={16} /> {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
