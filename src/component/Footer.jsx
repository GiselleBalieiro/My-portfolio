const Footer = () => {
  return (
    <>
          <div className="mt-20">
        <div className="text-center">
        <h2 className="text-3xl font-bold text-black mb-2 cursor-pointer dark:text-white" style={{ fontFamily:  "'Oswald', sans-serif", }}>
          Giselle<span className="text-purple-500">.</span>
        </h2>
          <div className="w-max flex items-center gap-2 mx-auto">
            <a href="mailto:gisellefbalieiro@outlook.com">
              <img src="./images/mail_icon.png" alt="" className="w-6" />
            </a>
          </div>
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
          <p>© 2023 - 2025 Giselle Balieiro. All rights reserved.</p>
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
  )
}

export default Footer;