import { Building2, Mail, MapPin } from "lucide-react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useContent } from "@/content/content-context";

export default function Main() {
  const { content } = useContent();
  const profile = content.profile;

  return (
    <div className="flex pt-6 lg:pt-20 justify-center lg:justify-start w-full lg:w-auto">
      <div className="flex flex-col w-full px-4 lg:px-0">

        <div className="flex flex-row items-center lg:flex-col lg:items-start w-full lg:w-auto gap-4 lg:gap-0">
          <img
            src={profile.avatarUrl}
            alt=""
            className="rounded-full w-20 h-20 lg:w-62 lg:h-auto"
          />
          <div className="flex flex-col lg:pl-4 lg:mt-4">
            <h2 className="text-text-primary text-xl lg:text-2xl font-bold lg:font-normal">{profile.name}</h2>
            <span className="text-text-secondary text-sm">{profile.title}</span>
          </div>
          <div className="ml-auto lg:hidden">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col lg:pl-4 mt-4 text-text-secondary text-sm">

          {profile.company ? (
            <span className="flex flex-row gap-1 items-center text-base mt-1"><Building2 size={18} />{profile.company}</span>
          ) : null}
          {profile.location ? (
            <span className="flex flex-row gap-1 items-center text-base mb-6"><MapPin size={18} />{profile.location}</span>
          ) : null}

          <div className="flex flex-col gap-1 text-text-secondary">
            {profile.githubUrl ? (
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                <span className="flex flex-row gap-1 items-center text-base"><FaGithub size={18} /> {profile.githubLabel || profile.githubUrl}</span>
              </a>
            ) : null}
            {profile.linkedinUrl ? (
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
                <span className="flex flex-row gap-1 items-center text-base"><AiFillLinkedin size={18} /> {profile.linkedinLabel || profile.linkedinUrl}</span>
              </a>
            ) : null}
            {profile.email ? (
              <a href={`mailto:${profile.email}`} className="hover:text-text-primary transition-colors">
                <span className="flex flex-row gap-1 items-center text-base"><Mail size={18} /> {profile.email}</span>
              </a>
            ) : null}
          </div>

        </div>
      </div>
    </div>
  )
}
