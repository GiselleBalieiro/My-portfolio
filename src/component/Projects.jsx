import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="mt-6 mb-6">
      <div className="mb-6">
        <h1 className="text-[#E5E7EB] text-3xl">My projects</h1>
        <span className="text-[#CBD5E1] text-[14px]">Projects showcasing my expertise in full-stack development.</span>
      </div>
      <div className="rounded-xl shadow border border-[#1F2937] p-6 flex flex-col mt-10 ">
        <div>
          <h1>AgenT - IA para WhatsApp</h1>
          <p className="text-[#CBD5E1] mt-1">
            Projeto para criação e gerenciamento de agentes de IA personalizados, onde cada agente possui identidade própria, dados de treinamento e integração com o WhatsApp.
          </p>
          <div className="mt-6 mb-6">
            <div className="flex flex-row gap-3 mt-2 ">
              <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">React</button>
              <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">Node</button>
              <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">MySQL</button>
              <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">MongoDB Atlas</button>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <a href="https://github.com/GiselleBalieiro/AgenT" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer"><FaGithub /> Front</a>
            <a href="https://github.com/GiselleBalieiro/ia-rag-api" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer"><FaGithub /> Back</a>
            <a href="https://agent-gules-alpha.vercel.app/" className="flex flex-row gap-2 justify-center items-center text-[12px] cursor-pointer"><FaExternalLinkAlt /> Demo</a>

          </div>
        </div>
      </div>
    </div>

  );
}

