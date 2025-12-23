"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import type * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#00ffaa"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
}

function FloatingCode() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const codeSnippets = [
    "async function",
    "await db.query",
    "app.use()",
    "router.get()",
    "try { catch",
    "export default",
  ];

  return (
    <group ref={groupRef}>
      {codeSnippets.map((text, i) => {
        const angle = (i / codeSnippets.length) * Math.PI * 2;
        const radius = 3.5;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
          >
            <planeGeometry args={[1, 0.3]} />
            <meshBasicMaterial color="#00ffaa" transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <FloatingCode />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 md:mb-8 animate-float">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl sm:blur-2xl animate-pulse animation-delay-300" />
            <img
              src="/images/baha.png"
              alt="Baha Eddine Jdidi"
              className="relative rounded-full w-full h-full object-cover border-2 sm:border-4 border-primary/50 hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="font-mono text-primary text-xs sm:text-sm mb-1 sm:mb-2 animate-slide-up">
              {"> const developer = {"}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold glow-text animate-slide-up animation-delay-100">
              Baha Eddine Jdidi
            </h1>
            <div className="font-mono text-secondary text-base sm:text-lg md:text-xl lg:text-2xl animate-slide-up animation-delay-200">
              {'  role: "FullStack Developer",'}
            </div>
            <div className="font-mono text-muted-foreground text-lg animate-slide-up animation-delay-300">
              {'  stack: ["React/NextJs", "NestJS", "PostgreSQL", "Docker"]'}
            </div>
            <div className="font-mono text-primary text-sm animate-slide-up animation-delay-400">
              {"}"}
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-500 px-4">
            Full-stack developer with a passion for backend architecture. I
            build scalable APIs and robust systems that power modern
            applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-slide-up animation-delay-600 px-4">
            <Button
              size="lg"
              asChild
              className="font-mono hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 bg-primary text-primary-foreground group relative overflow-hidden w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 justify-center"
              >
                <span className="relative z-10">View Projects</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <span className="absolute inset-0 bg-primary/20 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="font-mono bg-transparent hover:scale-105 transition-all duration-300 border-2 hover:bg-secondary/10 hover:border-secondary group w-full sm:w-auto"
            >
              <a
                href="/Backend_Developer_CV.pdf"
                download="Baha_Eddine_Jdidi_CV.pdf"
                className="flex items-center gap-2 justify-center"
              >
                <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                <span>Download CV</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="font-mono bg-transparent hover:scale-105 transition-all duration-300 border-2 hover:bg-primary/10 hover:border-primary group w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 justify-center"
              >
                <span>Get in Touch</span>
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about">
              <ArrowDown className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
