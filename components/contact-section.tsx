"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  MapPin,
  Clock,
  Linkedin,
  TerminalIcon,
  ChevronRight,
} from "lucide-react";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [terminalHistory, setTerminalHistory] = useState<
    { command: string; output: string[] }[]
  >([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const commands = {
    help: [
      "Available commands:",
      "  about     - Learn about me",
      "  skills    - View my technical skills",
      "  projects  - See my Live projects",
      "  contact   - Get my contact information",
      "  social    - View social links",
      "  hire      - Information about working together",
      "  clear     - Clear terminal",
    ],
    about: [
      "Baha Eddine Jdidi - Backend Developer",
      "Software Engineering student at EPI, Tunis",
      "Passionate about building scalable backend systems",
      "Fullstack capable but backend-focused 🚀",
    ],
    skills: [
      "Backend: NestJS, Node.js, TypeScript",
      "Database: PostgreSQL, MongoDB, TypeORM, InfluxDB",
      "Frontend: React, NextJs, Shadcn UI, Tailwind CSS",
      "Tools: Git, Docker, Postman, Linux",
    ],
    projects: [
      "1. Energy Monitoring Platform (NestJS, MongoDB, InfluxDB)",
      "2. StudyMateAI (NestJS, PostgreSQL, JWT)",
      "3. GuessWhoLOL (JavaScript game)",
      "4. E-Commerce Platform (Full-stack)",
    ],
    contact: [
      "Email: bahajedidi2016@gmail.com",
      "GitHub: github.com/YngJesus",
      "Location: Sousse, Tunisia (UTC+1)",
    ],
    social: [
      "GitHub: https://github.com/YngJesus",
      "LinkedIn: https://www.linkedin.com/in/bahaeddinejdidi/",
    ],
    hire: [
      "Availability: Immediately",
      "Work Type: Remote",
      "Commitment: Flexible",
      "",
      "Email me at bahajedidi2016@gmail.com to discuss opportunities!",
    ],
    clear: [],
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === "clear") {
      setTerminalHistory([]);
      setCurrentCommand("");
      return;
    }

    if (trimmedCmd === "") return;

    // Add to command history
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const output = commands[trimmedCmd as keyof typeof commands] || [
      `Command not found: ${trimmedCmd}`,
      'Type "help" for available commands',
    ];

    setTerminalHistory([...terminalHistory, { command: cmd, output }]);
    setCurrentCommand("");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bahajedidi2016@gmail.com",
      href: "mailto:bahajedidi2016@gmail.com",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/YngJesus",
      href: "https://github.com/YngJesus",
      color: "secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sousse, Tunisia",
      color: "accent",
    },
    {
      icon: Clock,
      label: "Timezone",
      value: "UTC+1",
      color: "chart-2",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-600" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-2 scroll-blur scroll-delay-1">
            {"// Get in Touch"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text scroll-reveal scroll-delay-2">
            Interactive Terminal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed scroll-reveal scroll-delay-3">
            Type commands in the terminal below to learn more about me. Start
            with "help" to see available commands.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-3 sm:space-y-4 scroll-reveal-left scroll-delay-1">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover-lift group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg bg-${item.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon
                      className={`h-5 w-5 text-${item.color} group-hover:animate-pulse`}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 font-mono">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-foreground hover:text-primary transition-colors font-mono text-sm break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-mono text-sm">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 fade-in-item hover-lift transition-all duration-300">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                {"// Connect With Me"}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 h-12 hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300 bg-transparent border-primary/30"
                >
                  <a
                    href="https://github.com/YngJesus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    <span className="font-medium">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 h-12 hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300 bg-transparent border-primary/30"
                >
                  <a
                    href="https://www.linkedin.com/in/bahaeddinejdidi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          <Card
            className="lg:col-span-3 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 relative overflow-hidden group scroll-reveal-right scroll-delay-2"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Terminal Header */}
              <div className="bg-background/80 border-b border-primary/20 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 ml-4 text-muted-foreground font-mono text-sm">
                  <TerminalIcon className="h-4 w-4 text-primary" />
                  <span>interactive-terminal</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div
                ref={terminalRef}
                className="p-3 sm:p-4 md:p-6 h-[300px] sm:h-[350px] md:h-[400px] overflow-y-auto font-mono text-xs sm:text-sm space-y-2"
              >
                <div className="text-muted-foreground mb-4">
                  Welcome to my interactive terminal! Type &quot;help&quot; to
                  get started.
                </div>

                {terminalHistory.map((entry, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-primary">
                      <ChevronRight className="h-4 w-4" />
                      <span>{entry.command}</span>
                    </div>
                    {entry.output.map((line, lineIdx) => (
                      <div key={lineIdx} className="text-muted-foreground pl-6">
                        {line}
                      </div>
                    ))}
                  </div>
                ))}

                <div className="flex items-center gap-2 text-primary">
                  <ChevronRight className="h-4 w-4 animate-pulse" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleCommand(currentCommand);
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        if (commandHistory.length > 0) {
                          const newIndex =
                            historyIndex === -1
                              ? commandHistory.length - 1
                              : Math.max(0, historyIndex - 1);
                          setHistoryIndex(newIndex);
                          setCurrentCommand(commandHistory[newIndex]);
                        }
                      } else if (e.key === "ArrowDown") {
                        e.preventDefault();
                        if (historyIndex !== -1) {
                          const newIndex = historyIndex + 1;
                          if (newIndex >= commandHistory.length) {
                            setHistoryIndex(-1);
                            setCurrentCommand("");
                          } else {
                            setHistoryIndex(newIndex);
                            setCurrentCommand(commandHistory[newIndex]);
                          }
                        }
                      }
                    }}
                    className="flex-1 bg-transparent outline-none text-foreground caret-primary"
                    placeholder="Type a command..."
                    autoFocus
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 relative overflow-hidden group scroll-scale scroll-delay-3">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="font-mono text-primary text-sm mb-6">
              {"// Work Preferences"}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 hover:scale-105 group/card border border-primary/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2 font-mono group-hover/card:scale-110 transition-transform">
                  Now
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Availability
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 hover:scale-105 group/card border border-secondary/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-1 sm:mb-2 font-mono group-hover/card:scale-110 transition-transform">
                  Remote
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Work Type
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 hover:scale-105 group/card border border-accent/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-1 sm:mb-2 font-mono group-hover/card:scale-110 transition-transform">
                  Flexible
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Commitment
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 hover:scale-105 group/card border border-chart-2/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-chart-2 mb-1 sm:mb-2 font-mono group-hover/card:scale-110 transition-transform">
                  Part-Time
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Job Preference
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div
          className="mt-16 text-center text-sm text-muted-foreground font-mono scroll-reveal"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="mb-2">
            © 2025 Baha Eddine Jdidi. Built with Next.js and React Three Fiber.
          </p>
        </div>
      </div>
    </section>
  );
}
