export default function Experience() {
  return (
    <div>
      <>
        <div className="mt-6 mb-6">
          <div className="mb-6">
            <h1 className="text-[#E5E7EB] text-3xl">Work Experience</h1>
            <span className="text-[#CBD5E1] text-[14px]">My professional journey</span>
          </div>
          <div className="flex items-start gap-6 mb-8">
            <div className="flex flex-col items-center relative">
              <span className="flex flex-col items-center">
                <span className="w-4 h-4 rounded-full border-2 border-[#8B5CF6] bg-[#0B0F14] flex items-center justify-center z-10">
                  <img
                    src="/images/image.png"
                    alt="Era Logo"
                    className="w-3 h-3 rounded-full"
                  />
                </span>
                <span
                  className="w-0.5 bg-[#8B5CF6]"
                  style={{ height: '220px', marginTop: '-2px' }}
                ></span>
              </span>
            </div>
            <div>
              <div className="mb-2.5">
                <span className="text-sm text-[#9CA3AF]">ERA</span>
                <h1>Full Stack Developer</h1>
                <span className="text-[12px] text-[#9CA3AF]">Março 2025 – Presente</span>
              </div>
              <p>
                Atuo tanto no front-end quanto no back-end, contribuo para interfaces funcionais e uma melhor experiência do usuário com responsividade, consumo de APIs para garantir a comunicação entre diferentes sistemas e serviços e análise de Data Base, identificando e corrigindo inconsistências que possam comprometer a integridade dos dados.
              </p>
              <div className="mt-6">
                <div className="flex flex-row gap-3 mt-2 ">
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">PHP</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">JavaScript</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">jQuery</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">Node</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">Mysql</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">React</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">Git</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">GitHub</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="flex flex-col items-center relative">
              <span className="flex flex-col items-center">
                <span className="w-4 h-4 rounded-full border-2 border-[#8B5CF6] bg-[#0B0F14] flex items-center justify-center z-10">
                  <img
                    src="/images/image.png"
                    alt="Era Logo"
                    className="w-3 h-3 rounded-full"
                  />
                </span>
                <span
                  className="w-0.5 bg-[#8B5CF6]"
                  style={{ height: '200px', marginTop: '-2px' }}
                ></span>
              </span>
            </div>
            <div>
              <div className="mb-2.5">
                <span className="text-sm text-[#9CA3AF]">ERA</span>
                <h1>Analista de Suporte Técnico</h1>
                <span className="text-[12px] text-[#9CA3AF]">Julho 2024 – Março 2025</span>
              </div>
              <p>
                Configuração de servidores via SSH e containers Docker, correção
                de arquivos via SFTP e suporte técnico. Também atuei no
                monitoramento de logs, otimização de desempenho e resolução de
                problemas.
              </p>
              <div className="mt-6">
                <div className="flex flex-row gap-3 mt-2 ">
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">SSH</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">SFTP</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">Docker</button>
                  <button className="p-1.5 text-[12px] bg-[#111827] rounded-lg">Excel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
