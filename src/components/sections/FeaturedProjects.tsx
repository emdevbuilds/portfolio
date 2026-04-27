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

      {/* CTA — matches CtaButtons primary style */}
      <RevealSection delay={0.1} className="flex justify-center mt-2">
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
          >
            View all projects
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </RevealSection>
    </section>
  );
}
