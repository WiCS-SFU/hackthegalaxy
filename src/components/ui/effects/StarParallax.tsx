"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Pure CSS parallax pixel stars - based on
 * https://codepen.io/mattmarble/pen/qBdamQz
 * Enhanced with scroll-based parallax and intersection observer
 */

export default function StarParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  // Start visible for quiz pages, hidden for others
  const [isVisible, setIsVisible] = useState(() => {
    return pathname?.startsWith('/quiz') ?? false;
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if we're on a quiz page
    const isQuizPage = pathname?.startsWith('/quiz');

    // Check if we're in a fixed overlay (quiz layout)
    let isFixedOverlay = false;
    let parent = container.parentElement;
    while (parent && parent !== document.body) {
      const computedStyle = window.getComputedStyle(parent);
      if (computedStyle.position === 'fixed' || parent.classList.contains('fixed')) {
        isFixedOverlay = true;
        break;
      }
      parent = parent.parentElement;
    }

    // Try to find parent section element for better detection
    let targetElement: HTMLElement = container;
    parent = container.parentElement;
    while (parent && parent !== document.body) {
      if (parent.tagName === 'SECTION' || parent.classList.contains('relative')) {
        targetElement = parent;
        break;
      }
      parent = parent.parentElement;
    }

    let observer: IntersectionObserver | null = null;

    // For quiz pages or fixed overlays, start immediately with stars distributed
    if (isQuizPage || isFixedOverlay) {
      setIsVisible(true);
      // Set animation delay to random positions so stars appear distributed immediately
      const layers = container.querySelectorAll('.hero-stars-layer');
      layers.forEach((layer) => {
        // Set a random starting offset so stars appear distributed
        const randomOffset = -(Math.random() * 2000);
        (layer as HTMLElement).style.setProperty('--star-start-offset', `${randomOffset}px`);
        // Also use animation delay for additional randomization
        const animationOffset = Math.random() * 2000;
        (layer as HTMLElement).style.animationDelay = `-${animationOffset}ms`;
      });
    } else {
      // Check if already visible on mount (for hero section at top of page)
      const rect = targetElement.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight + 300 && rect.bottom > -300;
      if (isInViewport) {
        setIsVisible(true);
        // For sections already in viewport, distribute stars immediately
        const layers = container.querySelectorAll('.hero-stars-layer');
        layers.forEach((layer) => {
          // Set a random starting offset so stars appear distributed
          const randomOffset = -(Math.random() * 2000);
          (layer as HTMLElement).style.setProperty('--star-start-offset', `${randomOffset}px`);
          // Also use animation delay for additional randomization
          const animationOffset = Math.random() * 2000;
          (layer as HTMLElement).style.animationDelay = `-${animationOffset}ms`;
        });
      }

      // Intersection Observer to detect when stars enter viewport
      // Use larger rootMargin to trigger earlier (300px before entering)
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              // When section becomes visible, distribute stars immediately
              // so they don't all start from the bottom
              const layers = container.querySelectorAll('.hero-stars-layer');
              layers.forEach((layer) => {
                // Set a random starting offset so stars appear distributed across viewport
                // This positions stars immediately instead of waiting for them to scroll up
                const randomOffset = -(Math.random() * 2000); // Random between -2000px and 0px
                (layer as HTMLElement).style.setProperty('--star-start-offset', `${randomOffset}px`);
                // Also use animation delay for additional randomization
                const animationOffset = Math.random() * 2000;
                (layer as HTMLElement).style.animationDelay = `-${animationOffset}ms`;
              });
            }
          });
        },
        {
          threshold: 0, // Trigger as soon as any part enters the expanded viewport
          rootMargin: "300px 0px 300px 0px", // Start animation 300px before it enters viewport
        }
      );

      observer.observe(targetElement);
    }

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
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const isQuiz = pathname?.startsWith('/quiz');
  
  return (
    <div 
      ref={containerRef} 
      className={`hero-stars-container ${isVisible ? 'hero-stars-visible' : 'hero-stars-hidden'}`}
      data-quiz-page={isQuiz ? 'true' : undefined}
    >
      <div className="hero-stars-scroll-wrapper" data-layer="1">
        <div id="stars" className="hero-stars-layer" />
      </div>
      {/* <div className="hero-stars-scroll-wrapper" data-layer="2">
        <div id="stars2" className="hero-stars-layer hero-stars-layer-2" />
      </div> */}
      <div className="hero-stars-scroll-wrapper" data-layer="3">
        <div id="stars3" className="hero-stars-layer hero-stars-layer-3" />
      </div>
    </div>
  );
}
