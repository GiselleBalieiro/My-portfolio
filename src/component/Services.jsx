import './Services.css';

const Services = () => {
  return (
    <div
      id="services"
      className="w-full py-16 px-4 sm:px-[12%] scroll-mt-20 relative"
    >
      <div id="header" className="mb-12">
        <h4 className="text-center mb-2 text-lg dark:text-zinc-400">What I offer</h4>
        <h2 className="text-center text-5xl font-mono">My experience</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 dark:text-zinc-300">
          My experience includes personal projects as well as projects developed
          in a contracted professional setting.
        </p>
      </div>
 
      <div className="relative min-h-[400px]">
        <div
          className="center-border-line hidden sm:block "
          style={{ height: '100%', top: '0', bottom: '0' }}
        ></div>

        <div className="flex flex-col gap-14 relative z-10">
          <div className="relative flex items-start justify-start">
            <div className="w-1/2 pr-8 text-right hidden sm:block"></div>
            <div className="relative w-full sm:w-1/2 sm:pl-8">
              <div className="absolute -left-4 top-2 w-8 h-8 bg-black border-4 border-rose-300 rounded-full hidden sm:block">
                <img
                  src="/images/image.png"
                  alt="Era Logo"
                  className="rounded-full "
                />
              </div>

              <div
                id="container1"
                className="bg-white dark:bg-zinc-700 text-gray-800 p-6 rounded-lg shadow-md border dark:border-zinc-400 "
              >
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-400">ERA</h3>
                <h4 className="text-md font-semibold text-rose-500 dark:text-rose-300">
                  Analista de Suporte Técnico
                </h4>
                <p className="text-sm italic text-gray-500 dark:text-zinc-300 mb-4">
                  Julho 2024 – Março 2025
                </p>
                <p className="text-sm text-gray-700 dark:text-zinc-100 leading-relaxed">
                  Configuração de servidores via SSH e containers Docker,
                  correção de arquivos via SFTP e suporte técnico. Também atuei
                  no monitoramento de logs, otimização de desempenho e resolução
                  de problemas.
                </p>
                <div className="mt-4">
                  <span className="font-semibold text-rose-600 dark:text-rose-400">Techs:</span>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    <img
                      src="https://img.icons8.com/ios-filled/50/ssh.png"
                      alt="SSH"
                      className="w-6 h-6 dark:invert"
                    />
                    <img
                      src="https://img.icons8.com/ios-filled/50/upload-to-ftp.png"
                      alt="SFTP"
                      className="w-6 h-6 dark:invert"
                    />
                    <img
                      src="https://img.icons8.com/color/48/docker.png"
                      alt="Docker"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://img.icons8.com/fluency/48/microsoft-excel-2019.png"
                      alt="Excel"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-start justify-end">
            <div className="relative w-full sm:w-1/2 sm:pr-8">
              <div className="absolute -right-4 top-2 w-8 h-8 bg-black border-4 border-rose-300 rounded-full hidden sm:block">
                <img
                  src="/images/image.png"
                  alt="Era Logo"
                  className="rounded-full"
                />
              </div>

              <div
                id="container2"
                className="bg-white dark:bg-zinc-700 text-gray-800 p-6 rounded-lg shadow-md border dark:border-zinc-400"
              >
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-400">ERA</h3>
                <h4 className="text-md font-semibold text-rose-500  dark:text-rose-300">
                  Desenvolvedor Jr.
                </h4>
                <p className="text-sm italic text-gray-500 dark:text-zinc-300 mb-4">
                  Full Stack Developer · Março 2025 – Presente
                </p>
                <p className="text-sm text-gray-700 dark:text-zinc-100 leading-relaxed">
                  Desenvolvo soluções completas atuando tanto no front-end
                  quanto no back-end, contribuindo para interfaces funcionais e
                  uma melhor experiência do usuário com responsividade. Também
                  realizo o consumo de APIs para garantir a comunicação entre
                  diferentes sistemas e serviços. Por fim, sou responsável pela
                  análise de Data Base, identificando e corrigindo
                  inconsistências que possam comprometer a integridade dos
                  dados.
                </p>
                <div className="mt-4">
                  <span className="font-semibold text-rose-600 dark:text-rose-400">Techs:</span>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    <img
                      src="https://img.icons8.com/color/48/javascript--v1.png"
                      alt="JavaScript"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://img.icons8.com/officel/40/php-logo.png"
                      alt="PHP"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://img.icons8.com/color/48/mysql-logo.png"
                      alt="MySQL"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://img.icons8.com/color/48/html-5--v1.png"
                      alt="HTML"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://img.icons8.com/color/48/css3.png"
                      alt="CSS"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-bootstrap-a-free-and-open-source-css-framework-logo-color-tal-revivo.png"
                      alt="Bootstrap"
                      className="w-[20px] h-[20px]"
                    />
                    <img
                      src="https://img.icons8.com/color/48/git.png"
                      alt="Git"
                      className="w-6 h-6"
                    />
                    <img
                      src="https://img.icons8.com/ios-filled/50/github.png"
                      alt="GitHub"
                      className="w-6 h-6 dark:invert"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-8 text-left hidden sm:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
