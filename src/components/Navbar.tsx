"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code2, Briefcase, Mail, FolderGit2 } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home, section: "home" },
  { name: "About", href: "/#about", icon: User, section: "about" },
  {
    name: "Experience",
    href: "/#experience",
    icon: Briefcase,
    section: "experience",
  },
  { name: "Skills", href: "/#skills", icon: Code2, section: "skills" },
  {
    name: "Projects",
    href: "/#projects",
    icon: FolderGit2,
    section: "projects",
  },
  { name: "Contact", href: "/#contact", icon: Mail, section: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Only track scroll-based active section on the homepage
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      const scrollMidpoint = window.innerHeight * 0.55;

      const visible = navItems
        .filter((i) => i.section !== "home")
        .map(({ section }) => {
          const el = document.getElementById(section);
          if (!el) return { section, top: Infinity };
          return { section, top: el.getBoundingClientRect().top };
        })
        .filter(({ top }) => top <= scrollMidpoint);

      if (visible.length > 0) {
        setActiveSection(visible[visible.length - 1].section);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Handle navigation clicks
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[number],
  ) => {
    e.preventDefault();

    // For Home button
    if (item.section === "home") {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
      } else {
        router.push("/");
      }
      return;
    }

    // For other sections
    if (isHomePage) {
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on home page, navigate to home page with hash
      router.push(item.href);
    }
  };

  // Derive active item for non-home pages (e.g. /projects highlights Projects)
  const getIsActive = (item: (typeof navItems)[number]) => {
    if (!isHomePage) {
      if (pathname.startsWith("/projects")) return item.section === "projects";
      return false;
    }
    return activeSection === item.section;
  };

  return (
    <div className="fixed bottom-6 md:bottom-auto md:top-6 left-1/2 z-50 -translate-x-1/2">
      <nav
        className={[
          "relative flex items-center gap-1 p-1.5 rounded-full",
          "bg-white/70 dark:bg-zinc-900/70",
          "backdrop-blur-xl",
          "shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.10)]",
          "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_8px_40px_rgba(0,0,0,0.5)]",
        ].join(" ")}
      >
        {/* Inset shine line */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-3 top-0 h-px rounded-full
                     bg-linear-to-r from-transparent via-white/70 to-transparent
                     dark:via-white/20"
        />

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = getIsActive(item);
          const isHovered = hoveredItem === item.name;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavigation(e, item)}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full"
              aria-label={item.name}
            >
              {/* Active background */}
              <AnimatePresence>
                {isActive && item.section && (
                  <motion.div
                    key="active-bg"
                    layoutId="nav-active-bg"
                    className="absolute inset-0 rounded-full bg-green-500/15 dark:bg-green-400/15"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isHovered && !isActive && (
                  <motion.div
                    key="hover-bg"
                    layoutId="nav-hover-bg"
                    className="absolute inset-0 rounded-full bg-zinc-900/6 dark:bg-white/[0.07]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </AnimatePresence>

              {/* Active dot */}
              <AnimatePresence>
                {isActive && item.section && (
                  <motion.span
                    key="dot"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2
                               h-1 w-1 rounded-full bg-green-500 dark:bg-green-400
                               shadow-[0_0_6px_2px_rgba(34,197,94,0.45)]"
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <Icon
                className={[
                  "relative z-10 h-4.5 w-4.5 transition-colors duration-200",
                  isActive && item.section
                    ? "text-green-600 dark:text-green-400"
                    : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-100",
                ].join(" ")}
                strokeWidth={isActive && item.section ? 2.2 : 1.8}
              />

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    key="tooltip"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.88 }}
                    transition={{ duration: 0.13, ease: "easeOut" }}
                    className={[
                      "pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap",
                      "rounded-md px-2 py-1 text-[11px] font-medium",
                      "bg-zinc-900/90 text-white dark:bg-white/90 dark:text-zinc-900",
                      "shadow-lg backdrop-blur-sm",
                      "bottom-[calc(100%+8px)]",
                      "md:bottom-auto md:top-[calc(100%+8px)]",
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
}
