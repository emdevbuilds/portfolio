"use client";

// import Image from "next/image";
import Typewriter from "typewriter-effect";
import ZoomableImage from "@/components/ZoomableImage";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans dark:bg-black">
      <div className="flex flex-col items-left gap-6 text-left">
        <div className="">
          <ZoomableImage
            src="/emmanuel.jpg"
            alt="Emmanuel Chukwu"
            className="rounded-full ring-2 ring-green-500 p-1 w-24 h-24"
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

        <h1 className="text-2xl font-semibold leading-8 tracking-normal text-primary">
          Hi, I&apos;m Emmanuel Chukwu. <br />
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
        <p className="text-lg text-muted-foreground dark:text-zinc-400">
          Full-stack developer specialising in Next.js, TypeScript, and Node.js.
          I turn ideas into fast, production-ready applications — from
          architecture to deployment.
        </p>
      </div>
    </main>
  );
}
