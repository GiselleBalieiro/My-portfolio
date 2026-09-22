import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'lucide-react';
import { useAuth } from '@/auth/auth-context';
import { useContent } from '@/content/content-context';
import ThemeToggle from '@/component/ThemeToggle';
import { CollectionPanel } from './CollectionPanel';
import { ProfilePanel } from './ProfilePanel';
import { collections } from './definitions';

const tabs = [
  { id: 'profile', label: 'Sobre mim' },
  { id: 'skills', label: collections.skills.label },
  { id: 'experiences', label: collections.experiences.label },
  { id: 'projects', label: collections.projects.label },
  { id: 'certificates', label: collections.certificates.label },
];

export function AdminPage() {
  const { user, logout } = useAuth();
  const { refresh } = useContent();
  const [active, setActive] = useState('profile');

  return (
    <div className="min-h-screen p-4 lg:p-10">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-text-primary text-2xl">Painel do portfólio</h1>
            <span className="text-text-secondary text-[13px]">
              Conectada como {user?.name || user?.email}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/"
              className="flex items-center gap-1 rounded-lg border border-border-primary px-3 py-2 text-[12px] text-text-secondary hover:text-text-primary hover:border-brand-indigo transition-colors"
            >
              <ArrowLeft size={14} /> Ver o site
            </Link>
            <button
              type="button"
              onClick={logout}
              className="flex items-center gap-1 rounded-lg border border-border-primary px-3 py-2 text-[12px] text-text-secondary hover:text-red-500 transition-colors cursor-pointer"
            >
              <LogOut size={14} /> Sair
            </button>
          </div>
        </header>

        <nav className="flex flex-wrap gap-2 mb-8 border-b border-border-primary pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-lg px-3 py-2 text-sm transition-colors cursor-pointer ${
                active === tab.id
                  ? 'bg-brand-indigo/10 text-brand-indigo'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <main className="rounded-xl border border-border-primary p-5 lg:p-8">
          {active === 'profile' ? (
            <ProfilePanel onChanged={refresh} />
          ) : (
            <CollectionPanel key={active} definition={collections[active]} onChanged={refresh} />
          )}
        </main>
      </div>
    </div>
  );
}
