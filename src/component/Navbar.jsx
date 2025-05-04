import { useRef } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
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
        <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 backdrop-blur-lg bg-gradient-to-b  transition-colors duration-300">

        <h2 className="text-3xl font-bold text-black cursor-pointer mr-14 dark:text-white" style={{ fontFamily:  "'Oswald', sans-serif", }}>
          Giselle<span className="text-purple-500">.</span>
        </h2>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/0 dark:bg-zinc-700/0 shadow-sm bg-opacity-50">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Experience</a>
          </li>
          <li>
            <a href="#work">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <img src="./images/arrow-icon.png" alt="" className="w-3 " />
          </a>

          <button className="block md:hidden ml-3 hamburger-menu flex flex-col justify-between items-end w-6 h-5 cursor-pointer" onClick={openMenu}>
            
            <span className="block w-3 h-1 bg-black dark:bg-white rounded-full"></span> 
  <span className="block w-4 h-1 bg-black dark:bg-white rounded-full"></span> 
  <span className="block w-6 h-1 bg-black dark:bg-white rounded-full"></span> 
          </button>
        </div>

        {/* <!-- ----- mobile menu ----- --> */}

        <ul
          ref={sideMenu}
           className="flex md:hidden flex-col gap-6 py-16 px-8 fixed -right-64 top-0 bottom-0 w-72 z-50 h-screen bg-[url('./images/header-bg-color.png')] bg-top bg-blend-multiply to-white dark:bg-gradient-to-b dark:from-zinc-700 dark:to-zinc-900 shadow-lg transition-transform duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img
              src="./images/close-black.png"
              alt="Close Menu"
              className="w-6 h-6 cursor-pointer dark:invert"
            />
          </div>

          <li className="border-b border-gray-300 dark:border-zinc-600 pb-2">
            <a
              href="#top"
              onClick={closeMenu}
              className="text-lg font-semibold text-gray-800 dark:text-zinc-100 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li className="border-b border-gray-300 dark:border-zinc-600 pb-2">
            <a
              href="#about"
              onClick={closeMenu}
              className="text-lg font-semibold text-gray-800 dark:text-zinc-100 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              About Me
            </a>
          </li>
          <li className="border-b border-gray-300 dark:border-zinc-600 pb-2">
            <a
              href="#services"
              onClick={closeMenu}
              className="text-lg font-semibold text-gray-800 dark:text-zinc-100 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Experience
            </a>
          </li>
          <li className="border-b border-gray-300 dark:border-zinc-600 pb-2">
            <a
              href="#work"
              onClick={closeMenu}
              className="text-lg font-semibold text-gray-800 dark:text-zinc-100 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-lg font-semibold text-gray-800 dark:text-zinc-100 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;