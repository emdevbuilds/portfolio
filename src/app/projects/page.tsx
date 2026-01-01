import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Trust Rising Sun Limited",
      description: `A trusted name in the world of wine distribution.
With a passion for fine wines and a commitment to exceptional service, we strive to bring the finest selection of wines to retailers, restaurants, and wine enthusiasts alike.`,
      tags: ["PHP", "SQL", "HTML", "CSS"],
      link: "https://trustrinsingsunltd.com/",
    },

    {
      title: "Hirst Painting",
      description:
        "The program generate color pallete from image and use the color to create a Hirst painting",
      tags: ["Python"],
      link: "https://github.com/emmanuel-dev3/hirst-painting",
    },
    {
      title: "Coffee Machine Project",
      description: "OOP In Coffe Machine Using Python",
      tags: ["Python"],
      link: "https://github.com/emmanuel-dev3/OOP-In-Coffee-Machine-Project",
    },
    {
      title: "QR Code Component Main",
      description: "Simple QR code component",
      tags: ["HTML", "CSS"],
      link: "https://github.com/emmanuel-dev3/qr-code-component-main",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            Welcome to my project showcase—a collection of my creative and
            technical endeavors. Each project reflects my passion for coding,
            problem-solving, and continuous growth as a developer. While my
            portfolio currently features a few initial projects, they represent
            the foundation of my journey toward building impactful,{" "}
            <strong>real-world </strong>
            applications. Stay tuned as I continue to expand this space with
            more exciting projects in the future.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
