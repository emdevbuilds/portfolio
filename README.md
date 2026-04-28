# emmanuelchukwu.dev

Personal portfolio and case study site — built with Next.js 15, TypeScript, and Tailwind CSS.

Live at **[emmanuelchukwu.dev](https://emmanuelchukwu.dev)**

---

## Stack

| Layer         | Technology                |
| ------------- | ------------------------- |
| Framework     | Next.js 15 (App Router)   |
| Language      | TypeScript                |
| Styling       | Tailwind CSS v4           |
| Animation     | Framer Motion             |
| UI Primitives | Radix UI                  |
| Icons         | Lucide React, React Icons |
| Marquee       | react-fast-marquee        |
| Typewriter    | typewriter-effect         |
| Analytics     | Vercel Analytics          |
| Deployment    | Vercel                    |

---

## Project Structure

```
├── app/
│   ├── page.tsx                  # Home — composes all sections
│   ├── layout.tsx                # Root layout, font, metadata
│   ├── globals.css
│   └── projects/
│       ├── page.tsx              # All projects archive
│       └── [slug]/
│           └── page.tsx          # Project case study (SSG)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Floating pill nav, scroll-aware active state
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TechMarquee.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── FeaturedProjects.tsx
│   │   └── Contact.tsx
│   ├── section-components.tsx    # Shared animation primitives
│   ├── ProjectCard.tsx
│   ├── ProjectDetail.tsx         # Client component for animated case study
│   ├── ZoomableImage.tsx
│   └── CtaButton.tsx
└── lib/
    ├── projects.ts               # Project data + case study content
    ├── experience.ts
    ├── techStack.ts
    ├── techSkills.ts
    ├── facts.ts
    └── socialLinks.ts
```

---

## Features

- **Static generation** — all project case study pages pre-rendered at build time via `generateStaticParams`
- **Scroll-aware navigation** — floating pill navbar tracks the active section using `IntersectionObserver`-style scroll detection; highlights the correct nav item per page on non-home routes via `usePathname`
- **Orchestrated animations** — entrance animations use Framer Motion with a consistent `[0.16, 1, 0.3, 1]` easing curve and blur-in effect across all sections; staggered grids cascade children in on scroll
- **Zoomable profile image** — custom lightbox with animated open/close, no external dialog dependency
- **Dark mode** — full dark mode support via Tailwind's `dark:` variant
- **SEO** — `generateMetadata` per route, `metadataBase`, sitemap, and `robots.txt`
- **Analytics** — Vercel Analytics for page view tracking

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Type-check
npm run build

# Lint
npm run lint
```

---

## Adding a Project

All project data lives in `lib/projects.ts`. Each entry drives both the `ProjectCard` on the homepage and the full case study page at `/projects/[slug]`.

```ts
{
  slug: "your-project",           // URL: /projects/your-project
  name: "Your Project",
  tagline: "One-line description shown on cards",
  role: "Solo Developer",
  period: "Jan 2025 – Present",
  status: "In Development",       // "In Development" | "Live" | "Completed"
  imageUrl: "/images/your-project.png",
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  stack: ["Next.js", "TypeScript", "PostgreSQL"],

  // Case study content
  overview: "...",
  problem: "...",
  myRole: "...",
  decisions: [{ title: "...", body: "..." }],
  challenges: [{ title: "...", body: "..." }],
  results: "...",
  retrospective: "...",
}
```

---

## License

MIT — feel free to use this as a reference or template. A credit or star is appreciated but not required.
