import React, { useState, useEffect, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';
import heroBG from '../assets/RED.png';

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
          {/* Main Content Row */}
          <div className="hero-content-row" ref={heroContentRef}>
            
            {/* Left Side - Title Section */}
            <div className="hero-title-section" ref={titleSectionRef}>
              <h1 className="hero-title">
                WORK SMARTER.<br />
                GROW FASTER.
              </h1>
              
              {/* Subtitle */}
              <p className="hero-subtitle">
                Empowering Dental & Healthcare Companies with Human-First AI Solutions
              </p>
            </div>
            
            {/* Right Side - Info Box */}
            <div className="hero-info-box" ref={infoBoxRef}>
              {/* Image - Now at bottom */}
              <div className="info-box-image">
                <img src={heroBG} alt="Healthcare AI Solutions" />
              </div>
              
              {/* Info Text - Now at top */}
              <p className="info-box-text">
                Unlock new opportunities and enhance efficiency with our tailored <strong>GTM strategies</strong> 
                {' '}and <strong>AI-driven solutions</strong> for seamless efficiency in dental and healthcare businesses.
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