import Link from "next/link";
import Image from "next/image";
import { FileText, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    name: string;
    role: string;
    status: "In Development" | "Live" | "Completed";
    slug: string;
    imageUrl?: string;
    tagline: string;
    githubUrl?: string;
    liveUrl?: string;
  };
}

const statusStyles = {
  "In Development": "bg-amber-500/10 text-amber-600 border-amber-500/20",
  Live: "bg-green-500/10 text-green-600 border-green-500/20",
  Completed: "bg-zinc-100 text-zinc-600 border-zinc-200",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 shadow-sm hover:shadow-lg">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-primary truncate">
            {project.name}
          </h3>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${statusStyles[project.status]}`}
          >
            {project.status}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">{project.role}</p>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xs">
            Preview unavailable
          </div>
        )}
      </div>

      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
        {project.tagline}
      </p>

      {/* Footer: Links */}
      <div className="mt-auto flex items-center justify-between gap-4 pt-2">
        <Link
          href={`/projects/${project.slug}`}
          className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400"
        >
          Case Study <FileText size={14} />
        </Link>
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-primary transition-colors"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-green-600 transition-colors"
            >
              <Globe size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
