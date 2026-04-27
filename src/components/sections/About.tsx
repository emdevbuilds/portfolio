"use client";

import {
  RevealSection,
  SectionHeading,
  Divider,
  StaggeredGrid,
  StaggeredItem,
} from "@/components/section-components";
import { facts } from "@/lib/facts";

const paragraphs = [
  "I started writing code in 2021 with a 3-month bootcamp — and I haven't stopped since. What began as structured learning quickly became self-directed obsession: reading documentation, building real projects, breaking things, and fixing them at 2 AM.",
  "I'm a full-stack developer with hands-on experience shipping web applications that handle real users and real money. I built a healthcare platform for a non-profit serving communities across Nigeria — complete with authentication, Paystack donation flows, an admin dashboard, and full SEO optimisation. I'm also the solo developer behind Zewerk, an ambitious blue-collar worker marketplace for the Nigerian market, built on a production-grade backend with PostgreSQL, Prisma, Redis, Socket.io, and an escrow payment system.",
  "I started with JavaScript, PHP and SQL, moved through the MERN stack, and now work primarily with Next.js, TypeScript, Express, PostgreSQL, and Prisma — tools I chose deliberately because they're what production teams actually use.",
  "Alongside my development work, I'm pursuing a BSc in Computer Science at IU International University of Applied Sciences (Germany), which has deepened my foundations in algorithms, data structures, and software engineering principles.",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 flex flex-col gap-10 border-t border-zinc-100 dark:border-zinc-800/80"
    >
      <SectionHeading>About</SectionHeading>

      {/* Body copy */}
      <div className="flex flex-col gap-5">
        {paragraphs.map((text, i) => (
          <RevealSection key={i} delay={i * 0.06}>
            <p className="text-[0.9375rem] leading-[1.9] text-zinc-500 dark:text-zinc-400">
              {text}
            </p>
          </RevealSection>
        ))}

        {/* Callout pull-quote */}
        <RevealSection delay={0.28}>
          <blockquote className="mt-1 border-l-2 border-green-500 pl-5 text-[0.9375rem] leading-[1.9] text-zinc-700 dark:text-zinc-300 italic">
            I don&apos;t have a big company name on my CV yet — but I have
            shipped code, solved hard problems, and built things from scratch
            that actually work. I&apos;m looking for a remote role — or an
            onsite position with visa sponsorship — where I can contribute from
            day one, grow fast, and be part of a team that takes their craft
            seriously.
          </blockquote>
        </RevealSection>
      </div>

      <Divider label="Quick facts" />

      {/* Facts grid */}
      <StaggeredGrid className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {facts.map(({ icon, label, value }) => (
          <StaggeredItem key={label}>
            <div className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors duration-200">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-500/8 border border-green-500/20 shrink-0 text-green-600 dark:text-green-400">
                {icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-600 mb-0.5">
                  {label}
                </p>
                <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-snug truncate">
                  {value}
                </p>
              </div>
            </div>
          </StaggeredItem>
        ))}
      </StaggeredGrid>
    </section>
  );
}
