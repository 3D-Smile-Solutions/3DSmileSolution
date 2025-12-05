import React, { useState, useEffect, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';
import heroBG from '../assets/Hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Refs for animations
  const heroRef = useRef(null);
  const heroContainerRef = useRef(null);
  const heroContentRef = useRef(null);
  const titleSectionRef = useRef(null);
  const infoBoxRef = useRef(null);
  const scrollTextRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  // GSAP Animations - ANDROID OPTIMIZED
  useEffect(() => {
    // Detect Android specifically
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isMobile = window.innerWidth <= 768;
    
    const ctx = gsap.context(() => {
      
      if (isAndroid) {
        // ============================================
        // ANDROID-SPECIFIC OPTIMIZATION
        // ============================================
        
        // Disable smooth scrolling on Android (causes conflicts)
        document.documentElement.style.scrollBehavior = 'auto';
        
        // Configure ScrollTrigger for Android
        ScrollTrigger.config({
          ignoreMobileResize: true,
          autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
          limitCallbacks: true, // Critical for Android
        });
        
        // Use RAF-based updates instead of scrub for better Android performance
        let heroAnimationActive = true;
        let lastScrollY = 0;
        let ticking = false;
        
        const updateHeroAnimation = () => {
          if (!heroAnimationActive) return;
          
          const scrollY = window.scrollY;
          const heroHeight = heroRef.current.offsetHeight;
          const progress = Math.min(scrollY / (heroHeight * 0.8), 1);
          
          if (progress < 1) {
            const scale = 1 - (progress * 0.1); // 1 to 0.9
            const opacity = 1 - progress;
            const borderRadius = progress * 30;
            
            gsap.set(heroContainerRef.current, {
              scale: scale,
              opacity: opacity,
              borderRadius: borderRadius + 'px',
              force3D: true,
              immediateRender: true,
            });
          } else {
            // Lock final state
            gsap.set(heroContainerRef.current, {
              scale: 0.9,
              opacity: 0,
              borderRadius: '30px',
              force3D: true,
            });
            heroAnimationActive = false; // STOP animation completely
          }
          
          ticking = false;
        };
        
        const onScroll = () => {
          lastScrollY = window.scrollY;
          if (!ticking && heroAnimationActive) {
            requestAnimationFrame(updateHeroAnimation);
            ticking = true;
          }
        };
        
        window.addEventListener('scroll', onScroll, { passive: true });
        
        // Scroll text fade - simplified for Android
        let scrollTextActive = true;
        
        const updateScrollText = () => {
          if (!scrollTextActive) return;
          
          const scrollY = window.scrollY;
          const fadeDistance = window.innerHeight * 0.2;
          const progress = Math.min(scrollY / fadeDistance, 1);
          
          if (progress < 1) {
            gsap.set(scrollTextRef.current, {
              opacity: 1 - progress,
              y: -20 * progress,
              force3D: true,
            });
          } else {
            gsap.set(scrollTextRef.current, {
              opacity: 0,
              y: -20,
            });
            scrollTextActive = false;
          }
        };
        
        const onScrollText = () => {
          if (scrollTextActive) {
            requestAnimationFrame(updateScrollText);
          }
        };
        
        window.addEventListener('scroll', onScrollText, { passive: true });
        
        // Cleanup function for Android
        return () => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('scroll', onScrollText);
          heroAnimationActive = false;
          scrollTextActive = false;
        };
        
      } else if (isMobile) {
        // ============================================
        // OTHER MOBILE (iOS, etc)
        // ============================================
        
        const heroTrigger = ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: '80% top',
          scrub: 0.3,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
          onUpdate: (self) => {
            if (self.progress < 1) {
              const scale = 1 - (self.progress * 0.1);
              const opacity = 1 - self.progress;
              const borderRadius = self.progress * 30;
              
              gsap.set(heroContainerRef.current, {
                scale: scale,
                opacity: opacity,
                borderRadius: borderRadius + 'px',
                force3D: true,
              });
            }
          },
          onLeave: () => {
            gsap.set(heroContainerRef.current, {
              scale: 0.9,
              opacity: 0,
              borderRadius: '30px',
            });
            heroTrigger.disable();
          },
          onEnterBack: () => {
            heroTrigger.enable();
          }
        });

        const scrollTextTrigger = ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: '20% top',
          scrub: 0.3,
          fastScrollEnd: true,
          onUpdate: (self) => {
            gsap.set(scrollTextRef.current, {
              opacity: 1 - self.progress,
              y: -20 * self.progress,
              force3D: true,
            });
          },
          onLeave: () => {
            gsap.set(scrollTextRef.current, { opacity: 0, y: -20 });
            scrollTextTrigger.disable();
          }
        });
        
      } else {
        // ============================================
        // DESKTOP - Original animations
        // ============================================
        
        gsap.to(heroContainerRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
          },
          scale: 0.85,
          opacity: 0,
          borderRadius: '40px',
          ease: 'none'
        });

        gsap.to(scrollTextRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '20% top',
            scrub: 1,
            invalidateOnRefresh: true,
          },
          opacity: 0,
          y: -20,
          ease: 'none'
        });
      }

      // ============================================
      // INITIAL LOAD ANIMATIONS (All platforms)
      // ============================================
      
      gsap.from(titleSectionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
      });

      if (infoBoxRef.current) {
        gsap.from(infoBoxRef.current, {
          opacity: 0,
          x: 30,
          duration: 1,
          ease: 'power3.out',
          delay: 0.6
        });
      }

      gsap.from(scrollTextRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.9
      });
      
    }, heroRef);

    return () => {
      ctx.revert();
      
      // Kill all ScrollTriggers associated with hero
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === heroRef.current) {
          trigger.kill(true);
        }
      });
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef} id="home">
      {/* Rounded Container - This is what scales */}
      <div className="hero-rounded-container" ref={heroContainerRef}>
        
        {/* Video Background */}
        <div className="hero-video-container">
          <img src={heroBG} alt="" />
          
          {/* Dark Overlay */}
          <div className="hero-overlay"></div>
        </div>
        
        {/* Hero Content */}
        <div className="hero-content-wrapper">
          {/* Main Content Row */}
          <div className="hero-content-row" ref={heroContentRef}>
            
            {/* Left Side - Title Section */}
            <div className="hero-title-section" ref={titleSectionRef}>
              <h1 className="hero-title">
                WORK SMARTER.
                GROW FASTER.
              </h1>
              
              {/* Subtitle */}
              <p className="hero-subtitle">
                Empowering Dental & Healthcare Companies with Human-First AI Solutions
              </p>
            </div>
          </div>
          
          {/* Scroll to Explore Text - Center Bottom */}
          <div className="hero-scroll-text" ref={scrollTextRef}>
            <p>Scroll to Explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;