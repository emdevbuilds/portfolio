"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { StaggeredGrid, StaggeredItem } from "@/components/section-components";

// ── Types — mirror your lib/projects shape ────────────────────────────────────
interface Decision {
  title: string;
  body: string;
}
interface Challenge {
  title: string;
  body: string;
}

export interface ProjectDetailProps {
  name: string;
  role: string;
  period: string;
  status: "In Development" | "Live" | "Completed";
  tagline: string;
  stack: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  myRole: string;
  decisions: Decision[];
  challenges: Challenge[];
  results: string;
  retrospective: string;
}

// ── Status styles ─────────────────────────────────────────────────────────────
const statusStyles: Record<string, string> = {
  "In Development":
    "bg-amber-500/10 border-amber-500/25 text-amber-600 dark:text-amber-400",
  Live: "bg-green-500/10 border-green-500/25 text-green-600 dark:text-green-400",
  Completed:
    "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400",
};

// ── Shared easing ─────────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1] as const;

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
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

// ── Section wrapper ────────────────────────────────────────────────────────────
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <h2 className="text-base font-bold text-zinc-800 dark:text-zinc-200 shrink-0">
          {title}
        </h2>
        <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
      </div>
      {children}
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function ProjectDetail({
  project,
}: {
  project: ProjectDetailProps;
}) {
  return (
    <article className="flex flex-col gap-14">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors w-fit group"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-150 group-hover:-translate-x-0.5"
          />
          All projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        className="flex flex-col gap-6"
        variants={headerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Title row */}
        <motion.div
          variants={headerItem}
          className="flex items-start justify-between gap-4 flex-wrap"
        >
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {project.name}
              </h1>
              <span
                className={`text-[10px] px-2.5 py-0.5 rounded-full border font-semibold uppercase tracking-wide ${
                  statusStyles[project.status] ?? ""
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {project.role}
              <span className="mx-1.5 text-zinc-300 dark:text-zinc-700">·</span>
              {project.period}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <FaGithub size={13} />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-green-600 hover:bg-green-700 text-white transition-colors hover:shadow-lg hover:shadow-green-500/20"
              >
                <Globe size={13} />
                Live site
                <ArrowUpRight size={11} className="opacity-70" />
              </a>
            )}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={headerItem}
          className="text-base text-zinc-500 dark:text-zinc-400 leading-[1.85] max-w-2xl"
        >
          {project.tagline}
        </motion.p>

        {/* Stack */}
        <motion.div variants={headerItem} className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Cover image */}
      {project.imageUrl && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
        >
          <Image
            src={project.imageUrl}
            alt={`${project.name} screenshot`}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      )}

      {/* Content sections — each scrolls in independently */}
      <div className="flex flex-col gap-12">
        <Section title="Overview">
          <p className="text-[0.9375rem] text-zinc-500 dark:text-zinc-400 leading-[1.9]">
            {project.overview}
          </p>
        </Section>

        <Section title="The Problem">
          <p className="text-[0.9375rem] text-zinc-500 dark:text-zinc-400 leading-[1.9]">
            {project.problem}
          </p>
        </Section>

        <Section title="My Role">
          <p className="text-[0.9375rem] text-zinc-500 dark:text-zinc-400 leading-[1.9]">
            {project.myRole}
          </p>
        </Section>

        <Section title="Technical Decisions">
          <StaggeredGrid className="flex flex-col gap-3">
            {project.decisions.map((d) => (
              <StaggeredItem key={d.title}>
                <div className="flex flex-col gap-2 p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {d.title}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-[1.8]">
                    {d.body}
                  </p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </Section>

        <Section title="Challenges">
          <StaggeredGrid className="flex flex-col gap-3">
            {project.challenges.map((c) => (
              <StaggeredItem key={c.title}>
                <div className="flex flex-col gap-2 p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 border-l-2 border-l-green-500">
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {c.title}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-[1.8]">
                    {c.body}
                  </p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </Section>

        <Section title="Results">
          <blockquote className="border-l-2 border-green-500 pl-5 text-[0.9375rem] text-zinc-700 dark:text-zinc-300 leading-[1.9] italic">
            {project.results}
          </blockquote>
        </Section>

        <Section title="Retrospective">
          <p className="text-[0.9375rem] text-zinc-500 dark:text-zinc-400 leading-[1.9]">
            {project.retrospective}
          </p>
        </Section>
      </div>

      {/* Footer nav */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between flex-wrap gap-4"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors group"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-150 group-hover:-translate-x-0.5"
          />
          All projects
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors group"
        >
          Get in touch
          <ArrowUpRight
            size={13}
            className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </motion.div>
    </article>
  );
}
