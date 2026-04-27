import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans dark:bg-black">
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  );
}
