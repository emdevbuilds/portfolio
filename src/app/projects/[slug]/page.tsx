import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// ── Static params ───────────────────────────────────────────────────────────

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Emmanuel Chukwu`,
    description: project.tagline,
  };
}

// ── Status badge styles ─────────────────────────────────────────────────────
// Keeping the amber badge here is actually good UX because it signals "Work in Progress,"
// but the UI structure itself now stays within your Green/Zinc palette.

const statusStyles: Record<string, string> = {
  "In Development":
    "bg-amber-500/10 border-amber-500/25 text-amber-600 dark:text-amber-400",
  Live: "bg-green-500/10 border-green-500/25 text-green-600 dark:text-green-400",
  Completed:
    "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400",
};

// ── Page ────────────────────────────────────────────────────────────────────

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="flex flex-col gap-12">
      {/* ── Back ── */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
      >
        <ArrowLeft size={14} />
        All projects
      </Link>

      {/* ── Header ── */}
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-semibold text-primary">
                {project.name}
              </h1>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full border font-medium ${statusStyles[project.status] ?? ""}`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {project.role} · {project.period}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                <Globe size={13} />
                Live site
                <ArrowUpRight size={12} className="opacity-80" />
              </a>
            )}
          </div>
        </div>

        <p className="text-base text-muted-foreground leading-7">
          {project.tagline}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── Image ── */}
      {project.imageUrl && (
        <div className="w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <Image
            src={project.imageUrl}
            alt={`${project.name} screenshot`}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* ── Overview ── */}
      <Section title="Overview">
        <p className="text-base text-muted-foreground leading-8">
          {project.overview}
        </p>
      </Section>

      {/* ── Problem ── */}
      <Section title="The Problem">
        <p className="text-base text-muted-foreground leading-8">
          {project.problem}
        </p>
      </Section>

      {/* ── My Role ── */}
      <Section title="My Role">
        <p className="text-base text-muted-foreground leading-8">
          {project.myRole}
        </p>
      </Section>

      {/* ── Technical Decisions ── */}
      <Section title="Technical Decisions">
        <div className="flex flex-col gap-4">
          {project.decisions.map((d) => (
            <div
              key={d.title}
              className="flex flex-col gap-2 p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <p className="text-sm font-medium text-primary">{d.title}</p>
              <p className="text-sm text-muted-foreground leading-6">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Challenges ── */}
      <Section title="Challenges">
        <div className="flex flex-col gap-4">
          {project.challenges.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-2 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 border-l-2 border-l-green-500"
            >
              <p className="text-sm font-medium text-primary">{c.title}</p>
              <p className="text-sm text-muted-foreground leading-6">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Results ── */}
      <Section title="Results">
        <p className="text-base text-muted-foreground leading-8 border-l-2 border-green-500 pl-4">
          {project.results}
        </p>
      </Section>

      {/* ── Retrospective ── */}
      <Section title="Retrospective">
        <p className="text-base text-muted-foreground leading-8">
          {project.retrospective}
        </p>
      </Section>

      {/* ── Footer nav ── */}
      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between flex-wrap gap-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
        >
          Get in touch
          <ArrowUpRight size={13} />
        </Link>
      </div>
    </article>
  );
}

// ── Section wrapper ─────────────────────────────────────────────────────────

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-primary">{title}</h2>
      {children}
    </div>
  );
}
