"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiJavascript,
  SiExpress,
  SiGraphql,
} from "react-icons/si";
import LogoLoop from "./ui/logoloop";

const techLogos = [
  {
    node: <SiNestjs className="text-[#E0234E]" />,
    title: "NestJS",
    href: "https://nestjs.com",
  },
  {
    node: <SiNodedotjs className="text-[#339933]" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiReact className="text-[#61DAFB]" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs className="text-foreground" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript className="text-[#3178C6]" />,
    title: "TypeScript",
    href: "https://typescriptlang.org",
  },
  {
    node: <SiJavascript className="text-[#F7DF1E]" />,
    title: "JavaScript",
    href: "https://javascript.com",
  },
  {
    node: <SiPostgresql className="text-[#4169E1]" />,
    title: "PostgreSQL",
    href: "https://postgresql.org",
  },
  {
    node: <SiMongodb className="text-[#47A248]" />,
    title: "MongoDB",
    href: "https://mongodb.com",
  },
  {
    node: <SiTailwindcss className="text-[#06B6D4]" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiDocker className="text-[#2496ED]" />,
    title: "Docker",
    href: "https://docker.com",
  },
  {
    node: <SiGit className="text-[#F05032]" />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiExpress className="text-foreground" />,
    title: "Express",
    href: "https://expressjs.com",
  },
  {
    node: <SiGraphql className="text-[#E10098]" />,
    title: "GraphQL",
    href: "https://graphql.org",
  },
];

export default function LoopBadge() {
  return (
    <div className="w-full py-8 relative overflow-hidden border-y border-border/50 bg-muted/20">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

      <LogoLoop
        logos={techLogos}
        speed={30}
        direction="left"
        logoHeight={40}
        gap={56}
        hoverSpeed={8}
        scaleOnHover
        pauseOnHover
        ariaLabel="Technologies"
      />
    </div>
  );
}
