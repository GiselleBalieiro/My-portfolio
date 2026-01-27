import { FaExternalLinkAlt, FaAward, FaBookOpen, FaGraduationCap, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

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

export default function Certificates() {
    const education = [
        {
            type: "Graduation",
            title: "Engenharia de Software",
            issuer: "Centro Universitário UniMetrocamp",
            date: "Jan 2023 - Dez 2026",
            description: "Bacharelado - Cursando",
            link: "#",
            hours: null
        }
    ];

    const items = [
        {
            type: "Certificate",
            title: "PHP e PDO: trabalhando com bancos de dados",
            issuer: "Alura",
            date: "11 de novembro de 2025",
            description: "Curso focado em PDO, segurança contra SQL Injection, transações e boas práticas com banco de dados.",
            link: "https://cursos.alura.com.br/certificate/29c99265-37a4-4301-b23e-f4f81fc9ae73?lang=pt_BR",
            hours: "10h"
        },
        {
            type: "Certificate",
            title: "Começando em Cloud: usando a AWS e explorando os recursos da nuvem como serviço",
            issuer: "Alura",
            date: "10 de agosto de 2025",
            description: "Introdução à computação em nuvem com AWS, criando instâncias e explorando segurança e serviços.",
            link: "https://cursos.alura.com.br/certificate/7c6f2498-db74-4c73-825b-bfed03dfd625?lang=pt_BR",
            hours: "8h"
        },
        {
            type: "Certificate",
            title: "jQuery: domine a biblioteca mais popular do mercado parte 1",
            issuer: "Alura",
            date: "20 de maio de 2025",
            description: "Manipulação de DOM, eventos e animações com a biblioteca jQuery.",
            link: "https://cursos.alura.com.br/certificate/3ea64bb3-bd9d-4505-9f43-6be229826757?lang=pt_BR",
            hours: "12h"
        },
        {
            type: "Certificate",
            title: "MySQL: conhecendo a ferramenta",
            issuer: "Alura",
            date: "15 de maio de 2025",
            description: "Fundamentos de MySQL, desde a estrutura do banco até consultas e manipulação de dados.",
            link: "https://cursos.alura.com.br/certificate/9d8ea112-ee54-4eb2-b853-344c30ef3cc0?lang=pt_BR",
            hours: "8h"
        },
        {
            type: "Certificate",
            title: "PHP e MySQL: criando sua primeira aplicação web",
            issuer: "Alura",
            date: "16 de março de 2025",
            description: "Desenvolvimento de uma aplicação web completa integrando PHP com banco de dados MySQL.",
            link: "https://cursos.alura.com.br/certificate/6e5f4204-a713-4de0-99c7-3100c0ae7865?lang=pt_BR",
            hours: "10h"
        },
        {
            type: "Certificate",
            title: "SQLite online: conhecendo instruções SQL",
            issuer: "Alura",
            date: "12 de março de 2025",
            description: "Aprendizado prático de SQL com SQLite, cobrindo criação de tabelas, consultas e manipulação de dados.",
            link: "https://cursos.alura.com.br/certificate/b5af9240-3a4a-47ea-9472-6b133fef2484?lang=pt_BR",
            hours: "8h"
        },
        {
            type: "Certificate",
            title: "Full Stack Week",
            issuer: "Full Stack Club",
            date: "Fevereiro de 2025",
            description: "Desenvolvimento do projeto FSW Donalds: simulação de totem de pedidos com React, TypeScript, PostgreSQL, Prisma e Tailwind.",
            link: "#",
            hours: "Intensivo"
        },
        {
            type: "Certificate",
            title: "Next.js: explorando o framework",
            issuer: "Alura",
            date: "28 de janeiro de 2025",
            description: "Exploração do framework Next.js, incluindo rotas dinâmicas, build, SEO e deploy.",
            link: "https://cursos.alura.com.br/certificate/1b81fe3c-e34c-441f-a16e-0dede3207c5b?lang=pt_BR",
            hours: "8h"
        },
        {
            type: "Certificate",
            title: "PHP: evolua seu conhecimento e organize seu código",
            issuer: "Alura",
            date: "02 de janeiro de 2025",
            description: "Aprofundamento em PHP, focando em organização de código e manipulação de arquivos.",
            link: "https://cursos.alura.com.br/certificate/6afabc74-3830-4e21-8836-d71405a13615?lang=pt_BR",
            hours: "8h"
        },
        {
            type: "Certificate",
            title: "PHP: criando sua aplicação",
            issuer: "Alura",
            date: "02 de janeiro de 2025",
            description: "Introdução à linguagem PHP, conceitos básicos de arrays, loops e lógica de programação.",
            link: "https://cursos.alura.com.br/certificate/db098b52-3cfb-4b5d-b5ef-ed5dd0fa9fc2?lang=pt_BR",
            hours: "8h"
        },
        {
            type: "Certificate",
            title: "React: desenvolvendo com JavaScript",
            issuer: "Alura",
            date: "28 de dezembro de 2024",
            description: "Desenvolvimento front-end moderno com React, componentes, props e estado.",
            link: "https://cursos.alura.com.br/certificate/e27c6743-6b92-47b9-8f76-e48dac6ef693?lang=pt_BR",
            hours: "14h"
        },
        {
            type: "Certificate",
            title: "Git e GitHub: dominando controle de versão de código",
            issuer: "Alura",
            date: "10 de dezembro de 2024",
            description: "Controle de versão completo com Git e GitHub, desde comandos básicos até trabalho em equipe.",
            link: "https://cursos.alura.com.br/certificate/ad8652cb-d04c-4cf8-a16e-0dede3207c5b?lang=pt_BR",
            hours: "8h"
        },
        {
            type: "Certificate",
            title: "Imersão Dev Back-End",
            issuer: "Alura",
            date: "07 de dezembro de 2024",
            description: "Introdução à lógica de programação utilizando JavaScript e Google Gemini, com foco em desenvolvimento back-end e inteligência artificial.",
            link: "https://cursos.alura.com.br/immersion/certificate/3d01ce56-af92-4bfa-8946-2a0c8b333d93",
            hours: "4h"
        },
        {
            type: "Certificate",
            title: "NLW Pocket: Javascript - Full-stack Intermediário",
            issuer: "Rocketseat",
            date: "2024",
            description: "Desenvolvimento full-stack utilizando Javascript e tecnologias modernas do ecossistema.",
            link: "https://app.rocketseat.com.br/certificates/cfb7f005-0ced-4ecc-b330-77af8bad4d0c",
            hours: "5h"
        },
        {
            type: "Certificate",
            title: "Imersão Front-End",
            issuer: "Alura",
            date: "24 de julho de 2024",
            description: "Mergulho intenso no desenvolvimento Front-End, criando projetos práticos com HTML, CSS e JavaScript.",
            link: "https://cursos.alura.com.br/immersion/certificate/ddea1e65-99d7-4785-bffe-3de8df524a07?lang",
            hours: "5h"
        },
        {
            type: "Certificate",
            title: "Imersão Dev 7ª Edição",
            issuer: "Alura",
            date: "28 de novembro de 2023",
            description: "Introdução à lógica de programação e criação de primeiros projetos com JavaScript.",
            link: "https://cursos.alura.com.br/immersion/certificate/6b0f87da-2040-41ec-b198-37be6c6b5ec5?lang",
            hours: "4h"
        }
    ];

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-6 mb-6 w-full"
        >
            <motion.div variants={item} className="mb-6">
                <h1 className="text-text-primary text-3xl">Certificates & Courses</h1>
                <span className="text-text-secondary text-[14px]">
                    My academic achievements and professional development updates.
                </span>
            </motion.div>

            <motion.div variants={item} className="mb-8 w-full">
                <div className="p-6 rounded-xl border border-brand-indigo/50 bg-brand-indigo/5 w-full">
                    <h3 className="text-text-primary text-lg font-semibold">{education[0].title}</h3>
                    <span className="text-text-secondary text-sm block mt-1">{education[0].issuer}</span>
                    <span className="text-text-secondary text-sm mt-2 block">{education[0].description}</span>
                    <span className="text-text-secondary text-sm mt-2 block">{education[0].date}</span>
                </div>
            </motion.div>

            <div className="flex flex-col gap-6 w-full">
                {items.map((itemData, index) => (
                    <motion.div
                        variants={item}
                        key={index}
                        className="flex flex-col gap-4 p-6 rounded-xl border border-border-primary bg-transparent hover:bg-bg-tertiary transition-colors w-full card-project"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-bg-tertiary rounded-lg">
                                    {itemData.type === "Certificate" ? (
                                        <FaAward className="text-brand-indigo text-xl" />
                                    ) : (
                                        <FaBookOpen className="text-brand-indigo text-xl" />
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-text-primary text-lg font-semibold">
                                        {itemData.title}
                                    </h2>
                                    <span className="text-text-secondary text-sm">
                                        {itemData.issuer} • {itemData.date}
                                    </span>
                                </div>
                            </div>
                            {itemData.link && itemData.link !== "#" && (
                                <a
                                    href={itemData.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    <FaExternalLinkAlt />
                                </a>
                            )}
                        </div>

                        <p className="text-text-secondary text-sm leading-relaxed">
                            {itemData.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2 items-center justify-between w-full">
                            <span className={`text-xs px-2 py-1 rounded-full border ${itemData.type === 'Certificate' ? 'border-brand-indigo/30 text-brand-indigo' : 'border-blue-500/30 text-blue-400'}`}>
                                {itemData.type}
                            </span>

                            {itemData.hours && (
                                <span className="flex items-center gap-1 text-text-secondary text-xs">
                                    <FaClock className="text-brand-indigo" />
                                    {itemData.hours}
                                </span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
