"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { techStack } from "@/lib/techStack";

export default function TechMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 border-y border-zinc-100 dark:border-zinc-800/80"
      aria-label="Tech stack marquee"
    >
      <Marquee
        gradient
        gradientColor="white"
        gradientWidth={100}
        speed={36}
        className="dark:[--gradient-color:black]"
      >
        {techStack.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex items-center gap-2 mx-10 text-xs font-medium text-zinc-400 dark:text-zinc-600 select-none"
          >
            <Icon size={16} className="shrink-0" />
            <span>{name}</span>
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
}
