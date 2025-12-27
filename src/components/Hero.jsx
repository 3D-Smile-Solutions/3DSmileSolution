import React, { useState, useEffect, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';
import heroBG from '../assets/Hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if on mobile/small screen
      const isMobile = window.innerWidth <= 768;
      
      // Hero Container Scale & Fade - Shrinks and fades as you scroll past it
      gsap.to(heroContainerRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: isMobile ? '80% top' : 'bottom top',
          scrub: isMobile ? 0.5 : 1,
          invalidateOnRefresh: true,
        },
        scale: isMobile ? 0.90 : 0.85,
        opacity: 0,
        borderRadius: isMobile ? '30px' : '40px',
        ease: 'none'
      });

      // Title Section Animation - Initial Load
      gsap.from(titleSectionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
      });

      // Info Box Animation - Initial Load
      if (infoBoxRef.current) {
        gsap.from(infoBoxRef.current, {
          opacity: 0,
          x: 30,
          duration: 1,
          ease: 'power3.out',
          delay: 0.6
        });
      }

      // Scroll Text Animation - Initial Load
      gsap.from(scrollTextRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.9
      });

      // Fade out scroll text on scroll
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
    }, heroRef);

    return () => ctx.revert();
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

        </div>
      </div>
    </section>
  );
};

export default Hero;