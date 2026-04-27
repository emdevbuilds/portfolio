"use client";

import {
  RevealSection,
  SectionHeading,
  StaggeredGrid,
  StaggeredItem,
} from "@/components/section-components";
import { experience } from "@/lib/experience";

const typeStyles: Record<string, string> = {
  "Pro Bono":
    "bg-green-500/8 border-green-500/25 text-green-600 dark:text-green-400",
  Paid: "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 flex flex-col gap-10 border-t border-zinc-100 dark:border-zinc-800/80"
    >
      <SectionHeading>Experience</SectionHeading>

      <StaggeredGrid className="flex flex-col gap-4">
        {experience.map((job) => (
          <StaggeredItem key={job.company}>
            <div className="group relative p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col gap-4 overflow-hidden">
              {/* Hover accent line */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-0.5 bg-green-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-r"
              />

              {/* Header row */}
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 leading-snug">
                    {job.role}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {job.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
                  <span
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold border tracking-wide uppercase ${
                      typeStyles[job.type] ?? typeStyles["Paid"]
                    }`}
                  >
                    {job.type}
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-600 tabular-nums font-medium">
                    {job.period}
                  </span>
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

              {/* Description */}
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-[1.8]">
                {job.description}
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </StaggeredItem>
        ))}
      </StaggeredGrid>
    </section>
  );
}
