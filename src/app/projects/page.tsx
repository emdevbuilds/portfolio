"use client";

import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { StaggeredGrid, StaggeredItem } from "@/components/section-components";

// metadata must be in a server component; move to a layout or keep in page
// export const metadata: Metadata = { ... }

const ease = [0.16, 1, 0.3, 1] as const;

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const headerItem = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease },
  },
};

export default function AllProjectsPage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease }}
      >
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
      </motion.div>

      {/* Header */}
      <motion.div
        className="flex flex-col gap-3"
        variants={headerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={headerItem} className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600 dark:text-green-500">
            Projects
          </span>
        </motion.div>
        <motion.h1
          variants={headerItem}
          className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          All Work
        </motion.h1>
        <motion.p
          variants={headerItem}
          className="text-base text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed"
        >
          A complete archive of my professional and experimental work.
        </motion.p>
      </motion.div>

      {/* Grid — stagger cards in */}
      <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <StaggeredItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggeredItem>
        ))}
      </StaggeredGrid>
    </div>
  );
}
