const Services = () => {
 return (
  <>
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
  </>
 )
}

export default Services;