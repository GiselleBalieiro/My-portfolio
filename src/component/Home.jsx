export default function Home() {
  return (
    <div>
      <>
        <div className="mt-6 mb-6">
          <h1 className="text-text-primary">Hi! I'm Giselle Balieiro</h1>
        </div>

        <hr></hr>

        <div className="mt-6 mb-6">
          <span className="text-text-secondary">About Me:  </span>
          <ul className="text-text-secondary list-disc list-inside space-y-2">
            <li>I'm studying Software Engineering. I also take complementary courses like the ones on the Alura platform to expand my knowledge.</li>
            <li>Currently, I am working at Era as a Developer.</li>
            <li>Web developer with a solid foundation in HTML, CSS and JavaScript, currently deepening knowledge in React.</li>
          </ul>
        </div>

        <hr></hr>

        <div className="mt-6 mb-6">
          <span className="text-text-secondary">Sociais:  </span>
          <div className="flex flex-row gap-3 mt-6 flex-wrap">
            <a className="p-2 bg-[#2563EB] rounded-lg" href="https://www.linkedin.com/in/gisellebalieiro" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a className="p-2 bg-[#4B5563] rounded-lg" href="https://github.com/GiselleBalieiro" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <hr></hr>

        <div className="mt-6 mb-6">
          <span className="text-text-secondary">Tech Stack: </span>
          <div className="mt-6">
            <span className="text-text-secondary">Front-end</span>
            <div className="flex flex-row gap-3 mt-2 flex-wrap">
              <button className="p-2 bg-[#F97316] rounded-lg">HTML</button>
              <button className="p-2 bg-[#3B82F6] rounded-lg">CSS</button>
              <button className="p-2 bg-[#F59E0B] rounded-lg">JavaScript</button>
              <button className="p-2 bg-[#3B82F6] rounded-lg">jQuery</button>
              <button className="p-2 bg-[#3178C6] rounded-lg">TypeScript</button>
              <button className="p-2 bg-[#60A5FA] rounded-lg">React</button>
              <button className="p-2 bg-[#06B6D4] rounded-lg">TailwindCSS</button>
            </div>
          </div>
          <div className="mt-6">
            <span className="text-text-secondary">Back-end</span>
            <div className="flex flex-row gap-3 mt-2 flex-wrap">
              <button className="p-2 bg-[#22C55E] rounded-lg">Node.js</button>
              <button className="p-2 bg-[#3178C6] rounded-lg">PHP</button>
            </div>
          </div>
          <div className="mt-6">
            <span className="text-text-secondary">Data Base</span>
            <div className="flex flex-row gap-3 mt-2 flex-wrap">
              <button className="p-2 bg-[#38BDF8] rounded-lg">MYSQL</button>
              <button className="p-2 bg-[#3178C6] rounded-lg">SQL</button>
              <button className="p-2 bg-[#2563EB] rounded-lg">SQLITE</button>
              <button className="p-2 bg-[#22C55E] rounded-lg">MONGODB ATLAS</button>
              <button className="p-2 bg-[#8B5CF6] rounded-lg">POSTGRESQL</button>
            </div>
          </div>
          <div className="mt-6">
            <span className="text-text-secondary">Software Affinity</span>
            <div className="flex flex-row gap-3 mt-2 flex-wrap">
              <button className="p-2 bg-[#3B82F6] rounded-lg">VSCODE</button>
              <button className="p-2 bg-[#F97316] rounded-lg">POSTMAN</button>
              <button className="p-2 bg-[#8B5CF6] rounded-lg">FIGMA</button>
              <button className="p-2 bg-[#3178C6] rounded-lg">HEIDISQL</button>
              <button className="p-2 bg-[#3B82F6] rounded-lg">DBEAVER</button>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}