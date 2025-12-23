"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = {
    backend: ["NestJS", "Node.js", "TypeScript", "JavaScript"],
    database: ["PostgreSQL", "MongoDB", "TypeORM", "InfluxDB"],
    frontend: ["React", "NextJs", "Shadcn UI", "Tailwind CSS", "Three.fiber"],
    tools: ["Git", "Docker", "Swagger", "Vercel"],
  };

  const skillColors = {
    backend: "primary",
    database: "secondary",
    frontend: "accent",
    tools: "chart-2",
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-700" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-2 scroll-reveal-down scroll-delay-1">
            {"// Technical Skills"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text scroll-reveal scroll-delay-2">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed scroll-reveal scroll-delay-3">
            Technologies and tools I use to build robust backend systems
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {Object.entries(skills).map(([category, skillList], idx) => {
            const animClass =
              idx % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right";
            const delayClass = `scroll-delay-${Math.min(idx + 1, 8)}`;
            return (
              <Card
                key={category}
                className={`p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover-lift group relative overflow-hidden ${animClass} ${delayClass}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 font-mono text-primary flex items-center gap-2">
                    <span className="text-secondary group-hover:animate-pulse">
                      {">"}
                    </span>{" "}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`px-4 py-2 bg-${
                          skillColors[category as keyof typeof skillColors]
                        }/10 text-${
                          skillColors[category as keyof typeof skillColors]
                        } rounded-lg text-sm font-mono border border-${
                          skillColors[category as keyof typeof skillColors]
                        }/20 hover:bg-${
                          skillColors[category as keyof typeof skillColors]
                        }/20 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default ${
                          hoveredSkill === skill ? "ring-2 ring-primary/50" : ""
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
