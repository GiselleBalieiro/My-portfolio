import { useEffect, useState } from 'react';
import Main from './component/Main';
import Home from './component/Home';
import Tab from './component/Tab';
import Experience from './component/Experience';
import Projects from './component/Projects';

import ThemeToggle from './component/ThemeToggle';
import Certificates from './component/Certificates';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 p-4 lg:p-10">
        <Main />
        <div className="flex flex-col w-full lg:w-auto">
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="rounded-xl shadow border border-border-primary p-6 w-full h-full flex flex-col mt-10 max-w-[800px] overflow-auto">
            {activeTab === 'Home' ? (
              <Home />
            ) : activeTab === 'Experience' ? (
              <Experience />
            ) : activeTab === 'Projects' ? (
              <Projects />
            ) : activeTab === 'Certificates' ? (
              <Certificates />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
