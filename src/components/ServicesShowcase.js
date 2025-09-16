"use client";

import { useEffect, useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ServicesShowcase = () => {
  const containerRef = useRef(null);
  const showcaseRef = useScrollAnimation("fadeInUp", 1, 0.2);

  const services = ["Localization", "Automation", "Compliance", "Support"];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Functions to handle touch events
    let isPaused = false;

    const handleTouchStart = () => {
      container.style.animationPlayState = "paused";
      isPaused = true;
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        if (isPaused) {
          container.style.animationPlayState = "running";
          isPaused = false;
        }
      }, 1000); // Resume after 1 second
    };

    // Adjust animation speed based on screen size
    const adjustAnimationSpeed = () => {
      const screenWidth = window.innerWidth;
      let duration = "20s"; // default

      if (screenWidth <= 320) {
        duration = "10s";
      } else if (screenWidth <= 480) {
        duration = "12s";
      } else if (screenWidth <= 768) {
        duration = "15s";
      }

      container.style.animationDuration = duration;
    };

    // Setup event listeners
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("resize", adjustAnimationSpeed);

    // Initialize animation speed
    adjustAnimationSpeed();

    // Cleanup
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", adjustAnimationSpeed);
    };
  }, []);

  return (
    <div
      className="services-showcase flex text-[4rem] justify-between px-[3rem] py-[1rem] font-medium"
      ref={showcaseRef}
    >
      <div
        className="services-scroll-container"
        id="servicesContainer"
        ref={containerRef}
      >
        {services.map((service, index) => (
          <div key={`service-${index}`} className="services-item">
            {service}
          </div>
        ))}
        {/* Duplicate items for seamless infinite scroll */}
        {services.map((service, index) => (
          <div key={`service-dup-${index}`} className="services-item">
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;
