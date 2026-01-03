export default function Home() {
  return (
    <div>
      <div className="rounded-xl shadow border border-[#1F2937] p-6 w-full h-full flex flex-col">
        <div className="mt-6 mb-6">
          <h1 className="text-[#E5E7EB]">Hi! I'm Giselle Balieiro</h1>   
        </div>
        <hr></hr>
        <div className="mt-6 mb-6">
          <span className="text-[##CBD5E1]">About Me:  </span>
          <ul className="text-[#9CA3AF] list-disc list-inside space-y-2">
            <li>I'm studying Software Engineering. I also take complementary courses like the ones on the Alura platform to expand my knowledge.</li>
            <li>Currently, I am working at Era as a Developer.</li>
            <li>Web developer with a solid foundation in HTML, CSS and JavaScript, currently deepening knowledge in React.</li>
          </ul>
        </div>
        
        <hr></hr>
        <div className="mt-6 mb-6">
          <span className="text-[##CBD5E1]">Sociais:  </span>
          <div className="flex flex-row gap-3 mt-6 ">
            <a className="p-2 bg-[#2563EB] rounded-lg" href="https://www.linkedin.com/in/gisellebalieiro" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a className="p-2 bg-[#4B5563] rounded-lg" href="https://github.com/GiselleBalieiro" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </div>
  )
}