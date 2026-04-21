"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code2, Briefcase, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#", icon: Home, section: "home" },
  { name: "About", href: "#about", icon: User, section: "about" },
  { name: "Skills", href: "#skills", icon: Code2, section: "skills" },
  { name: "Projects", href: "#projects", icon: Briefcase, section: "projects" },
  { name: "Contact", href: "#contact", icon: Mail, section: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = navItems
      .map((i) => i.section)
      .filter((s) => s !== "home");

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      if (window.scrollY < 80) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-6 md:bottom-auto md:top-6 left-1/2 z-50 -translate-x-1/2">
      <nav
        className={[
          "relative flex items-center gap-1 p-2 rounded-full",
          "bg-white/60 dark:bg-zinc-900/60",
          "backdrop-blur-xl",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_8px_32px_rgba(0,0,0,0.12)]",
          "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_40px_rgba(0,0,0,0.5)]",
        ].join(" ")}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-full
                     bg-linear-to-r from-transparent via-white/60 to-transparent
                     dark:via-white/20"
        />

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.section;
          const isHovered = hoveredItem === item.name;

          return (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full"
              aria-label={item.name}
            >
              {(isActive || isHovered) && (
                <motion.div
                  layoutId="nav-bg"
                  className={[
                    "absolute inset-0 rounded-full",
                    isActive
                      ? "bg-green-500/15 dark:bg-green-400/15"
                      : "bg-black/5 dark:bg-white/8",
                  ].join(" ")}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <AnimatePresence>
                {isActive && (
                  <motion.span
                    key="dot"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2
                               h-1 w-1 rounded-full bg-green-500 dark:bg-green-400
                               shadow-[0_0_6px_2px_rgba(34,197,94,0.5)]"
                  />
                )}
              </AnimatePresence>

              <Icon
                className={[
                  "relative z-10 h-4.5 w-4.5 transition-colors duration-200",
                  isActive
                    ? "text-green-600 dark:text-green-400"
                    : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-100",
                ].join(" ")}
                strokeWidth={isActive ? 2.2 : 1.8}
              />

              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    key="tooltip"
                    initial={{ opacity: 0, y: 4, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.92 }}
                    transition={{ duration: 0.15 }}
                    className={[
                      "pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap",
                      "rounded-md px-2 py-1 text-[11px] font-medium",
                      "bg-zinc-900/90 text-white dark:bg-white/90 dark:text-zinc-900",
                      "shadow-lg backdrop-blur-sm",
                      "top-[calc(100%+8px)] md:top-[calc(100%+8px)]",
                      "md:top-[calc(100%+8px)] top-auto bottom-[calc(100%+8px)] md:bottom-auto",
                    ].join(" ")}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
