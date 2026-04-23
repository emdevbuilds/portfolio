"use client";

// import Image from "next/image";
// import Link from "next/link";
import Typewriter from "typewriter-effect";
import ZoomableImage from "@/components/ZoomableImage";
import Marquee from "react-fast-marquee";
import { BriefcaseBusiness } from "lucide-react";
import CtaButtons from "@/components/CtaButton";
import { techStack } from "@/lib/techStack";
import { facts } from "@/lib/facts";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans dark:bg-black">
      <section
        id="home"
        className="flex flex-col gap-6 pt-14 pb-16 md:pt-4 md:pb-20"
      >
        <div>
          <ZoomableImage
            src="/emmanuel.jpg"
            alt="Emmanuel Chukwu profile picture"
            className="rounded-full ring-2 ring-green-500 p-1 w-24 h-24"
          />
        </div>

        <div className="flex font-medium w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-600 dark:text-green-400">
          <BriefcaseBusiness size={14} />
          <span>Open to work</span>
        </div>

        <h1 className="text-2xl font-semibold leading-8 tracking-normal text-primary">
          Hi, I&apos;m Emmanuel Chukwu <br />
          <span className="text-green-600">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software Engineer")
                  .callFunction(() => {
                    const cursor = document.querySelector(
                      ".Typewriter__cursor",
                    ) as HTMLElement;
                    if (cursor) {
                      cursor.style.display = "none";
                    }
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 75,
              }}
            />
          </span>
        </h1>
        <p className="text-base text-muted-foreground dark:text-zinc-400">
          I build fast, production-ready web apps with Next.js, TypeScript &
          Node.js.
        </p>
        <CtaButtons />
      </section>

      <div
        id="marquee"
        className="py-10 border-y border-zinc-100 dark:border-zinc-800"
        aria-label="Tech stack"
      >
        <Marquee gradient={true} gradientWidth={120} speed={40}>
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
      </div>

      {/* ── About ── */}
      <section id="about" className="py-24 flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-primary">About</h2>
        <p className="text-base text-muted-foreground">
          I started writing code in 2021 with a 3-month bootcamp — and I
          haven&apos;t stopped since. What began as structured learning quickly
          became self-directed obsession: reading documentation, building real
          projects, breaking things, and fixing them at 2 AM.
        </p>
        <p className="text-base text-muted-foreground">
          I&apos;m a full-stack developer with hands-on experience shipping web
          applications that handle real users and real money. I built a
          healthcare platform for a non-profit organisation serving communities
          across Nigeria — complete with authentication, Paystack donation
          flows, an admin dashboard, and full SEO optimisation. I&apos;m also
          the solo developer behind Zewerk, an ambitious blue-collar worker
          marketplace for the Nigerian market, built on a production-grade
          backend with PostgreSQL, Prisma, Redis, Socket.io, and an escrow
          payment system.
        </p>
        <p className="text-base text-muted-foreground">
          I started with JavaScript, PHP and SQL, moved through the MERN stack,
          and now work primarily with Next.js, TypeScript, Express, PostgreSQL,
          and Prisma — tools I chose deliberately because they&apos;re what
          production teams actually use.
        </p>
        <p className="text-base text-muted-foreground">
          Alongside my development work, I&apos;m pursuing a BSc in Computer
          Science at IU International University of Applied Sciences (Germany),
          which has deepened my foundations in algorithms, data structures, and
          software engineering principles.
        </p>
        <p className="text-base text-muted-foreground border-l-2 border-green-500 pl-4">
          I don&apos;t have a big company name on my CV yet — but I have shipped
          code, solved hard problems, and built things from scratch that
          actually work. I&apos;m looking for a remote role — or an onsite
          position with visa sponsorship — where I can contribute from day one,
          grow fast, and be part of a team that takes their craft seriously.
        </p>

        <div className="flex items-center gap-3 mt-2">
          <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Quick facts
          </span>
          <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
        </div>
        <div className="grid grid-cols-1 gap-2.5">
          {facts.map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-green-500/10 border border-green-500/25 shrink-0 text-green-600 dark:text-green-400">
                {icon}
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground mb-0.5">
                  {label}
                </p>
                <p className="text-sm text-primary leading-snug">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section
        id="skills"
        className="py-24 flex flex-col gap-6 border-t border-zinc-100 dark:border-zinc-800"
      >
        <h2 className="text-xl font-semibold text-primary">Skills</h2>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="py-24 flex flex-col gap-6 border-t border-zinc-100 dark:border-zinc-800"
      >
        <h2 className="text-xl font-semibold text-primary">Projects</h2>
      </section>
    </main>
  );
}
