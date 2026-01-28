import { BarChart3, Building2, Globe, Mail, MapPin, ThumbsUp } from "lucide-react";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Main() {
  return (
    <div className="flex pt-6 lg:pt-20 justify-center lg:justify-start w-full lg:w-auto">
      <div className="flex flex-col w-full px-4 lg:px-0">

        <div className="flex flex-row items-center lg:flex-col lg:items-start w-full lg:w-auto gap-4 lg:gap-0">
          <img
            src="./images/my-icon-circle-opt.png"
            alt=""
            className="rounded-full w-20 h-20 lg:w-62 lg:h-auto"
          />
          <div className="flex flex-col lg:pl-4 lg:mt-4">
            <h2 className="text-text-primary text-xl lg:text-2xl font-bold lg:font-normal">Giselle Balieiro</h2>
            <span className="text-text-secondary text-sm">Software Engineering</span>
          </div>
          <div className="ml-auto lg:hidden">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col lg:pl-4 mt-4 text-text-secondary text-sm">

          <span className="flex flex-row gap-1 items-center text-base mt-1"><Building2 size={18} />ERA</span>
          <span className="flex flex-row gap-1 items-center text-base mb-6"><MapPin size={18} />Campinas - São Paulo</span>

          <div className="flex flex-col gap-1 text-text-secondary">
            <a href="https://www.github.com/GiselleBalieiro" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
              <span className="flex flex-row gap-1 items-center text-base"><FaGithub size={18} /> GiselleBalieiro</span>
            </a>
            <a href="https://www.linkedin.com/in/gisellebalieiro" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
              <span className="flex flex-row gap-1 items-center text-base"><AiFillLinkedin size={18} /> in/gisellebalieiro</span>
            </a>
            <a href="mailto:gisellefbalieiro@outlook.com" className="hover:text-text-primary transition-colors">
              <span className="flex flex-row gap-1 items-center text-base"><Mail size={18} /> gisellefbalieiro@outlook.com</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}