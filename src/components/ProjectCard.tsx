import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Globe } from "lucide-react";
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

const statusStyles: Record<string, string> = {
  "In Development":
    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  Live: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  Completed:
    "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-100/60 dark:hover:shadow-zinc-950/60 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.name} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-zinc-400 dark:text-zinc-600 select-none">
            Preview unavailable
          </div>
        )}

        {/* Status pill floated over image */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-[10px] px-2.5 py-0.5 rounded-full border font-semibold uppercase tracking-wide backdrop-blur-sm ${statusStyles[project.status]}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
            {project.name}
          </h3>
          <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-0.5 font-medium">
            {project.role}
          </p>
        </div>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-[1.75] line-clamp-2 flex-1">
          {project.tagline}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-zinc-100 dark:border-zinc-800">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors group/link"
          >
            Case Study
            <ArrowUpRight
              size={12}
              className="transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
              >
                <FaGithub size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                className="text-zinc-400 dark:text-zinc-600 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <Globe size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
