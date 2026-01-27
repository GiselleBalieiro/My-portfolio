import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ImageModal from "./ImageModal";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentExpenseImage, setCurrentExpenseImage] = useState(0);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const projectImages = [
    "/images/cap1.png",
    "/images/cap2.png",
    "/images/cap3.png",
    "/images/cap4.png",
    "/images/cap5.png",
    "/images/cap6.png",
  ];

  const expenseConverterImg = [
    "/images/capt1.png",
    "/images/capt2.png",
    "/images/capt3.png",
  ];

  const productRegistrationImg = [
    "/images/captu1.png",
    "/images/captu2.png",
    "/images/captu3.png",
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

  const nextExpenseImage = () => {
    setCurrentExpenseImage((prev) => (prev + 1) % expenseConverterImg.length);
  };

  const prevExpenseImage = () => {
    setCurrentExpenseImage((prev) => (prev - 1 + expenseConverterImg.length) % expenseConverterImg.length);
  };

  const openExpenseModal = (index) => {
    setCurrentExpenseImage(index);
    setIsExpenseModalOpen(true);
  };

  const closeExpenseModal = () => {
    setIsExpenseModalOpen(false);
  };

  const nextProductImage = () => {
    setCurrentProductImage((prev) => (prev + 1) % productRegistrationImg.length);
  };

  const prevProductImage = () => {
    setCurrentProductImage((prev) => (prev - 1 + productRegistrationImg.length) % productRegistrationImg.length);
  };

  const openProductModal = (index) => {
    setCurrentProductImage(index);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
  };

  return (
    <div className="mt-6 mb-6">
      <div className="mb-6">
        <h1 className="text-text-primary text-3xl">My projects</h1>
        <span className="text-text-secondary text-[14px]">Projects showcasing my expertise in full-stack development.</span>
      </div>
      <div className="card-project p-6 rounded-xl border border-border-primary bg-transparent hover:bg-bg-tertiary transition-colors w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-text-primary text-[20px]">AgenT - IA para WhatsApp</h1>
              <p className="text-text-secondary mt-3 text-sm">
                Projeto para criação e gerenciamento de agentes de IA personalizados, onde cada agente possui identidade própria, dados de treinamento e integração com o WhatsApp.
              </p>
              <div className="mt-6 mb-6">
                <div className="flex flex-row gap-3 mt-2 flex-wrap">
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">React</button>
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">Node</button>
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">MySQL</button>
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">MongoDB Atlas</button>
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">Tailwind</button>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <a href="https://github.com/GiselleBalieiro/AgenT" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-text-primary transition-colors text-text-secondary"><FaGithub /> Front</a>
              <a href="https://github.com/GiselleBalieiro/ia-rag-api" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-text-primary transition-colors text-text-secondary"><FaGithub /> Back</a>
              <a href="https://agent-gules-alpha.vercel.app/" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-text-primary transition-colors text-text-secondary"><FaExternalLinkAlt /> Demo</a>
            </div>
          </div>

          <div className="relative group">
            <div
              className="relative overflow-hidden rounded-lg bg-bg-secondary aspect-video cursor-pointer hover:opacity-90 transition-opacity"
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
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${index === currentImage
                    ? 'bg-text-primary w-6'
                    : 'bg-text-secondary hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card-project p-6 rounded-xl border border-border-primary bg-transparent hover:bg-bg-tertiary transition-colors w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-text-primary text-[20px]">Expense Converter</h1>
              <p className="text-text-secondary mt-3 text-sm">
                Projeto desenvolvido em React com foco no controle de despesas internacionais, permitindo o registro de gastos e a conversão de valores entre moedas utilizando taxas de câmbio atualizadas.
              </p>
              <div className="mt-6 mb-6">
                <div className="flex flex-row gap-3 mt-2 flex-wrap">
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">React</button>
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">JavaScript</button>
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">API Exchange Rate</button>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <a href="https://github.com/GiselleBalieiro/expense-converter" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-text-primary transition-colors text-text-secondary"><FaGithub /> Front</a>
              <a href="https://expense-converter-three.vercel.app/" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-text-primary transition-colors text-text-secondary"><FaExternalLinkAlt /> Demo</a>
            </div>
          </div>

          <div className="relative group">
            <div
              className="relative overflow-hidden rounded-lg bg-[#111827] aspect-video cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openExpenseModal(currentExpenseImage)}
            >
              <img
                src={expenseConverterImg[currentExpenseImage]}
                alt={`Expense Converter screenshot ${currentExpenseImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-center gap-2 mt-3">
              {expenseConverterImg.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExpenseImage(index)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${index === currentExpenseImage
                    ? 'bg-text-primary w-6'
                    : 'bg-text-secondary hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card-project p-6 rounded-xl border border-border-primary bg-transparent hover:bg-bg-tertiary transition-colors w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-text-primary text-[20px]">Product Registration</h1>
              <p className="text-text-secondary mt-3 text-sm">
                Projeto desenvolvido com foco no aprendizado e prática de React, simulando um sistema de gestão de estoque com controle e organização de produtos.
              </p>
              <div className="mt-6 mb-6">
                <div className="flex flex-row gap-3 mt-2 flex-wrap">
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">React</button>
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">React Router</button>
                  <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">Tailwind</button>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6">
              <a href="https://github.com/GiselleBalieiro/product-registration" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-text-primary transition-colors text-text-secondary"><FaGithub /> Front</a>
              <a href="https://product-registration-psi.vercel.app/" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer hover:text-text-primary transition-colors text-text-secondary"><FaExternalLinkAlt /> Demo</a>
            </div>
          </div>

          <div className="relative group">
            <div
              className="relative overflow-hidden rounded-lg bg-bg-secondary aspect-video cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openProductModal(currentProductImage)}
            >
              <img
                src={productRegistrationImg[currentProductImage]}
                alt={`Product Registration screenshot ${currentProductImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-center gap-2 mt-3">
              {productRegistrationImg.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductImage(index)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${index === currentProductImage
                    ? 'bg-text-primary w-6'
                    : 'bg-text-secondary hover:bg-gray-500'
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

      <ImageModal
        isOpen={isExpenseModalOpen}
        onClose={closeExpenseModal}
        images={expenseConverterImg}
        currentIndex={currentExpenseImage}
        onNext={nextExpenseImage}
        onPrev={prevExpenseImage}
        onSelectImage={setCurrentExpenseImage}
      />

      <ImageModal
        isOpen={isProductModalOpen}
        onClose={closeProductModal}
        images={productRegistrationImg}
        currentIndex={currentProductImage}
        onNext={nextProductImage}
        onPrev={prevProductImage}
        onSelectImage={setCurrentProductImage}
      />
    </div>

  );
}

