import { TProject } from "@/types/project.type";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const ProjectDetails = ({ project }: { project: TProject }) => {
  return (
    <div className="bg-gray-100 max-w-[50rem] w-full border border-black/5 rounded-lg overflow-hidden transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
      <div className="relative w-full h-64">
        <Image
          src={project?.imageUrl}
          alt={project?.name}
          layout="fill"
          objectFit="cover"
          quality={95}
          className="rounded-t-lg shadow-2xl"
        />
      </div>
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10">
        <h3 className="text-2xl font-semibold">{project.name}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {project.description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {project?.technologies.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-evenly md:justify-between items-center my-2 gap-4">
          {project?.githubClientLink && (
            <a
              href={project.githubClientLink}
              className="flex items-center text-gray-700 dark:text-white/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1" /> Client
            </a>
          )}
          {project?.githubServerLink && (
            <a
              href={project.githubServerLink}
              className="flex items-center text-gray-700 dark:text-white/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1" /> Server
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              className="flex items-center text-gray-700 dark:text-white/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-1" /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
