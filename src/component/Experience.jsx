import { motion } from "framer-motion";
import { useContent } from "@/content/content-context";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Experience() {
  const { content } = useContent();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-6 mb-6"
    >
      <motion.div variants={item} className="mb-6">
        <h1 className="text-text-primary text-3xl">Work Experience</h1>
        <span className="text-text-secondary text-[14px]">My professional journey</span>
      </motion.div>

      {content.experiences.map((experience, index) => (
          <motion.div
            key={experience.uuid || index}
            variants={item}
            className="flex items-start gap-6 mb-8 last:mb-0"
          >
            {/* A linha cresce com o conteudo do cargo, sem altura fixa */}
            <div className="flex flex-col items-center self-stretch">
              <span className="w-4 h-4 rounded-full border-2 border-brand-indigo bg-bg-primary flex items-center justify-center z-10 shrink-0">
                {experience.logoUrl ? (
                  <img
                    src={experience.logoUrl}
                    alt={experience.company}
                    className="w-3 h-3 rounded-full"
                  />
                ) : null}
              </span>
              <span className="w-0.5 flex-1 min-h-6 bg-brand-indigo" />
            </div>

            <div>
              <div className="mb-2.5">
                <span className="text-sm text-text-secondary">{experience.company}</span>
                <h1>{experience.role}</h1>
                <span className="text-[12px] text-text-secondary">{experience.period}</span>
              </div>
              <p>{experience.description}</p>
              {experience.tags?.length ? (
                <div className="mt-6">
                  <div className="flex flex-row gap-3 mt-2 flex-wrap">
                    {experience.tags.map((tag) => (
                      <button
                        key={tag}
                        className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        ))}
    </motion.div>
  );
}
