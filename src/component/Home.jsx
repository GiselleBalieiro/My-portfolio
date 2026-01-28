import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="mt-6 mb-6">
        <h1 className="text-text-primary">Hi! I'm Giselle Balieiro</h1>
      </motion.div>

      <motion.hr variants={item} />

      <motion.div variants={item} className="mt-6 mb-6">
        <span className="text-text-secondary">About Me:  </span>
        <ul className="text-text-secondary list-disc list-inside space-y-2">
          <li>I'm studying Software Engineering. I also take complementary courses like the ones on the Alura platform to expand my knowledge.</li>
          <li>Currently, I am working at Era as a Developer.</li>
          <li>Web developer with experience in front-end and back-end development, working with React, Node.js, PHP and relational databases.</li>
        </ul>
      </motion.div>

      <motion.hr variants={item} />

      <motion.div variants={item} className="mt-6 mb-6">
        <span className="text-text-secondary">Sociais:  </span>
        <div className="flex flex-row gap-3 mt-6 flex-wrap">
          <a className="p-2 bg-[#2563EB] rounded-lg text-white" href="https://www.linkedin.com/in/gisellebalieiro" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a className="p-2 bg-[#4B5563] rounded-lg text-white" href="https://github.com/GiselleBalieiro" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </motion.div>

      <motion.hr variants={item} />

      <motion.div variants={item} className="mt-6 mb-6">
        <span className="text-text-secondary">Tech Stack: </span>
        <div className="mt-6">
          <span className="text-text-secondary">Front-end</span>
          <div className="flex flex-row gap-3 mt-2 flex-wrap">
            <button className="p-2 bg-[#F97316] rounded-lg text-white">HTML</button>
            <button className="p-2 bg-[#3B82F6] rounded-lg text-white">CSS</button>
            <button className="p-2 bg-[#F59E0B] rounded-lg text-white">JavaScript</button>
            <button className="p-2 bg-[#3B82F6] rounded-lg text-white">jQuery</button>
            <button className="p-2 bg-[#3178C6] rounded-lg text-white">TypeScript</button>
            <button className="p-2 bg-[#60A5FA] rounded-lg text-white">React</button>
            <button className="p-2 bg-[#06B6D4] rounded-lg text-white">TailwindCSS</button>
          </div>
        </div>
        <div className="mt-6">
          <span className="text-text-secondary">Back-end</span>
          <div className="flex flex-row gap-3 mt-2 flex-wrap">
            <button className="p-2 bg-[#22C55E] rounded-lg text-white">Node.js</button>
            <button className="p-2 bg-[#3178C6] rounded-lg text-white">PHP</button>
          </div>
        </div>
        <div className="mt-6">
          <span className="text-text-secondary">Data Base</span>
          <div className="flex flex-row gap-3 mt-2 flex-wrap">
            <button className="p-2 bg-[#38BDF8] rounded-lg text-white">MySQL</button>
            <button className="p-2 bg-[#3178C6] rounded-lg text-white">SQL</button>
            <button className="p-2 bg-[#2563EB] rounded-lg text-white">SQLite</button>
            <button className="p-2 bg-[#22C55E] rounded-lg text-white">MongoDB Atlas</button>
            <button className="p-2 bg-[#8B5CF6] rounded-lg text-white">PostgreSQL</button>
          </div>
        </div>
        <div className="mt-6">
          <span className="text-text-secondary">Software Affinity</span>
          <div className="flex flex-row gap-3 mt-2 flex-wrap">
            <button className="p-2 bg-[#3B82F6] rounded-lg text-white">VSCode</button>
            <button className="p-2 bg-[#F97316] rounded-lg text-white">Postman</button>
            <button className="p-2 bg-[#8B5CF6] rounded-lg text-white">Figma</button>
            <button className="p-2 bg-[#3178C6] rounded-lg text-white">HeidiSQL</button>
            <button className="p-2 bg-[#3B82F6] rounded-lg text-white">DBeaver</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}