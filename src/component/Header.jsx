const Header = () => {
  return (
    <>
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
            className="px-10 py-3 border rounded-full border-gray-500 dark:border-zinc-600 bg-white dark:bg-zinc-700 flex items-center gap-2"
          >
            Download CV
            <img src="./images/download-icon.png" alt="" className="w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Header;