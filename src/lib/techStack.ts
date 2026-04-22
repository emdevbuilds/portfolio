import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type TechItem = {
  name: string;
  Icon: IconType;
  color: string;
};

export const techStack: TechItem[] = [
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
];
