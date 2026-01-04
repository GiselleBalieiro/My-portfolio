import { useEffect, useState } from 'react';
import Main from './component/Main';
import Home from './component/Home';
import Tab from './component/Tab';
import Experience from './component/Experience';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      <div
        className="flex flex-row justify-center
    gap-20 p-10"
      >
        <Main />
        <div className="flex flex-col">
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="rounded-xl shadow border border-[#1F2937] p-6 w-full h-full flex flex-col mt-10 max-w-[800px] overflow-auto">
            {activeTab === 'Home' ? (
              <Home />
            ) : activeTab === 'Experience' ? (
              <Experience />
            ) : null}
          </div>
        </div>
      </div>
      {/*
    <button onClick={() => setIsDark(!isDark)}>
      Alterar Theme
    </button>
    */}
    </>
  );
}

export default App;
