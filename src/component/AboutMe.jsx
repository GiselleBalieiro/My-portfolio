const AboutMe = () => {
  return (
    <>
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
    </>
  )
}

export default AboutMe;