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
    "I build fast, production-ready web apps with Next.js, TypeScript & Node.js.",
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
