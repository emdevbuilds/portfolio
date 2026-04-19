"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import ZoomableImage from "@/components/ZoomableImage";

export default function Home() {
  return (
    <main className="border-x border-grey-500 flex flex-col flex-1 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-6 px-4 py-2 text-center sm:items-start sm:text-left">
        <div className="">
          <ZoomableImage
            src="/emmanuel.jpg"
            alt="Emmanuel Chukwu"
            className="rounded-full ring-2 ring-green-500 p-1 w-32 h-32"
          />
          {/* <Image
            src="/emmanuel.jpg"
            alt="Emmanuel Chukwu"
            width={150}
            height={150}
            priority
            className="rounded-full ring-2 ring-green-500 p-1 cursor-zoom-in"
          /> */}
        </div>

        <h1 className="text-3xl font-semibold leading-10 tracking-normal text-primary">
          Hi, I&apos;m Emmanuel Chukwu. <br />
          <span className="text-green-600">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full Stack Software Developer")
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
        <p className="text-lg text-muted-foreground dark:text-zinc-400">
          Full-stack developer specialising in Next.js, TypeScript, and Node.js.
          I turn ideas into fast, production-ready applications — from
          architecture to deployment.
        </p>
      </div>
    </main>
  );
}
