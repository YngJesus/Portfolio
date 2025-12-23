"use client";

import { useEffect } from "react";

export function useScrollReveal(options?: IntersectionObserverInit) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px",
          ...options,
        }
      );

      const elements = document.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-down, .scroll-scale, .scroll-rotate, .scroll-blur"
      );

      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    }, 300);

    return () => clearTimeout(timer);
  }, [options]);
}
