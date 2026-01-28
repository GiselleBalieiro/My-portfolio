import ThemeToggle from "./ThemeToggle";
import { Home, Briefcase, FolderGit2, Award } from "lucide-react";

export default function Tab({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'Home', label: 'Home', icon: Home },
    { id: 'Experience', label: 'Experience', icon: Briefcase },
    { id: 'Projects', label: 'Projects', icon: FolderGit2 },
    { id: 'Certificates', label: 'Certificates', icon: Award },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 rounded-4xl backdrop-blur-md bg-[--bg-primary]/80 border border-border-primary shadow-lg px-6 py-3 lg:static lg:bg-transparent lg:border-none lg:shadow-none lg:p-0 lg:pl-4 transition-all duration-300">
      <div className="flex flex-row justify-between items-center w-full min-w-max lg:min-w-0">
        <ul className="flex flex-row justify-between w-full lg:w-auto lg:gap-6 min-w-max lg:min-w-0">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`flex flex-col lg:flex-row items-center cursor-pointer transition-colors duration-200 
              ${activeTab === tab.id
                  ? 'text-brand-indigo lg:border-b-1 lg:border-brand-indigo'
                  : 'text-text-secondary hover:text-text-primary'
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={20} className="mb-1 lg:hidden" />
              <span className="text-[10px] lg:text-base font-medium">{tab.label}</span>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex flex-row right-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
