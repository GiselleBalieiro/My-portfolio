export default function Tab({ activeTab, setActiveTab }) {
  return (
    <div className="flex pl-0 lg:pl-4 cursor-pointer overflow-x-auto w-full">
      <ul className="flex flex-row gap-6 min-w-max lg:min-w-0">
        <li
          className={`${activeTab === 'Home'
            ? 'text-brand-indigo border-b-1 border-brand-indigo'
            : 'hover:text-text-secondary text-text-secondary'
            }`}
          onClick={() => setActiveTab('Home')}
        >
          Home
        </li>
        <li
          className={`${activeTab === 'Experience'
            ? 'text-brand-indigo border-b-1 border-brand-indigo '
            : 'hover:text-text-secondary text-text-secondary'
            }`}
          onClick={() => setActiveTab('Experience')}
        >
          Experience
        </li>
        <li
          className={`${activeTab === 'Projects'
            ? 'text-brand-indigo border-b-1 border-brand-indigo hover:text-text-secondary'
            : 'hover:text-text-secondary text-text-secondary'
            }`}
          onClick={() => setActiveTab('Projects')}
        >
          Projects
        </li>
        <li
          className={`${activeTab === 'Certificates'
            ? 'text-brand-indigo border-b-1 border-brand-indigo hover:text-text-secondary'
            : 'hover:text-text-secondary text-text-secondary'
            }`}
          onClick={() => setActiveTab('Certificates')}
        >
          Certificates
        </li>
      </ul>
    </div>
  );
}
