import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Projects — Emmanuel Chukwu" };

export default function AllProjectsPage() {
  return (
    <div className="flex flex-col gap-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft size={14} /> Back to Home
      </Link>

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">All Projects</h1>
        <p className="text-muted-foreground text-lg">
          A complete archive of my professional and experimental work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
