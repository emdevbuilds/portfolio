"use client";

// import Image from "next/image";
import Typewriter from "typewriter-effect";
import ZoomableImage from "@/components/ZoomableImage";
import { BriefcaseBusiness } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans dark:bg-black">
      <div className="flex flex-col items-left gap-6 text-left">
        <div className="">
          <ZoomableImage
            src="/emmanuel.jpg"
            alt="Emmanuel Chukwu profile picture"
            className="rounded-full ring-2 ring-green-500 p-1 w-24 h-24"
          />
        </div>

        <div className="flex font-medium w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-600 dark:text-green-400">
          <BriefcaseBusiness size={14} />
          <span>Open to work</span>
        </div>

        <h1 className="text-2xl font-semibold leading-8 tracking-normal text-primary">
          Hi, I&apos;m Emmanuel Chukwu <br />
          <span className="text-green-600">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software Engineer")
                  .callFunction(() => {
                    const cursor = document.querySelector(
                      ".Typewriter__cursor",
                    ) as HTMLElement;
                    if (cursor) {
                      cursor.style.display = "none";
                    }
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 75,
              }}
            />
          </span>
        </h1>
        <p className="text-base text-muted-foreground dark:text-zinc-400">
          I build fast, production-ready web apps with Next.js, TypeScript &
          Node.js.
        </p>
      </div>
    </main>
  );
}
