"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

// ── Easing ──────────────────────────────────────────────────────────────────
// A signature spring-like cubic bezier used across every animation
const ease = [0.16, 1, 0.3, 1] as const;

// ── Shared Variants ─────────────────────────────────────────────────────────

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease },
  },
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease },
  },
};

// ── RevealSection ────────────────────────────────────────────────────────────
// Single-element scroll reveal — once only, with optional delay

export function RevealSection({
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
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.6, delay, ease },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── StaggeredGrid ────────────────────────────────────────────────────────────
// Wraps a list of StaggeredItem children with orchestrated stagger

export function StaggeredGrid({
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
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// ── SectionHeading ───────────────────────────────────────────────────────────

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <RevealSection>
      <div className="flex items-center gap-3 mb-1">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600 dark:text-green-500">
          {children}
        </h2>
      </div>
    </RevealSection>
  );
}

// ── Divider ──────────────────────────────────────────────────────────────────

export function Divider({ label }: { label: string }) {
  return (
    <RevealSection>
      <div className="flex items-center gap-4 py-2">
        <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800/80" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600 font-medium">
          {label}
        </span>
        <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800/80" />
      </div>
    </RevealSection>
  );
}
