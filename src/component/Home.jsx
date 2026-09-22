import { motion } from "framer-motion";
import { useContent } from "@/content/content-context";

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
  const { content } = useContent();
  const { profile, skills } = content;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="mt-6 mb-6">
        <h1 className="text-text-primary">{profile.headline}</h1>
      </motion.div>

      <motion.hr variants={item} />

      <motion.div variants={item} className="mt-6 mb-6">
        <span className="text-text-secondary">About Me:  </span>
        <ul className="text-text-secondary list-disc list-inside space-y-2">
          {profile.about?.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </motion.div>

      <motion.hr variants={item} />

      <motion.div variants={item} className="mt-6 mb-6">
        <span className="text-text-secondary">Sociais:  </span>
        <div className="flex flex-row gap-3 mt-6 flex-wrap">
          {profile.socials?.map((social) => (
            <a
              key={social.url}
              className="p-2 rounded-lg text-white"
              style={{ backgroundColor: social.color || '#4B5563' }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.hr variants={item} />

      <motion.div variants={item} className="mt-6 mb-6">
        <span className="text-text-secondary">Tech Stack: </span>
        {skills.map((group) => (
          <div key={group.category} className="mt-6">
            <span className="text-text-secondary">{group.category}</span>
            <div className="flex flex-row gap-3 mt-2 flex-wrap">
              {group.items.map((skill) => (
                <button
                  key={skill.name}
                  className="p-2 rounded-lg text-white"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
