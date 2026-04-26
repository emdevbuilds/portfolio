"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import ZoomableImage from "@/components/ZoomableImage";
import Marquee from "react-fast-marquee";
import { BriefcaseBusiness, ArrowUpRight, Globe, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import CtaButtons from "@/components/CtaButton";
import { techStack } from "@/lib/techStack";
import { facts } from "@/lib/facts";
import { techSkills } from "@/lib/techSkills";
import { experience } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { socialLinks } from "@/lib/socialLinks";
import { motion } from "framer-motion";
import Link from "next/link";

// ── Animation variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// ── Shared components ───────────────────────────────────────────────────────

function RevealSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            delay,
            ease: [0.25, 0.1, 0.25, 1] as const,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <RevealSection>
      <h2 className="text-xl font-semibold text-primary">{children}</h2>
    </RevealSection>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <RevealSection>
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
        <span className="text-xs tracking-widest uppercase text-muted-foreground">
          {label}
        </span>
        <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
      </div>
    </RevealSection>
  );
}

// ── Status badge styles ─────────────────────────────────────────────────────

const statusStyles: Record<string, string> = {
  "In Development":
    "bg-amber-500/10 border-amber-500/25 text-amber-600 dark:text-amber-400",
  Live: "bg-green-500/10 border-green-500/25 text-green-600 dark:text-green-400",
  Completed:
    "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400",
};

const skillAccents = [
  "border-l-green-500",
  "border-l-blue-400",
  "border-l-violet-400",
  "border-l-amber-400",
  "border-l-zinc-400",
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans dark:bg-black">
      {/* ── Hero ── */}
      <section id="home" className="flex flex-col gap-6 py-16 md:pt-8 md:pb-20">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <ZoomableImage
            src="/emmanuel.jpg"
            alt="Emmanuel Chukwu profile picture"
            className="rounded-full ring-2 ring-green-500 p-1 w-24 h-24"
          />
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex font-medium w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-600 dark:text-green-400"
        >
          <BriefcaseBusiness size={14} />
          <span>Open to work</span>
        </motion.div>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-2xl font-semibold leading-10 tracking-normal text-primary"
        >
          Hi, I&apos;m Emmanuel Chukwu <br />
          <span className="text-green-600">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(400)
                  .typeString("Software Engineer")
                  .callFunction(() => {
                    const cursor = document.querySelector(
                      ".Typewriter__cursor",
                    ) as HTMLElement;
                    if (cursor) cursor.style.display = "none";
                  })
                  .start();
              }}
              options={{ autoStart: true, loop: false, delay: 75 }}
            />
          </span>
        </motion.h1>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="leading-8 text-base text-muted-foreground dark:text-zinc-400"
        >
          I build fast, production-ready web apps that ship to real users — with
          Next.js, TypeScript, and a backend that can handle it.
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <CtaButtons />
        </motion.div>
      </section>

      {/* ── Marquee ── */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-10 border-y border-zinc-100 dark:border-zinc-800"
        aria-label="Tech stack marquee"
      >
        <Marquee gradient gradientWidth={120} speed={40}>
          {techStack.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 mx-8 text-sm text-zinc-500"
            >
              <Icon size={20} />
              <span>{name}</span>
            </div>
          ))}
        </Marquee>
      </motion.div>

      {/* ── About ── */}
      <section
        id="about"
        className="leading-8 text-base text-muted-foreground py-24 flex flex-col gap-6"
      >
        <SectionHeading>About</SectionHeading>

        {[
          "I started writing code in 2021 with a 3-month bootcamp — and I haven't stopped since. What began as structured learning quickly became self-directed obsession: reading documentation, building real projects, breaking things, and fixing them at 2 AM.",
          "I'm a full-stack developer with hands-on experience shipping web applications that handle real users and real money. I built a healthcare platform for a non-profit organisation serving communities across Nigeria — complete with authentication, Paystack donation flows, an admin dashboard, and full SEO optimisation. I'm also the solo developer behind Zewerk, an ambitious blue-collar worker marketplace for the Nigerian market, built on a production-grade backend with PostgreSQL, Prisma, Redis, Socket.io, and an escrow payment system.",
          "I started with JavaScript, PHP and SQL, moved through the MERN stack, and now work primarily with Next.js, TypeScript, Express, PostgreSQL, and Prisma — tools I chose deliberately because they're what production teams actually use.",
          "Alongside my development work, I'm pursuing a BSc in Computer Science at IU International University of Applied Sciences (Germany), which has deepened my foundations in algorithms, data structures, and software engineering principles.",
        ].map((text, i) => (
          <RevealSection key={i} delay={0.05}>
            <p>{text}</p>
          </RevealSection>
        ))}

        <RevealSection delay={0.05}>
          <p className="border-l-2 border-green-500 pl-4">
            I don&apos;t have a big company name on my CV yet — but I have
            shipped code, solved hard problems, and built things from scratch
            that actually work. I&apos;m looking for a remote role — or an
            onsite position with visa sponsorship — where I can contribute from
            day one, grow fast, and be part of a team that takes their craft
            seriously.
          </p>
        </RevealSection>

        <Divider label="Quick facts" />

        <div className="grid grid-cols-1 gap-2.5">
          {facts.map(({ icon, label, value }, i) => (
            <motion.div
              key={label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-green-500/10 border border-green-500/25 shrink-0 text-green-600 dark:text-green-400">
                {icon}
              </div>
              <div>
                <p className="text-[11px] mb-0.5">{label}</p>
                <p className="text-sm text-primary leading-snug">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section
        id="experience"
        className="py-24 flex flex-col gap-6 border-t border-zinc-100 dark:border-zinc-800"
      >
        <SectionHeading>Experience</SectionHeading>

        <div className="flex flex-col gap-4">
          {experience.map((job, i) => (
            <RevealSection key={job.company} delay={i * 0.1}>
              <div className="p-5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium text-primary">
                      {job.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium border ${
                        job.type === "Pro Bono"
                          ? "bg-green-500/10 border-green-500/25 text-green-600 dark:text-green-400"
                          : "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400"
                      }`}
                    >
                      {job.type}
                    </span>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {job.period}
                    </span>
                  </div>
                </div>
                <div className="h-px bg-zinc-100 dark:bg-zinc-800" />
                <p className="text-sm text-muted-foreground leading-6">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section
        id="skills"
        className="py-24 flex flex-col gap-6 border-t border-zinc-100 dark:border-zinc-800"
      >
        <SectionHeading>Skills</SectionHeading>

        <div className="flex flex-col gap-3">
          {techSkills.map((category, i) => (
            <RevealSection key={category.title} delay={i * 0.07}>
              <div
                className={`flex flex-col sm:flex-row sm:items-start gap-3 px-4 py-3.5 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 border-l-2 ${skillAccents[i % skillAccents.length]}`}
              >
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider w-28 shrink-0 pt-0.5">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded text-xs bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="py-24 flex flex-col gap-6 border-t border-zinc-100 dark:border-zinc-800"
      >
        <RevealSection>
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-semibold text-primary">Projects</h2>
            <p className="text-xs text-muted-foreground">
              {projects.length} projects
            </p>
          </div>
        </RevealSection>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <RevealSection key={project.slug} delay={i * 0.1}>
              <Link href={`/projects/${project.slug}`}>
                <div className="group flex flex-col gap-4 p-5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-200 cursor-pointer">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-semibold text-primary">
                          {project.name}
                        </h3>
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-full border font-medium ${statusStyles[project.status] ?? ""}`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {project.role} · {project.period}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {project.githubUrl && (
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.githubUrl, "_blank");
                          }}
                          className="flex items-center justify-center w-7 h-7 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) =>
                            e.key === "Enter" &&
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          <FaGithub size={14} />
                        </div>
                      )}
                      {project.liveUrl && (
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.liveUrl, "_blank");
                          }}
                          className="flex items-center justify-center w-7 h-7 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) =>
                            e.key === "Enter" &&
                            window.open(project.liveUrl, "_blank")
                          }
                        >
                          <Globe size={14} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="w-full rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 relative aspect-video">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={`${project.name} preview`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs text-zinc-400 dark:text-zinc-600">
                          Preview coming soon
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-1 border-t border-zinc-100 dark:border-zinc-800">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                      View case study
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="py-24 flex flex-col gap-6 border-t border-zinc-100 dark:border-zinc-800"
      >
        <SectionHeading>Let&apos;s Work Together</SectionHeading>

        <RevealSection delay={0.1}>
          <p className="text-base text-muted-foreground leading-8">
            I&apos;m currently open to remote junior and mid-level software
            engineering roles — full-time, contract, or internship. If
            you&apos;re building something interesting and need a developer who
            takes ownership, writes clean code, and shows up consistently —
            let&apos;s talk.
          </p>
        </RevealSection>

        <RevealSection delay={0.15}>
          <a
            href="mailto:emmanuel.devpro@gmail.com"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-colors duration-200 w-fit"
          >
            <Mail size={15} />
            Send me a message
            <ArrowUpRight
              size={14}
              className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150"
            />
          </a>
        </RevealSection>

        <Divider label="Or find me on" />

        <RevealSection delay={0.2}>
          <div className="grid grid-cols-1 gap-2.5">
            {socialLinks.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-200 group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-green-500/10 border border-green-500/25 shrink-0 text-green-600 dark:text-green-400">
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-muted-foreground mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-primary leading-snug truncate">
                    {value}
                  </p>
                </div>
                <ArrowUpRight
                  size={13}
                  className="text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors shrink-0"
                />
              </a>
            ))}
          </div>
        </RevealSection>
      </section>
      <RevealSection delay={0.25}>
        <p className="text-xs text-muted-foreground text-center pb-4 md:pb-8">
          Designed &amp; built by Emmanuel Chukwu &middot;{" "}
          {new Date().getFullYear()}
        </p>
      </RevealSection>
    </main>
  );
}
