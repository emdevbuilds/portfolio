import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Emmanuel Chukwu",
  description: "A complete archive of my professional and experimental work.",
};

export default function AllProjectsPage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors w-fit group"
      >
        <ArrowLeft
          size={14}
          className="transition-transform duration-150 group-hover:-translate-x-0.5"
        />
        Back to home
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600 dark:text-green-500">
            Projects
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          All Work
        </h1>
        <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
          A complete archive of my professional and experimental work.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
