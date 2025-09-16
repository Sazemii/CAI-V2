"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const useScrollAnimation = (
  animationType = "fadeInUp",
  duration = 1,
  delay = 0
) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on animation type
    const initialState = {
      opacity: 0,
      y:
        animationType === "fadeInUp"
          ? 50
          : animationType === "fadeInDown"
          ? -50
          : 0,
      x:
        animationType === "fadeInLeft"
          ? -50
          : animationType === "fadeInRight"
          ? 50
          : 0,
      scale: animationType === "scaleIn" ? 0.8 : 1,
    };

    // Set initial styles
    gsap.set(element, initialState);

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate to final state
            gsap.to(element, {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              duration: duration,
              delay: delay,
              ease: "power2.out",
            });

            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [animationType, duration, delay]);

  return elementRef;
};

export default useScrollAnimation;
