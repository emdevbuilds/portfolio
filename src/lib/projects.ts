export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "In Development" | "Live" | "Completed";
  role: string;
  period: string;
  stack: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  problem: string;
  myRole: string;
  decisions: { title: string; body: string }[];
  challenges: { title: string; body: string }[];
  results: string;
  retrospective: string;
};

export const projects: Project[] = [
  {
    slug: "faberlog",
    name: "Faberlog",
    tagline:
      "A SaaS platform for Italian skilled tradespeople — job management, invoicing, and customer tracking.",
    description:
      "Full-stack Next.js SaaS with multi-language support, PDF invoicing, Cloudflare R2 file storage, and a 6-status job lifecycle. Built for electricians, plumbers, and contractors.",
    status: "Live",
    role: "Solo Developer · Full-Stack",
    period: "2026 – Present",
    imageUrl: "/projects/faberlog-preview.png",
    stack: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "Tailwind CSS",
      "shadcn/ui",
      "Cloudflare R2",
      "Resend",
      "React-PDF",
      "next-intl",
      "TanStack Query",
      "Docker",
    ],
    liveUrl: "https://faberlog.com",
    overview:
      "Faberlog is a SaaS web application for Italian skilled tradespeople — electricians, plumbers, builders, and contractors. It provides a complete toolkit to manage the end-to-end lifecycle of contracting work: customer management with Italian-specific fields (Codice Fiscale, P.IVA), a 6-status job pipeline (QUOTE → APPROVED → IN_PROGRESS → COMPLETED → INVOICED → PAID), work phase tracking with time and material logging, PDF invoice generation, file attachments via Cloudflare R2, and a dashboard with aggregate statistics. The platform supports 10 languages and is built for international reach.",
    problem:
      "Italian skilled tradespeople — who make up a huge portion of the country's workforce — still run their businesses on WhatsApp messages, paper notebooks, and Excel spreadsheets. There's no dominant SaaS tool that handles the full workflow: quoting a job, tracking progress, logging hours and materials, invoicing the customer, and following up on payments. Existing solutions are either too generic (focused on non-trade businesses) or too narrow (invoicing only, no job tracking). Tradespeople need one tool that covers the entire lifecycle without requiring them to learn complex accounting software.",
    myRole:
      "Solo developer and product owner. I designed the data model, built the full frontend and backend, integrated file storage and email, implemented internationalisation, and managed the architecture end to end.",
    decisions: [
      {
        title: "Next.js 16 App Router + Server Actions",
        body: "Server Actions let me colocate data mutations with the UI that invokes them, eliminating the boilerplate of separate API routes for every CRUD operation. Combined with strict TypeScript and Zod validation on the server boundary, this gives me a type-safe data layer without an external backend framework.",
      },
      {
        title: "PostgreSQL + Prisma (strict relational model)",
        body: "The core domain — users, customers, jobs, phases, files — has rigid relationships enforced by foreign keys and Prisma's schema. A job always belongs to a customer, a phase always belongs to a job. MongoDB's document model would have made these constraints implicit rather than enforced, which is risky for financial data like invoices and payments.",
      },
      {
        title: "Better Auth (not NextAuth/Auth.js)",
        body: "Better Auth gives me a self-contained auth system with database sessions, email/password, Google OAuth, account linking, and a clean middleware API — all without the abstraction overhead of NextAuth. The session is stored in my own PostgreSQL database, which means I can query it directly for admin tooling and debugging.",
      },
      {
        title: "Cloudflare R2 (not UploadThing)",
        body: "I originally used UploadThing but migrated to R2 mid-project. R2 gives me direct control over file storage costs, no egress fees, and presigned URLs that let users upload directly from the browser without my server touching the file bytes. The migration meant rewriting the upload flow and deletion logic, but the cost savings and control were worth it.",
      },
      {
        title: "next-intl for internationalisation",
        body: "The app needed to serve both Italian tradespeople (in Italian) and an international audience (English, German, French, Spanish, and five more languages). next-intl handles locale detection, translations, and date/number formatting seamlessly with the App Router. The locale priority chain — user preference, cookie, browser header, English default — gave me a natural fallback without hard-coding language toggles everywhere.",
      },
      {
        title: "React-PDF for invoice generation",
        body: "Generating PDFs server-side with @react-pdf/renderer lets me reuse React components for the invoice template, including inline translations and conditional branding (Pro plan shows the user's name, Free shows 'Faberlog'). The PDF is generated on-demand and either streamed for download or attached to an email via Resend.",
      },
    ],
    challenges: [
      {
        title: "Next.js 16 + Turbopack + Prisma compatibility",
        body: "Next.js 16 defaults to Turbopack for production builds, but Turbopack has a known issue resolving Prisma's custom generated client output path (@/generated) on Vercel's Linux build environment. I spent days debugging production build failures before discovering the fix: passing the --webpack flag forces Next.js to use webpack instead of Turbopack, which handles the custom path correctly. This is now documented prominently in the README.",
      },
      {
        title: "Cloudflare R2 CORS for browser uploads",
        body: "After migrating from UploadThing to R2, direct browser uploads via presigned URLs failed silently with generic 'Failed to fetch' errors. The root cause was that R2 buckets don't allow browser uploads by default — CORS must be explicitly configured per domain. I wrote a script (configure-r2-cors.mjs) that sets the allowed origins, methods, and headers, and run it as part of setup.",
      },
      {
        title: "Hard-delete user with cascade cleanup",
        body: "Deleting a user account required removing their R2 files, database records, and auth sessions in the right order. I built a pruneUser server action that: fetches all file keys from the user's jobs, deletes each object from R2, then deletes the user from the database (which cascades through Prisma relations). Getting the R2 deletion to run before the DB deletion — and handling partial failures — was more complex than expected.",
      },
      {
        title: "No payment integration yet",
        body: "The subscription model (Free with 10-job limit vs Pro with unlimited jobs and custom branding) is fully designed and enforced in the codebase, but there is no way for users to actually upgrade. The pricing page, plan enum, and plan checks all exist — but no payment processor is connected. I designed the architecture so that adding Lemon Squeezy or Stripe is a self-contained feature rather than a rewrite, but building the billing webhooks, checkout flow, and subscription management is still ahead of me.",
      },
    ],
    results:
      "Core platform fully functional. User authentication, customer management, 6-status job lifecycle, phase tracking with time and materials, file uploads via R2, PDF invoice generation, email invoicing (Pro), WhatsApp sharing, duplicate jobs, 10-language internationalisation, and dashboard analytics — all working against a live Neon PostgreSQL database.",
    retrospective:
      "I should have started with Cloudflare R2 instead of migrating from UploadThing mid-project. The migration itself wasn't painful, but the time spent on the original integration was wasted. I'd also have built the payment integration earlier in the project lifecycle — it's the one feature that turns the app from a demo into a real business, and pushing it to the end means every potential user who hits the 10-job limit can't actually upgrade. On the positive side, the strict data model and type safety have made the codebase extremely reliable — I rarely encounter runtime errors in production.",
  },
  {
    slug: "ounuu",
    name: "OUNUU Health Alliance",
    tagline:
      "A digital platform for a Nigerian healthcare NGO — built pro bono, serving real users.",
    description:
      "End-to-end web platform with Paystack donation flows, protected admin dashboard, SEO setup, and Google Ads deployment. Built with Next.js 15, TypeScript, and MongoDB.",
    status: "Live",
    role: "Solo Developer · Pro Bono",
    period: "Aug 2025 – Jan 2026",
    imageUrl: "/projects/ounuu-health-alliance-preview.png",
    stack: [
      "Next.js 15",
      "TypeScript",
      "MongoDB",
      "Paystack",
      "shadcn/ui",
      "Framer Motion",
      "Vercel",
    ],
    liveUrl: "https://www.obiumunnanaumuadahealthalliance.com/",
    githubUrl: "https://github.com/emdevbuilds/ounuu-health-alliance",
    overview:
      "OUNUU Health Alliance is a Nigerian non-profit delivering community health services. They had no digital presence, no way to receive online donations, and no system for managing their operations. I built their entire web platform pro bono — from zero to deployed.",
    problem:
      "The organisation was running entirely on manual processes. No website meant no visibility, no credibility with potential donors, and no way to accept donations outside of direct bank transfers. For an NGO dependent on public trust and donor funding, this was a serious barrier to impact.",
    myRole:
      "Solo developer for the full engagement. I handled frontend, backend, payment integration, admin dashboard, SEO, and Google Ads — everything from first commit to Google indexing.",
    decisions: [
      {
        title: "Next.js 15 (for SEO)",
        body: "An NGO lives or dies by its ability to appear credible online. Next.js 15's server-side rendering ensures every page is fully indexable by Google — critical for appearing in search when donors look for health-focused Nigerian NGOs to support.",
      },
      {
        title: "MongoDB (for content flexibility)",
        body: "The platform needed to manage health programme listings, blog posts, and team profiles — content types that vary in shape and grow over time. MongoDB's document model made it straightforward to add new content types without schema migrations.",
      },
      {
        title: "Paystack (for donations)",
        body: "Paystack is the most trusted and widely integrated payment provider in Nigeria. Using it for the donation flow — rather than redirecting to a third-party fundraising page — kept donors on the platform and gave the organisation full ownership of donor data.",
      },
      {
        title: "shadcn/ui + Framer Motion (for credibility)",
        body: "An NGO's website must look trustworthy. Donors and partners make split-second judgments. shadcn/ui provided accessible, polished components and Framer Motion added subtle animations that elevated the interface beyond a basic template.",
      },
    ],
    challenges: [
      {
        title: "Next.js 15 dynamic route param typing",
        body: "Next.js 15 changed how dynamic route params are typed — from synchronous to asynchronous — and the documentation hadn't fully caught up when I was building. I debugged this by reading the Next.js GitHub changelog and release notes directly, then updated every dynamic route handler in the codebase.",
      },
      {
        title: "Auth bug on /api/admin/me",
        body: "The admin authentication route was silently failing in production — returning 401s on valid sessions. I traced it to a JWT validation issue where the token secret was being read before environment variables were fully initialised in the serverless context. Fixed by ensuring the secret was read inside the handler function, not at module level.",
      },
      {
        title: "Hydration mismatches with Framer Motion",
        body: "Framer Motion animations triggered hydration errors because animation states initialised differently on the server versus the client. Solved by wrapping animated components in a useEffect-gated conditional that only renders the animated version after hydration.",
      },
      {
        title: "Production SEO setup from scratch",
        body: "My first full SEO implementation on a production site. I set up Google Search Console, generated a dynamic sitemap.ts, configured robots.ts, and created Open Graph images for social sharing — all from scratch. I also wrote and deployed Google Ads copy for the NGO's campaigns.",
      },
    ],
    results:
      "Platform live on Vercel. Accepting real Paystack donations. Admin dashboard operational. Site indexed on Google with proper SEO structure — sitemap, robots, and OG tags. Google Ads live and running.",
    retrospective:
      "I'd run a content-readiness checklist with the client before development starts. Several pages launched with placeholder text because the NGO's written content wasn't ready — and retrofitting copy into a live site is messier than building with final content from the start. I now treat content as a deliverable with its own deadline.",
  },
  {
    slug: "zewerk",
    name: "Zewerk",
    tagline:
      "A marketplace connecting blue-collar workers with clients across Nigeria.",
    description:
      "Full-stack solo build — Next.js App Router frontend, Express TypeScript backend, PostgreSQL, Redis, real-time Socket.io notifications, and Paystack escrow payments. My most architecturally complex project to date.",
    status: "In Development",
    role: "Solo Developer · Full-Stack",
    period: "2026 – Present",
    imageUrl: undefined,
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Socket.io",
      "Paystack",
      "Cloudinary",
      "Termii",
      "Docker",
    ],
    liveUrl: "https://zewerk.com/",
    overview:
      "Zewerk is a blue-collar worker marketplace for the Nigerian market — connecting artisans, cleaners, drivers, and other skilled workers with clients who need them. I'm designing and building the entire platform solo: frontend, backend, payments, real-time features, and infrastructure.",
    problem:
      "Nigeria has millions of skilled informal workers with no reliable digital platform to find work, get paid safely, or build a reputation. Existing solutions are either too generic, not localised, or don't solve the trust problem between worker and client. Workers get hired once and users go around the platform directly — killing the business model. Zewerk is built to solve all of this.",
    myRole:
      "Solo developer and product owner. I own every layer — product decisions, system architecture, frontend, backend, DevOps, and payment design.",
    decisions: [
      {
        title: "Next.js App Router (not plain React)",
        body: "Built-in SSR, file-based routing, and performance optimisation are critical for users on lower-bandwidth Nigerian networks. App Router also makes it easier to separate server and client components cleanly, reducing unnecessary JavaScript sent to the browser.",
      },
      {
        title: "PostgreSQL + Prisma (not MongoDB)",
        body: "The relational nature of bookings, payments, user roles, and reviews demanded structured data with enforced relationships. A booking has a worker, a client, a service, a payment, and a status — MongoDB's flexible schema would have introduced inconsistency risk at every join. Prisma gives me type-safe queries and schema migrations without raw SQL.",
      },
      {
        title: "Redis",
        body: "Used for session caching and background job queuing. Keeps the API responsive under load without hitting PostgreSQL on every authenticated request.",
      },
      {
        title: "Paystack Escrow (not direct transfers)",
        body: "Direct transfers create a trust gap — clients fear workers won't deliver, workers fear clients won't pay. Escrow holds funds from the client at booking and only releases to the worker when the job is confirmed complete. This is the core trust mechanism that makes the marketplace viable.",
      },
      {
        title: "Socket.io (real-time layer)",
        body: "Workers and clients need live job status updates — 'Worker on the way,' 'Job started,' 'Awaiting confirmation.' Polling would be too slow and expensive. Socket.io events keep both sides in sync without repeated API calls.",
      },
      {
        title: "Termii SMS API (not email OTP)",
        body: "Nigerian users are significantly more reachable via SMS than email for verification flows. Termii is the most reliable Nigerian SMS provider with a developer-friendly API.",
      },
    ],
    challenges: [
      {
        title: "Strict TypeScript mode",
        body: "Enabling strict TypeScript across the entire backend forced me to rethink how I handle error states. I stopped using `any` as an escape hatch and built proper typed error boundaries — a try/catch pattern where every catch block explicitly types the error before using it. This was painful at first but made the codebase dramatically more reliable.",
      },
      {
        title: "Escrow payment state machine",
        body: "Designing the Paystack escrow flow required mapping booking states to payment events: pending → active → in_progress → completed → released. Each state transition triggers different Paystack API calls. Getting this wrong could mean money being released early or stuck permanently — so I drew out the full state machine before writing a single line of payment code.",
      },
      {
        title: "Disintermediation prevention",
        body: "A known marketplace risk: once a worker and client meet, they exchange numbers and bypass the platform for the next job. My solution combines in-app messaging to keep communication on-platform, payment protection messaging that explains why escrow benefits both sides, and a reputation system where workers with strong platform ratings earn trust they'd lose by leaving.",
      },
      {
        title: "Multi-step auth flow",
        body: "Building JWT auth with plans for OAuth required separating concerns properly. I built auth as a standalone controller with its own router so adding OAuth providers later doesn't touch core user logic.",
      },
    ],
    results:
      "Core architecture established. Authentication, worker profiles, and booking flow are functional. Escrow payment integration and real-time notifications are in active development. Pre-launch.",
    retrospective:
      "I'd validate the core marketplace assumption with a simpler, manual MVP before building the escrow system. Talking to five actual artisans first would have shaped several product decisions earlier. I'd also start the Socket.io layer from day one rather than retrofitting it — real-time needs influenced the API design more than I anticipated.",
  },
];
