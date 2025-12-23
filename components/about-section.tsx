"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Terminal, Code2, Database, Zap } from "lucide-react";
import LoopBadge from "./LoopBadge";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const highlights = [
    {
      icon: Terminal,
      title: "Backend Architecture",
      description:
        "Specialized in building scalable REST APIs and microservices with NestJS",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Expert in PostgreSQL, MongoDB, and TypeORM for efficient data management",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Code2,
      title: "Full-Stack Ready",
      description:
        "Proficient in React/NextJs and modern frontend tools when needed",
      color: "from-accent/20 to-accent/5",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description:
        "Quick to adapt to new technologies and solve complex problems",
      color: "from-chart-2/20 to-chart-2/5",
    },
  ];

  return (
    <>
      <LoopBadge />
      <section
        id="about"
        ref={sectionRef}
        className="py-24 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 20
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-600" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="font-mono text-primary text-sm mb-2 scroll-reveal scroll-delay-1">
              {"// About Me"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text scroll-reveal scroll-delay-2">
              FullStack Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed scroll-reveal scroll-delay-3">
              Software Engineering student at EPI with hands-on experience
              building production-ready applications. I specialize in backend
              development but bring full-stack capabilities to deliver complete
              solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, index) => {
              const delayClass = `scroll-delay-${Math.min(index + 1, 8)}`;
              return (
                <Card
                  key={index}
                  className={`p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover-lift group relative overflow-hidden scroll-scale ${delayClass}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-lg bg-linear-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6 text-primary group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 font-mono">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 scroll-blur" style={{ animationDelay: "0.8s" }}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="font-mono text-primary text-sm">
                  {"// Quick Facts"}
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-secondary">→</span>
                    <div>
                      <span className="text-muted-foreground">Location:</span>{" "}
                      <span className="text-foreground">
                        Sousse, Tunisia (UTC+1)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary">→</span>
                    <div>
                      <span className="text-muted-foreground">Education:</span>{" "}
                      <span className="text-foreground">
                        Software Engineering @ EPI
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary">→</span>
                    <div>
                      <span className="text-muted-foreground">Languages:</span>{" "}
                      <span className="text-foreground">
                        Arabic, French, English
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary">→</span>
                    <div>
                      <span className="text-muted-foreground">
                        Availability:
                      </span>{" "}
                      <span className="text-foreground">
                        Open for remote work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
