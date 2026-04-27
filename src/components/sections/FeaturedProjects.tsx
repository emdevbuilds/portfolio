"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  SectionHeading,
  RevealSection,
  StaggeredGrid,
  StaggeredItem,
} from "@/components/section-components";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 flex flex-col gap-10 border-t border-zinc-100 dark:border-zinc-800/80"
    >
      {/* Header */}
      <div className="flex flex-col gap-3">
        <SectionHeading>Projects</SectionHeading>
        <RevealSection delay={0.05}>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured Work
          </h3>
        </RevealSection>
        <RevealSection delay={0.1}>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
            A selection of my professional work and personal experiments.
          </p>
        </RevealSection>
      </div>

      {/* Grid */}
      <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, 4).map((project) => (
          <StaggeredItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggeredItem>
        ))}
      </StaggeredGrid>

      {/* CTA */}
      <RevealSection delay={0.1} className="flex justify-center mt-2">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-zinc-200 dark:hover:shadow-zinc-900"
        >
          View all projects
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </RevealSection>
    </section>
  );
}
