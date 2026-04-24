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
    slug: "zewerk",
    name: "Zewerk",
    tagline:
      "A marketplace connecting blue-collar workers with clients across Nigeria.",
    description:
      "Full-stack solo build — Next.js App Router frontend, Express TypeScript backend, PostgreSQL, Redis, real-time Socket.io notifications, and Paystack escrow payments. My most architecturally complex project to date.",
    status: "In Development",
    role: "Solo Developer · Full-Stack",
    period: "2024 – Present",
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
    githubUrl: "https://github.com/emdevbuilds",
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
    imageUrl: "/projects/ounuu.png",
    stack: [
      "Next.js 15",
      "TypeScript",
      "MongoDB",
      "Paystack",
      "shadcn/ui",
      "Framer Motion",
      "Vercel",
    ],
    liveUrl: "https://ounuu.org",
    githubUrl: "https://github.com/emdevbuilds",
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
    slug: "agrokore",
    name: "AgroKore",
    tagline:
      "An agricultural marketplace connecting Nigerian farmers with buyers and suppliers.",
    description:
      "MERN stack marketplace targeting Nigeria's agricultural sector. Covers product listings, buyer-seller flows, and onboarding for low-tech users. My deepest dive into full-stack MERN architecture before transitioning to the Next.js ecosystem.",
    status: "Completed",
    role: "Solo Developer",
    period: "2023",
    imageUrl: "/projects/agrokore.png",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/emdevbuilds",
    overview:
      "AgroKore is a MERN stack marketplace connecting Nigerian farmers with buyers, suppliers, and agro-service providers. It was designed to address a real digital infrastructure gap in Nigeria's agricultural sector — where most transactions still happen through informal networks and physical markets.",
    problem:
      "Nigerian farmers, particularly smallholders, lack access to reliable digital channels to sell produce, source inputs, or find service providers. The result is price opacity, middlemen extracting most of the margin, and buyers struggling to find quality produce at fair prices. AgroKore was built to create a transparent, structured marketplace that works for both sides.",
    myRole:
      "Solo developer and product designer. I handled the full MERN stack — from database design to React UI — as well as brand identity and market research.",
    decisions: [
      {
        title: "MERN Stack",
        body: "At the time of this build, React and Express were my primary stack. The MERN combination gave me full JavaScript across frontend and backend, reducing context switching and keeping the architecture simple while I was still developing my systems thinking.",
      },
      {
        title: "MongoDB for product data",
        body: "Agricultural listings vary significantly in structure — produce listings, equipment rentals, and service providers don't share the same fields. MongoDB's flexible document model handled this naturally without forcing an overly complex relational schema.",
      },
      {
        title: "Role-based architecture",
        body: "The marketplace serves distinct user types — farmers, buyers, and suppliers — each with different access levels and UI flows. I implemented a role-based system from the start, which shaped every routing and permission decision in the backend.",
      },
    ],
    challenges: [
      {
        title: "Designing for low-tech users",
        body: "Nigerian smallholder farmers are not necessarily tech-savvy. I had to think carefully about onboarding — reducing required fields, using plain language, and making the core listing flow achievable in under 5 minutes.",
      },
      {
        title: "MERN stack architecture",
        body: "This was my deepest solo full-stack build at the time. Connecting React state management, Express API routing, JWT auth, and MongoDB in a coherent, maintainable structure required significant trial and error. The lessons from this project directly shaped how I approach architecture in my current work.",
      },
    ],
    results:
      "Functional marketplace with product listings, user authentication, role-based routing, and buyer-seller interaction flows. Completed as a portfolio and learning milestone ahead of transitioning to the Next.js/TypeScript ecosystem.",
    retrospective:
      "I'd replace the MERN stack with my current stack — Next.js, TypeScript, PostgreSQL — for a project with relational data like this. I'd also do user interviews with actual farmers earlier. The onboarding flow I built was based on assumptions I later questioned after researching real agricultural platforms.",
  },
];
