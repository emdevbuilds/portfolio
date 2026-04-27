"use client";

import Link from "next/link";
import { RevealSection } from "@/components/section-components";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
      <RevealSection>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 dark:text-zinc-600">
          <p>
            Designed &amp; built by{" "}
            <Link
              href="https://github.com/emdevbuilds"
              target="_blank"
              className="text-green-600 dark:text-green-400 hover:underline"
            >
              Emmanuel Chukwu
            </Link>
          </p>
          <p className="tabular-nums">{new Date().getFullYear()}</p>
        </div>
      </RevealSection>
    </footer>
  );
}
