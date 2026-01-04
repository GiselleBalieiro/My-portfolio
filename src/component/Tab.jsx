export default function Tab({ activeTab, setActiveTab }) {
  return (
    <div className="flex pl-4 cursor-pointer">
      <ul className="flex flex-row gap-6">
        <li
          className={`${
            activeTab === 'Home'
              ? 'text-[#8B5CF6] border-b-1 border-[#8B5CF6]'
              : 'hover:text-[#4B5563]'
          }`}
          onClick={() => setActiveTab('Home')}
        >
          Home
        </li>
        <li
          className={`${
            activeTab === 'Experience'
              ? 'text-[#8B5CF6] border-b-1 border-[#8B5CF6] '
              : 'hover:text-[#4B5563]'
          }`}
          onClick={() => setActiveTab('Experience')}
        >
          Experience
        </li>
        <li
          className={`${
            activeTab === 'Projects'
              ? 'text-[#8B5CF6] border-b-1 border-[#8B5CF6] hover:text-[#4B5563]'
              : 'hover:text-[#4B5563]'
          }`}
          onClick={() => setActiveTab('Projects')}
        >
          Projects
        </li>
        <li
          className={`${
            activeTab === 'Certificates'
              ? 'text-[#8B5CF6] border-b-1 border-[#8B5CF6] hover:text-[#4B5563]'
              : 'hover:text-[#4B5563]'
          }`}
          onClick={() => setActiveTab('Certificates')}
        >
          Certificates
        </li>
      </ul>
    </div>
  );
}
