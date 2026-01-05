import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ImageModal from "./ImageModal";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectImages = [
    "/images/cap1.png",
    "/images/cap2.png",
    "/images/cap3.png",
    "/images/cap4.png",
    "/images/cap5.png",
    "/images/cap6.png",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const openModal = (index) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-6 mb-6">
      <div className="mb-6">
        <h1 className="text-[#E5E7EB] text-3xl">My projects</h1>
        <span className="text-[#CBD5E1] text-[14px]">Projects showcasing my expertise in full-stack development.</span>
      </div>
      <div className="rounded-xl shadow border border-[#1F2937] p-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-[#E5E7EB] text-2xl">AgenT - IA para WhatsApp</h1>
              <p className="text-[#CBD5E1] mt-1">
                Projeto para criação e gerenciamento de agentes de IA personalizados, onde cada agente possui identidade própria, dados de treinamento e integração com o WhatsApp.
              </p>
              <div className="mt-6 mb-6">
                <div className="flex flex-row gap-3 mt-2 flex-wrap">
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">React</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">Node</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">MySQL</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">MongoDB Atlas</button>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <a href="https://github.com/GiselleBalieiro/AgenT" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-[#E5E7EB] transition-colors"><FaGithub /> Front</a>
              <a href="https://github.com/GiselleBalieiro/ia-rag-api" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-[#E5E7EB] transition-colors"><FaGithub /> Back</a>
              <a href="https://agent-gules-alpha.vercel.app/" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-[#E5E7EB] transition-colors"><FaExternalLinkAlt /> Demo</a>
            </div>
          </div>

          <div className="relative group">
            <div
              className="relative overflow-hidden rounded-lg bg-[#111827] aspect-video cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(currentImage)}
            >
              <img
                src={projectImages[currentImage]}
                alt={`Project screenshot ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-center gap-2 mt-3">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    index === currentImage
                      ? 'bg-[#E5E7EB] w-6'
                      : 'bg-[#4B5563] hover:bg-[#6B7280]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={projectImages}
        currentIndex={currentImage}
        onNext={nextImage}
        onPrev={prevImage}
        onSelectImage={setCurrentImage}
      />
    </div>

  );
}

