import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanuelchukwu.dev"),

  title: {
    default: "Emmanuel Chukwu — Software Engineer",
    template: "%s | Emmanuel Chukwu",
  },

  description:
    "Full-stack developer building production-ready web apps with Next.js, TypeScript, and Node.js. Open to remote roles and onsite positions with visa sponsorship.",

  keywords: [
    "Emmanuel Chukwu",
    "full-stack developer",
    "Next.js developer",
    "TypeScript developer",
    "Node.js developer",
    "software engineer Nigeria",
    "remote developer",
    "web developer portfolio",
    "nigerian software engineer",
    "nigerian web developer",
    "nigerian full-stack developer",
    "web developer looking for remote work",
    "web developer looking for onsite work",
    "web developer with visa sponsorship",
    "nigerian software developer",
    "computer science graduate",
    "nigerian computer science graduate",
    "IU International University of Applied Sciences",
    "freelance web developer",
    "open to work software engineer",
    "software engineer looking for remote work",
    "software engineer looking for onsite work",
    "software engineer with visa sponsorship",
    "software engineer with experience in Next.js",
    "software engineer with experience in TypeScript",
    "software engineer with experience in Node.js",
  ],

  authors: [{ name: "Emmanuel Chukwu", url: "https://emmanuelchukwu.dev" }],

  creator: "Emmanuel Chukwu",

  openGraph: {
    type: "website",
    url: "https://emmanuelchukwu.dev",
    title: "Emmanuel Chukwu — Software Engineer",
    description:
      "Full-stack developer building production-ready web apps with Next.js, TypeScript, and Node.js.",
    siteName: "Emmanuel Chukwu",
  },

  twitter: {
    card: "summary",
    title: "Emmanuel Chukwu — Software Engineer",
    description:
      "Full-stack developer building production-ready web apps with Next.js, TypeScript, and Node.js.",
    creator: "@emdevbuilds",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth", inter.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans antialiased selection:bg-green-100 selection:text-green-900">
        <Navbar />
        <main className="mx-auto w-full max-w-4xl px-6 sm:px-10 py-16 md:py-24 pb-24">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
