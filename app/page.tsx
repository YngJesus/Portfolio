"use client";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/animated-background";
import { LoadingScreen } from "@/components/loading-screen";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect } from "react";

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    const checkVisible = () => {
      const elements = document.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-down, .scroll-scale, .scroll-rotate, .scroll-blur"
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          el.classList.add("revealed");
        }
      });
    };

    setTimeout(checkVisible, 500);
    setTimeout(checkVisible, 1000);
    setTimeout(checkVisible, 2000);
  }, []);

  return (
    <main className="relative min-h-screen bg-background">
      <LoadingScreen />
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
