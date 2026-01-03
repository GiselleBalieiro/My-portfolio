import { useEffect, useState } from 'react';
import Main from "./component/Main";
import Home from './component/Home';

function App() {
const [isDark, setIsDark] = useState(true)

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}, [isDark])

return (
  <>
    <div className="flex flex-row mt-40">
      <Main />

      <Home />

    </div>
    {/*
    <button onClick={() => setIsDark(!isDark)}>
      Alterar Theme
    </button>
    */}
  </>
)
}

export default App;
