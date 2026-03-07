"use client";

import { useEffect, useRef } from "react";

/**
 * Pure CSS parallax pixel stars - based on
 * https://codepen.io/mattmarble/pen/qBdamQz
 * Enhanced with scroll-based parallax
 */

export default function StarParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollY = 0;
    let rafId: number | null = null;

    const handleScroll = () => {
      scrollY = window.scrollY;
      
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          // Apply scroll-based transform to wrapper elements
          // Different multipliers for depth effect
          const wrapper1 = container.querySelector('[data-layer="1"]') as HTMLElement;
          const wrapper2 = container.querySelector('[data-layer="2"]') as HTMLElement;
          const wrapper3 = container.querySelector('[data-layer="3"]') as HTMLElement;

          if (wrapper1) {
            wrapper1.style.transform = `translateY(${scrollY * 0.3}px)`;
          }
          if (wrapper2) {
            wrapper2.style.transform = `translateY(${scrollY * 0.5}px)`;
          }
          if (wrapper3) {
            wrapper3.style.transform = `translateY(${scrollY * 0.7}px)`;
          }

          rafId = null;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-stars-container">
      <div className="hero-stars-scroll-wrapper" data-layer="1">
        <div id="stars" className="hero-stars-layer" />
      </div>
      <div className="hero-stars-scroll-wrapper" data-layer="2">
        <div id="stars2" className="hero-stars-layer hero-stars-layer-2" />
      </div>
      <div className="hero-stars-scroll-wrapper" data-layer="3">
        <div id="stars3" className="hero-stars-layer hero-stars-layer-3" />
      </div>
    </div>
  );
}
