"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Energy Monitoring Platform",
      description:
        "Real-time IoT energy monitoring system with device simulation and predictive analytics. Built RESTful APIs for consumption tracking and peak usage analysis.",
      tech: ["NestJS", "MongoDB", "InfluxDB", "React", "TypeScript"],
      github: "https://github.com/YngJesus/Energy-Monitoring-PLATFORM",
      Live: false,
      gradient: "from-primary/20 via-secondary/10 to-accent/20",
    },
    {
      title: "StudyMateAI",
      description:
        "AI-powered learning platform backend with authentication and user management. Scalable API architecture following NestJS best practices and modular design.",
      tech: ["NestJS", "Angular", "PostgreSQL", "TypeScript", "Docker"],
      github: "https://github.com/YngJesus/StudyMateAI",
      Live: false,
      gradient: "from-secondary/20 via-accent/10 to-primary/20",
    },
    {
      title: "GuessWhoLOL",
      description:
        "Interactive League of Legends guessing game with smooth animations and responsive design. Implemented game logic and state management for multiplayer mechanics.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/YngJesus/GuessWhoLOL",
      Live: true,
      gradient: "from-accent/20 via-primary/10 to-secondary/20",
      liveDemo: "https://guesswholol.me/",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Fully functional e-commerce site with shopping cart, wishlist, and checkout system. Built with modern web technologies and responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/YngJesus",
      Live: true,
      gradient: "from-chart-2/20 via-primary/10 to-secondary/20",
      liveDemo: "https://yngjesus.github.io/clothing-store/",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-gradient" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-secondary to-transparent animate-gradient" />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-2 scroll-rotate scroll-delay-1">
            {"// Live Work"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text scroll-reveal scroll-delay-2">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed scroll-reveal scroll-delay-3">
            A selection of projects showcasing backend architecture and
            full-stack capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => {
            const delayClass = `scroll-delay-${Math.min((index % 4) + 1, 8)}`;
            return (
              <Card
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover-lift group relative overflow-hidden scroll-scale ${delayClass} ${
                  project.Live ? "md:col-span-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animation-delay-200" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    {project.Live && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded-full mb-3 animate-pulse-glow">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Live
                      </span>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 font-mono group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded text-xs font-mono border border-secondary/20 hover:bg-secondary/20 transition-colors duration-300"
                        style={{
                          animationDelay: `${techIdx * 0.05}s`,
                          transform:
                            hoveredProject === index
                              ? "translateY(-2px)"
                              : "translateY(0)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="font-mono bg-transparent hover:bg-primary/10 hover:text-primary transition-all duration-300 border-primary/30 hover:border-primary group/btn"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                        <span>Source Code</span>
                      </a>
                    </Button>
                    {project.liveDemo && (
                      <Button
                        size="sm"
                        asChild
                        className="font-mono bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
                      >
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                      </Button>
                    )}
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
