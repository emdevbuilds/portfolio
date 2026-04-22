import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type TechItem = {
  name: string;
  Icon: IconType;
};

export const techStack: TechItem[] = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Python", Icon: SiPython },
  { name: "Docker", Icon: SiDocker },
];
