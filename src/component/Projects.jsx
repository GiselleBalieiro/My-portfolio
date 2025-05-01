const Projects = () => {
  return (
    <>
          <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg">My portfolio</h4>
        <h2 className="text-center text-5xl font-mono">My latest projects</h2>
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
    </>
  )
}

export default Projects;