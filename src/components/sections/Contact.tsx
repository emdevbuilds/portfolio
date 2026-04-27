"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import {
  RevealSection,
  SectionHeading,
  Divider,
  StaggeredGrid,
  StaggeredItem,
} from "@/components/section-components";
import { socialLinks } from "@/lib/socialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 flex flex-col gap-10 border-t border-zinc-100 dark:border-zinc-800/80"
    >
      <div className="flex flex-col gap-3">
        <SectionHeading>Contact</SectionHeading>
        <RevealSection delay={0.05}>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let&apos;s Work Together
          </h3>
        </RevealSection>
      </div>

      <RevealSection delay={0.1}>
        <p className="text-[0.9375rem] leading-[1.9] text-zinc-500 dark:text-zinc-400 max-w-lg">
          I&apos;m currently open to remote junior and mid-level software
          engineering roles — full-time, contract, or internship. If you&apos;re
          building something interesting and need a developer who takes
          ownership, writes clean code, and shows up consistently — let&apos;s
          talk.
        </p>
      </RevealSection>

      {/* Primary CTA */}
      <RevealSection delay={0.15}>
        <a
          href="mailto:emmanuel.devpro@gmail.com"
          className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20 w-fit"
        >
          <Mail size={14} />
          Send me an email
          <ArrowUpRight
            size={13}
            className="opacity-60 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </RevealSection>

      <Divider label="Or find me on" />

      {/* Social links */}
      <StaggeredGrid className="grid grid-cols-1 gap-2.5">
        {socialLinks.map(({ icon, label, value, href }) => (
          <StaggeredItem key={label}>
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-200 group"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-500/8 border border-green-500/20 shrink-0 text-green-600 dark:text-green-400">
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-600 mb-0.5">
                  {label}
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-snug truncate">
                  {value}
                </p>
              </div>
              <ArrowUpRight
                size={13}
                className="text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0"
              />
            </a>
          </StaggeredItem>
        ))}
      </StaggeredGrid>
    </section>
  );
}
