import { useRef } from 'react';

function App() {
  const sideMenu = useRef(null);

  function openMenu() {
    const menu = sideMenu.current;
    if (menu) {
      menu.classList.remove('translate-x-64');
      menu.classList.add('-translate-x-64');
    }
  }

  function closeMenu() {
    const menu = sideMenu.current;
    if (menu) {
      menu.classList.remove('-translate-x-64');
      menu.classList.add('translate-x-64');
    }
  }

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <img src="./images/header-bg-color.png" alt="" className="w-full" />
      </div>

      {/* nav */}
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <img
          src="./images/logo-white.png"
          alt="Logo"
          className="w-36 cursor-pointer mr-14"
        />
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            id="toggleTheme"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <img
              id="toggleTheme-dark-icon"
              src="./images/moon_icon.png"
              alt=""
              className="hidden w-6"
            />
            <img
              id="toggleTheme-light-icon"
              src="./images/sun_icon.png"
              alt=""
              className="hidden w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <img src="./images/arrow-icon.png" alt="" className="w-3 " />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img src="./images/menu-black.png" alt="" className="w-6 " />
          </button>
        </div>

        {/* <!-- ----- mobile menu ----- --> */}

        <ul
          ref={sideMenu}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img
              src="./images/close-black.png"
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- ----- header ----- --> */}

      <div className="w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <img
          src="./images/my-icon-circle.png"
          alt=""
          className="rounded-full w-32"
        />
        <h3 className="flex items-end gap-2 text-xl md:text-2x1 mb-3 font-sans">
          Hi! I'm Giselle Balieiro
          <img src="./images/hand-icon.png" alt="" className="w-6" />
        </h3>
        <h1 className="font-heading font-bold text-3xl sm:text-6xl lg:text-[66px]">
          frontend web developer
        </h1>
        <p className="max-w-2xl mx-auto font-sans">
          I'm a frontend developer in Valinhos, a Software Engineering student.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="mailto:gisellefbalieiro"
            target="_blank"
            className="px-10 py-3 border rounded-full bg-gradient-to-tr from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 font-sans text-base"
          >
            Contact me{' '}
            <img src="./images/right-arrow-white.png" alt="" className="w-4" />
          </a>

          <a
            href="./images/Currículo - (Giselle Balieiro).pdf"
            download="curriculo.pdf"
            className="px-10 py-3 border rounded-full border-gray-500 bg-white flex items-center gap-2"
          >
            Download CV
            <img src="./images/download-icon.png" alt="" className="w-4" />
          </a>
        </div>
      </div>

      {/* <!-- ----- about me ----- --> */}

      <div id="about" className="my-28 w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg">Introduction</h4>
        <h2 className="text-center text-5xl font-mono">About me</h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className="max-w-max mx-auto relative">
            <img
              src="./images/my-icon.jpg"
              alt=""
              className="w-64 sm:w-80 rounded-3xl max-w-none"
            />
            <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
              <img
                src="./images/circular-text.png"
                alt=""
                className="w-full animate-pulse"
              />
              <img
                src="./images/dev-icon.png"
                alt=""
                className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="mb-10 max-w-2xl">
              I want to graduate in Software Engineering and specialize in
              Front-end.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#4e4e4e]">
                <img src="./images/code-icon.png" alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">Languages</h3>
                <p className="text-gray-600 text-sm">
                  JavaScript, TypeScript, Node.JS, React, PHP, MySQL,
                  PostgreSQL, MongoDB Atlas, Docker, HTML, CSS and Tailwind.
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#4e4e4e]">
                <img src="./images/edu-icon.png" alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">Education</h3>
                <p className="text-gray-600 text-sm">
                  Bachelor of Science in Software Engineer
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#4e4e4e]">
                <img
                  src="./images/project-icon.png"
                  alt=""
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700">Projects</h3>
                <p className="text-gray-600 text-sm">
                  I currently have 15 projects posted on GitHub
                </p>
              </li>
            </ul>
            <h4 className="my-6 text-gray-700">Tools i use</h4>

            <ul className="flex items-center gap-3 sm:gap-5">
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img src="./images/vscode.png" alt="" className="w-5 sm:w-7" />
              </li>
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img
                  src="./images/javascript.webp"
                  alt=""
                  className="w-5 sm:w-7"
                />
              </li>
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img
                  src="./images/Typescript.svg.png"
                  alt=""
                  className="w-4 sm:w-6"
                />
              </li>
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img
                  src="./images/node_js_logo-1024.webp"
                  alt=""
                  className="w-5 sm:w-7"
                />
              </li>
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img src="./images/figma.png" alt="" className="w-5 sm:w-7" />
              </li>
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img src="./images/git.png" alt="" className="w-5 sm:w-7" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- ----- services ----- --> */}

      <div id="services" className="w-full px-[12%] py-16 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg">What i offer</h4>
        <h2 className="text-center text-5xl font-mono">My services</h2>
        <p className="text-center max-w-2x1 mx-auto mt-5 mb-12">
          My experience is based on freelance projects
        </p>

        <div className="grid grid-cols-2 gap-6 my-10">
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#4e4e4e] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <img src="./images/web-icon.png" alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">Web design</h3>
            <p className="text-sm text-gray-600 leading-5">
              Web developer is the process of building, programming...
            </p>
            <a href="" className="flex items-center gap-2 text-sm mt-5">
              Read more
              <img src="./images/right-arrow.png" alt="" className="w-4" />
            </a>
          </div>
          <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#4e4e4e] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <img src="./images/ui-icon.png" alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">UI/UX design</h3>
            <p className="text-sm text-gray-600 leading-5">
              UI/UX is the process of knowledge and construction.
            </p>
            <a href="" className="flex items-center gap-2 text-sm mt-5">
              Read more
              <img src="./images/right-arrow.png" alt="" className="w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* <!-- ----- My work ----- --> */}

      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg">My portfolio</h4>
        <h2 className="text-center text-5xl font-mono">My latest work</h2>
        <p className="text-center max-w-2x1 mx-auto mt-5 mb-12">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5">
          <a href="https://fokus-project-ten.vercel.app" target="_blank">
            <div className="aspect-square bg-[url('./images/Captura_fokus.jpeg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">Fokus</h2>
                  <p className="text-sm text-gray-700">Web design</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#4e4e4e] group-hover:bg-rose-300 transition">
                  <img src="./images/send-icon.png" alt="" className="w-5" />
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/GiselleBalieiro/Bytebank-project"
            target="_blank"
          >
            <div className="aspect-square bg-[url('./images/Captura_bytebank.jpeg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">Bytebank</h2>
                  <p className="text-sm text-gray-700">Web design</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#4e4e4e] group-hover:bg-rose-300 transition">
                  <img src="./images/send-icon.png" alt="" className="w-5" />
                </div>
              </div>
            </div>
          </a>
          <a href="https://alura-books-project.vercel.app" target="_blank">
            <div className="aspect-square bg-[url('./images/Captura_landingpage.jpeg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">LandingPage</h2>
                  <p className="text-sm text-gray-700">Web design</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#4e4e4e] group-hover:bg-rose-300 transition">
                  <img src="./images/send-icon.png" alt="" className="w-5" />
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://jogo-do-numero-secreto-ashy-theta.vercel.app"
            target="_blank"
          >
            <div className="aspect-square bg-[url('./images/Captura_jogo.jpeg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">Secret Number Game</h2>
                  <p className="text-sm text-gray-700">Web design</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#4e4e4e] group-hover:bg-rose-300 transition">
                  <img src="./images/send-icon.png" alt="" className="w-5" />
                </div>
              </div>
            </div>
          </a>
        </div>
        <a
          href="https://github.com/GiselleBalieiro"
          target="_blank"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff]"
        >
          Show more
          <img src="./images/right-arrow-bold.png" alt="" className="w-4" />
        </a>
      </div>

      {/* <!-- ----- contact ----- --> */}

      <div
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./images/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center"
      >
        <h4 className="text-center mb-2 text-lg">Connect with me</h4>
        <h2 className="text-center text-5xl font-mono">Get in touch</h2>
        <p className="text-center max-w-2x1 mx-auto mt-5 mb-12">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <form action="" className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            ></input>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            ></input>
          </div>
          <textarea
            rows="6"
            placeholder="Enter your message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          ></textarea>
          <button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
            Submit now
            <img src="./images/right-arrow-white.png" alt="" className="w-4" />
          </button>
        </form>
      </div>

      {/* <!-- ----- footer ----- --> */}

      <div className="mt-20">
        <div className="text-center">
          <img
            src="./images/logo-white.png"
            alt=""
            className="w-36 mx-auto mb2"
          />
          <div className="w-max flex items-center gap-2 mx-auto">
            <a href="mailto:gisellefbalieiro@outlook.com">
              <img src="./images/mail_icon.png" alt="" className="w-6" />
            </a>
          </div>
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
          <p>© 2024 Giselle Balieiro. All rights reserved.</p>
          <ul className="flex items-center gap-10 justify-between mt-4 sm:mt-0">
            <li>
              <a href="https://github.com/GiselleBalieiro" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gisellebalieiro"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
