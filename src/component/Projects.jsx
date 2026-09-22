import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ImageModal from "./ImageModal";
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function ProjectCard({ project }) {
  const images = project.images || [];
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      variants={item}
      className="card-project p-6 rounded-xl border border-border-primary bg-transparent hover:bg-bg-tertiary transition-colors w-full mt-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-text-primary text-[20px]">{project.title}</h1>
            <p className="text-text-secondary mt-3 text-sm">{project.description}</p>
            {project.tags?.length ? (
              <div className="mt-6 mb-6">
                <div className="flex flex-row gap-3 mt-2 flex-wrap">
                  {project.tags.map((tag) => (
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

          <div className="flex flex-row gap-6 flex-wrap">
            {project.links?.map((link) => (
              <a
                key={`${link.label}-${link.url}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-text-primary transition-colors text-text-secondary"
              >
                {link.kind === 'github' ? <FaGithub /> : <FaExternalLinkAlt />} {link.label}
              </a>
            ))}
          </div>
        </div>

        {images.length ? (
          <div className="relative group">
            <div
              className="relative overflow-hidden rounded-lg bg-bg-secondary aspect-video cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {images.length > 1 ? (
              <div className="flex justify-center gap-2 mt-3">
                {images.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${index === currentImage
                      ? 'bg-text-primary w-6'
                      : 'bg-text-secondary hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div>
            ) : null}

            <ImageModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              images={images}
              currentIndex={currentImage}
              onNext={nextImage}
              onPrev={prevImage}
              onSelectImage={setCurrentImage}
            />
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { content } = useContent();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-6 mb-6"
    >
      <motion.div variants={item} className="mb-6">
        <h1 className="text-text-primary text-3xl">My projects</h1>
        <span className="text-text-secondary text-[14px]">Projects showcasing my expertise in full-stack development.</span>
      </motion.div>

      {content.projects.map((project, index) => (
        <ProjectCard key={project.uuid || index} project={project} />
      ))}
    </motion.div>
  );
}
