import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Services from "./component/Services";


function App() {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <img src="./images/header-bg-color.png" alt="" className="w-full" />
      </div>

      <Navbar />

      <Header />

      <AboutMe />

      <Services />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
