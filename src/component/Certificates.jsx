import { FaExternalLinkAlt, FaAward, FaBookOpen, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContent } from "@/content/content-context";

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
    const { content } = useContent();

    const education = content.certificates.filter((entry) => entry.type === 'Graduation');
    const items = content.certificates.filter((entry) => entry.type !== 'Graduation');

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

            {education.map((entry, index) => (
                <motion.div variants={item} key={entry.uuid || index} className="mb-8 w-full">
                    <div className="p-6 rounded-xl border border-brand-indigo/50 bg-brand-indigo/5 w-full">
                        <h3 className="text-text-primary text-lg font-semibold">{entry.title}</h3>
                        <span className="text-text-secondary text-sm block mt-1">{entry.issuer}</span>
                        <span className="text-text-secondary text-sm mt-2 block">{entry.description}</span>
                        <span className="text-text-secondary text-sm mt-2 block">{entry.date}</span>
                    </div>
                </motion.div>
            ))}

            <div className="flex flex-col gap-6 w-full">
                {items.map((itemData, index) => (
                    <motion.div
                        variants={item}
                        key={itemData.uuid || index}
                        className="flex flex-col gap-4 p-6 rounded-xl border border-border-primary bg-transparent hover:bg-bg-tertiary transition-colors w-full card-project"
                    >
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                {itemData.logoUrl ? (
                                    <div className="p-2 bg-bg-tertiary rounded-lg shrink-0 w-16 h-16 flex items-center justify-center">
                                        <img
                                            src={itemData.logoUrl}
                                            alt={itemData.issuer}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ) : (
                                    <div className="p-2 w-16 h-16 flex items-center justify-center bg-bg-tertiary rounded-lg">
                                        {itemData.type === "Certificate" ? (
                                            <FaAward className="text-brand-indigo text-xl" />
                                        ) : (
                                            <FaBookOpen className="text-brand-indigo text-xl" />
                                        )}
                                    </div>
                                )}
                                <div>
                                    <h2 className="text-text-primary text-lg font-semibold">
                                        {itemData.title}
                                    </h2>
                                    <span className="text-text-secondary text-sm">
                                        {itemData.issuer} • {itemData.date}
                                    </span>
                                </div>
                            </div>
                            {itemData.link ? (
                                <a
                                    href={itemData.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    <FaExternalLinkAlt />
                                </a>
                            ) : null}
                        </div>

                        <p className="text-text-secondary text-sm leading-relaxed">
                            {itemData.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2 items-center justify-between w-full">
                            <span className={`text-xs px-2 py-1 rounded-full border ${itemData.type === 'Certificate' ? 'border-brand-indigo/30 text-brand-indigo' : 'border-blue-500/30 text-blue-400'}`}>
                                {itemData.type}
                            </span>

                            {itemData.hours ? (
                                <span className="flex items-center gap-1 text-text-secondary text-xs">
                                    <FaClock className="text-brand-indigo" />
                                    {itemData.hours}
                                </span>
                            ) : null}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
