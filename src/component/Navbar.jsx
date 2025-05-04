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
        <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 backdrop-blur-lg">
        <img
          src="./images/logo-white.png"
          alt="Logo"
          className="w-36 cursor-pointer mr-14"
        />
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white dark:bg-zinc-700 shadow-sm bg-opacity-50">
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
              Experience
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;