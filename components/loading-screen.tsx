"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling during loading
    document.body.style.overflow = "hidden";

    // Scroll to top immediately
    window.scrollTo(0, 0);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "unset";
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-600" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-8 px-4">
        {/* Animated avatar */}
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32">
          <div
            className="absolute inset-0 rounded-full border-2 sm:border-4 border-primary animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute inset-1 sm:inset-2 rounded-full border-2 sm:border-4 border-secondary animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          />
          <div
            className="absolute inset-2 sm:inset-4 rounded-full border-2 sm:border-4 border-accent animate-spin"
            style={{ animationDuration: "1.5s" }}
          />
          <div className="absolute inset-3 sm:inset-6 rounded-full overflow-hidden border border-primary/50 sm:border-2">
            <img
              src="/images/bahaavatar.png"
              alt="Loading"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2 sm:space-y-3 text-center">
          <div className="font-mono text-sm sm:text-base md:text-lg text-foreground animate-pulse">
            <span className="text-primary">{">"}</span> Loading Portfolio
            <span className="animate-blink">_</span>
          </div>

          {/* Progress bar */}
          <div className="w-48 sm:w-64 h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="font-mono text-xs sm:text-sm text-muted-foreground">
            {progress}% Complete
          </div>
        </div>

        {/* Floating code elements */}
        <div className="flex gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono text-muted-foreground">
          <span className="animate-pulse" style={{ animationDelay: "0s" }}>
            npm install
          </span>
          <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>
            Building...
          </span>
          <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>
            Done ✓
          </span>
        </div>
      </div>
    </div>
  );
}
