import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('portfolioDarkMode');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialMode = savedMode ? JSON.parse(savedMode) : systemDark;
    
    setDarkMode(initialMode);
    
    if (initialMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('portfolioDarkMode', JSON.stringify(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  if (darkMode === undefined) {
    return (
      <div className="w-10 h-10"></div> 
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {darkMode ? (
        <img src="./images/sun_icon.png" alt="Sol" className="w-6 h-6" />
      ) : (
        <img src="./images/moon_icon.png" alt="Lua" className="w-6 h-6" />
      )}
    </button>
  );
}


export default ThemeToggle;