import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    name: string;
    role: string;
    slug: string;
    imageUrl?: string;
    tagline: string;
    githubUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 shadow-sm hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-primary">{project.name}</h3>
          <p className="text-xs text-muted-foreground">{project.role}</p>
        </div>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <FaGithub size={16} />
          </a>
        )}
      </div>

      {/* Image Handling */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="text-zinc-400 dark:text-zinc-600 text-sm font-medium">
            Coming soon
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
        {project.tagline}
      </p>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400 hover:gap-2 transition-all"
      >
        View case study <ArrowUpRight size={14} />
      </Link>
    </div>
  );
}
