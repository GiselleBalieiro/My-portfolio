import { BarChart3, Building2, Globe, Mail, MapPin, ThumbsUp } from "lucide-react";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export default function Main() {
  return (
    <div className="flex pt-6 lg:pt-20 justify-center lg:justify-start">
      <div className="flex flex-col">
        <img
          src="./images/my-icon-circle.png"
          alt=""
          className="rounded-full w-62"
        />
        <div className="pl-4">
          <div className="flex flex-col text-base mb-4 mt-4">
            <h2 className="text-[#E5E7EB] text-2xl">Giselle Balieiro</h2>
            <span className="text-[#6B7280] text-sm">Software Engineering</span>
          </div>
          <div className="flex flex-col text-secondary text-sm">
            <span className="flex flex-row gap-1 text-gray-400 mt-1"><Building2 size={16} />ERA</span>
            <span className="flex flex-row gap-1 text-gray-400 mt-1"><MapPin size={16} />Campinas - São Paulo</span>
          </div>
          <div className="flex gap-4 text-gray-400 mt-6">
            <a href="https://www.github.com/GiselleBalieiro" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/gisellebalieiro" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size={20} />
            </a>
            <a href="mailto:gisellefbalieiro@outlook.com">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}