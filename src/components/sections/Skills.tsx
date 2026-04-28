"use client";

import {
  SectionHeading,
  StaggeredGrid,
  StaggeredItem,
} from "@/components/section-components";
import { techSkills } from "@/lib/techSkills";

const accentColors = [
  "border-l-green-500",
  "border-l-sky-400",
  "border-l-violet-400",
  "border-l-amber-400",
  "border-l-rose-400",
  "border-l-zinc-400",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 flex flex-col gap-10 border-t border-zinc-100 dark:border-zinc-800/80"
    >
      <SectionHeading>Skills</SectionHeading>

      <StaggeredGrid className="flex flex-col gap-3">
        {techSkills.map((category, i) => (
          <StaggeredItem key={category.title}>
            <div
              className={`group flex flex-col sm:flex-row sm:items-start gap-3 px-5 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 border-l-2 ${
                accentColors[i % accentColors.length]
              } hover:border-r-zinc-200 hover:border-t-zinc-200 hover:border-b-zinc-200 dark:hover:border-r-zinc-700 dark:hover:border-t-zinc-700 dark:hover:border-b-zinc-700 transition-colors duration-200`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-600 w-28 shrink-0 pt-0.5">
                {category.title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-150"
                  >
                    {skill}
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
