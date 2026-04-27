"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import ZoomableImage from "@/components/ZoomableImage";
import CtaButtons from "@/components/CtaButton";

const ease = [0.16, 1, 0.3, 1] as const;

// Each direct child of Hero staggers in on mount
const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col gap-7 pt-4 pb-24 md:pb-32 overflow-hidden"
    >
      {/* Subtle radial glow in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-green-500/6 blur-3xl"
      />

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-7"
      >
        {/* Avatar */}
        <motion.div variants={heroItem}>
          <ZoomableImage
            src="/emmanuel.jpg"
            alt="Emmanuel Chukwu profile picture"
            className="rounded-full ring-2 ring-green-500/70 ring-offset-2 ring-offset-white dark:ring-offset-black p-0 w-[88px] h-[88px] object-cover"
          />
        </motion.div>

        {/* Status badge */}
        <motion.div variants={heroItem} className="w-fit">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/25 bg-green-500/8 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            Open to work
          </span>
        </motion.div>

        {/* Name + role */}
        <motion.div variants={heroItem} className="flex flex-col gap-2">
          <h1 className="text-[2rem] font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
            Hi, I&apos;m Emmanuel Chukwu
          </h1>
          <div className="text-[2rem] font-bold leading-tight tracking-tight text-green-600 dark:text-green-400 h-10 flex items-center">
            <Typewriter
              onInit={(tw) => {
                tw.pauseFor(600)
                  .typeString("Software Engineer")
                  .callFunction(() => {
                    const cursor = document.querySelector(
                      ".Typewriter__cursor",
                    ) as HTMLElement;
                    if (cursor) cursor.style.display = "none";
                  })
                  .start();
              }}
              options={{ autoStart: true, loop: false, delay: 70 }}
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={heroItem}
          className="max-w-lg text-base leading-[1.85] text-zinc-500 dark:text-zinc-400"
        >
          I build fast, production-ready web apps that ship to real users — with
          Next.js, TypeScript, and a backend that can handle it.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={heroItem}>
          <CtaButtons />
        </motion.div>
      </motion.div>
    </section>
  );
}
