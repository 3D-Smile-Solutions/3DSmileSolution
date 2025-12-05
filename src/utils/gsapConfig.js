// gsapConfig.js - Centralized GSAP configuration for cross-platform compatibility
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

// Detect Android
const isAndroid = /Android/i.test(navigator.userAgent);

// Configure ScrollTrigger for mobile stability
ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});

// Set default GSAP settings for smoother mobile performance
gsap.defaults({
  ease: "power2.out",
  force3D: true,
});

// Initialize GSAP properly after page is ready
export const initGSAP = () => {
  return new Promise((resolve) => {
    const init = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh(true);
          resolve();
        });
      });
    };

    if (document.readyState === 'complete') {
      init();
    } else {
      window.addEventListener('load', init, { once: true });
    }
  });
};

// Setup resize handling
export const setupResizeHandler = () => {
  let resizeTimeout;
  
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 250);
  };

  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', () => {
    setTimeout(() => ScrollTrigger.refresh(true), 500);
  });

  return () => {
    window.removeEventListener('resize', handleResize);
    clearTimeout(resizeTimeout);
  };
};

// Fix for Android scroll position issues
export const setupScrollFix = () => {
  if (!isAndroid) return () => {};

  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        ScrollTrigger.update();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};

export { gsap, ScrollTrigger };