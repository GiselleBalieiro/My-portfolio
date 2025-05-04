import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Services from "./component/Services";


function App(darkMode) {
  return (
    <>
    <div className="min-h-screen bg-[url('./images/header-bg-color.png')] bg-top bg-blend-multiply to-white dark:bg-gradient-to-b dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-900 transition-colors duration-300"
    >

    
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
      {darkMode ? null : (
        <img src="./images/header-bg-color.png" alt="" className="w-full" />
      )}
        
      </div>

      <Navbar />

      <Header />

      <AboutMe />

      <Services />

      <Projects />

      <Contact />

      <Footer />
      </div>
    </>
  );
}

export default App;
