import { motion } from "framer-motion";

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
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="mt-6 mb-6">
        <div className="mb-6">
          <h1 className="text-text-primary text-3xl">Work Experience</h1>
          <span className="text-text-secondary text-[14px]">My professional journey</span>
        </div>
        <motion.div variants={item} className="flex items-start gap-6 mb-8">
          <div className="flex flex-col items-center relative">
            <span className="flex flex-col items-center">
              <span className="w-4 h-4 rounded-full border-2 border-brand-indigo bg-bg-primary flex items-center justify-center z-10">
                <img
                  src="/images/image.png"
                  alt="Era Logo"
                  className="w-3 h-3 rounded-full"
                />
              </span>
              <span
                className="w-0.5 bg-brand-indigo"
                style={{ height: '220px', marginTop: '-2px' }}
              ></span>
            </span>
          </div>
          <div>
            <div className="mb-2.5">
              <span className="text-sm text-text-secondary">ERA</span>
              <h1>Full Stack Developer</h1>
              <span className="text-[12px] text-text-secondary">Março 2025 – Presente</span>
            </div>
            <p>
              Atuo tanto no front-end quanto no back-end, contribuo para interfaces funcionais e uma melhor experiência do usuário com responsividade, consumo de APIs para garantir a comunicação entre diferentes sistemas e serviços e análise de Data Base, identificando e corrigindo inconsistências que possam comprometer a integridade dos dados.
            </p>
            <div className="mt-6">
              <div className="flex flex-row gap-3 mt-2 flex-wrap">
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">PHP</button>
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">JavaScript</button>
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">jQuery</button>
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">Node</button>
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">Mysql</button>
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">React</button>
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">Git</button>
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">GitHub</button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={item} className="flex items-start gap-6">
          <div className="flex flex-col items-center relative">
            <span className="flex flex-col items-center">
              <span className="w-4 h-4 rounded-full border-2 border-brand-indigo bg-bg-primary flex items-center justify-center z-10">
                <img
                  src="/images/image.png"
                  alt="Era Logo"
                  className="w-3 h-3 rounded-full"
                />
              </span>
              <span
                className="w-0.5 bg-brand-indigo"
                style={{ height: '200px', marginTop: '-2px' }}
              ></span>
            </span>
          </div>
          <div>
            <div className="mb-2.5">
              <span className="text-sm text-text-secondary">ERA</span>
              <h1>Analista de Suporte Técnico</h1>
              <span className="text-[12px] text-text-secondary">Julho 2024 – Março 2025</span>
            </div>
            <p>
              Configuração de servidores via SSH e containers Docker, correção
              de arquivos via SFTP e suporte técnico. Também atuei no
              monitoramento de logs, otimização de desempenho e resolução de
              problemas.
            </p>
            <div className="mt-6">
              <div className="flex flex-row gap-3 mt-2 flex-wrap">
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">SSH</button>
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">SFTP</button>
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">Docker</button>
                <button className="p-1.5 text-[12px] bg-bg-tertiary rounded-lg text-text-primary">Excel</button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
