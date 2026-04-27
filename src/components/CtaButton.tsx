"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CtaButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Primary Action */}
      <motion.div whileTap={{ scale: 0.97 }}>
        <Link
          href="#projects"
          className={cn(
            "group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium",
            "bg-green-600 text-white transition-all duration-200",
            "hover:bg-green-700 active:bg-green-800",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950",
          )}
        >
          View Projects
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* Secondary Action */}
      <motion.div whileTap={{ scale: 0.97 }}>
        <a
          href="/cv.pdf"
          download="Emmanuel_Chukwu_CV.pdf"
          className={cn(
            "group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200",
            "border border-zinc-200 text-zinc-600 bg-white/50",
            "dark:border-zinc-700 dark:text-zinc-300 dark:bg-zinc-900/50",
            "hover:border-zinc-400 hover:text-zinc-900",
            "dark:hover:border-zinc-500 dark:hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950",
          )}
        >
          <Download
            size={14}
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          />
          Download CV
        </a>
      </motion.div>
    </div>
  );
}
