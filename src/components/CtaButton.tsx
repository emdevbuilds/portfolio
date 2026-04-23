"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function CtaButtons() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <motion.div whileTap={{ scale: 0.97 }}>
        <Link
          href="#projects"
          className="group flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-green-700"
        >
          View Projects
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      <motion.div whileTap={{ scale: 0.97 }}>
        <a
          href="/cv.pdf"
          download="Emmanuel_Chukwu_CV.pdf"
          className="group flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-600 dark:text-zinc-300 transition-colors duration-200 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white"
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
