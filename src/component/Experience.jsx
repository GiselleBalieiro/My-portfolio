export default function Experience() {
  return (
    <div>
      <>
        <div className="mt-6 mb-6">
          <div>
            <h1 className="text-[#E5E7EB]">Work Experience</h1>
            <span>My professional journey</span>
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
                  style={{ height: '110px', marginTop: '-2px' }}
                ></span>
              </span>
            </div>
            <div>
              <span>ERA</span>
              <h1>Analista de Suporte Técnico</h1>
              <span>Julho 2024 – Março 2025</span>
              <p>
                Configuração de servidores via SSH e containers Docker, correção
                de arquivos via SFTP e suporte técnico. Também atuei no
                monitoramento de logs, otimização de desempenho e resolução de
                problemas.
              </p>
              <span>Techs:</span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
