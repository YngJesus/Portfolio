"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Award,
  Calendar,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CertificateSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const certificate = {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Issued Dec 2024",
    credentialId: "02f3cb78-2f76-49ad-bac5-6e2d3b62dc26",
    url: "https://www.credly.com/badges/02f3cb78-2f76-49ad-bac5-6e2d3b62dc26/public_url",
    badge: "/images/Badge.png",
    skills: [
      "Cloud Computing",
      "Azure Services",
      "Cloud Security",
      "Azure Architecture",
      "Cost Management",
    ],
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-12 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-8">
          <div className="font-mono text-primary text-xs mb-1 scroll-reveal-down scroll-delay-1 flex items-center justify-center gap-2">
            <Sparkles className="h-3 w-3 animate-pulse" />
            {"// Professional Credentials"}
            <Sparkles className="h-3 w-3 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 glow-text scroll-reveal scroll-delay-2">
            Certifications
          </h2>
        </div>

        <div className="flex justify-center scroll-scale scroll-delay-4 perspective-1000">
          <Card
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: isHovered
                ? "transform 0.1s ease-out"
                : "transform 0.5s ease-out",
            }}
            className="relative max-w-sm w-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden group hover:shadow-2xl hover:shadow-primary/20"
          >
            {/* Spotlight effect following mouse */}
            {isHovered && (
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb, 59, 130, 246), 0.15), transparent 50%)`,
                }}
              />
            )}

            {/* Lanyard string with swing animation */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-linear-to-b from-transparent via-primary/30 to-primary/50 -z-10 group-hover:animate-swing origin-top" />

            {/* Animated background effects */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow animation-delay-200" />

            {/* Badge holder hole with metallic effect */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-3 border-card bg-primary/10 z-10 shadow-inner group-hover:shadow-lg group-hover:border-primary/40 transition-all duration-300">
              <div className="absolute inset-1 rounded-full bg-linear-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/20 to-transparent opacity-50" />
            </div>

            <div className="relative pt-10 p-5">
              {/* Badge Image with floating animation */}
              <div className="flex justify-center mb-4">
                <div className="relative group/badge">
                  {/* Multi-layer glow effect */}
                  <div className="absolute -inset-3 bg-linear-to-r from-primary via-accent to-secondary opacity-0 group-hover/badge:opacity-30 blur-xl transition-opacity duration-500 rounded-full animate-pulse-glow" />

                  <div
                    className={`relative w-32 h-32 transition-all duration-500 ${
                      isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
                    }`}
                  >
                    <Image
                      src={certificate.badge}
                      alt={certificate.title}
                      width={128}
                      height={128}
                      className="w-full h-full object-contain drop-shadow-xl relative z-10 group-hover/badge:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500"
                    />
                    {/* Shine effect */}
                    <div
                      className="absolute inset-0 bg-linear-to-br from-white/0 via-white/20 to-white/0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 rounded-full"
                      style={{ transform: "rotate(-45deg)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="space-y-3">
                <div className="text-center">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-mono rounded-full mb-2 border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/15 transition-all duration-300">
                    <Award className="h-2.5 w-2.5 group-hover:animate-bounce" />
                    <span>Certified</span>
                    <CheckCircle className="h-2.5 w-2.5 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-base font-bold mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {certificate.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    {certificate.issuer}
                  </p>
                </div>

                {/* Issue Date */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <Calendar className="h-3 w-3" />
                  <span>{certificate.date}</span>
                </div>

                {/* Skills with stagger animation */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {certificate.skills.map((skill, idx) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-[10px] font-mono border border-primary/20 hover:bg-primary/20 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${idx * 0.1}s`,
                        transitionDelay: `${idx * 0.05}s`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Certificate Button with enhanced animation */}
                <div className="pt-3">
                  <Button
                    asChild
                    size="sm"
                    className="w-full font-mono text-xs bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn relative overflow-hidden"
                  >
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5"
                    >
                      <span className="relative z-10">View Credential</span>
                      <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 relative z-10" />
                      {/* Button hover effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/50 to-primary/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
            <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
          </Card>
        </div>

        {/* Additional info text */}
        <div className="text-center mt-8 scroll-reveal scroll-delay-5">
          <p className="text-xs text-muted-foreground font-mono">
            More certifications coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
