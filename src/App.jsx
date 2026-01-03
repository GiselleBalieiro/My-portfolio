import { useEffect, useState } from 'react';
import Main from "./component/Main";

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
    <Main />
    
    <button onClick={() => setIsDark(!isDark)}>
      Alterar Theme
    </button>
  </>
)
}

export default App;
