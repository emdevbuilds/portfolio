import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-grey-500 flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <div className="">
          <Image
            src="/emmanuel.jpg"
            alt="Emmanuel Chukwu"
            width={200}
            height={200}
            className="rounded-full ring-2 ring-green-500 p-1 cursor-zoom-in"
          />
        </div>

        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Hi, I&apos;m Emmanuel Chukwu.
        </h1>
      </div>
    </main>
  );
}
