import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import './GTMStrategy.css';

// Import your topographic background image
import topographicBG from '../assets/RED.png'; // Replace with actual path

gsap.registerPlugin(ScrollTrigger);

const GTMStrategy = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content on load
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToDemo = () => {
    // Scroll to demo section or open calendar
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="gtm-strategy-page">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="gtm-hero-section" ref={heroRef}>
        {/* Background Image with Overlay */}
        <div className="gtm-hero-bg">
          <img src={topographicBG} alt="" />
          <div className="gtm-hero-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="gtm-hero-content" ref={contentRef}>
          <h1 className="gtm-hero-title">
            Accelerate Your Market Entry with Tailored Go-to-Market Strategies
          </h1>
          
          <p className="gtm-hero-subtitle">
            Automate key processes like scheduling, patient management, and billing, allowing you to focus on providing excellent care.
          </p>

          <button 
            className="gtm-hero-cta"
            onClick={scrollToDemo}
          >
            REQUEST A FREE DEMO
          </button>
        </div>
      </section>

      {/* Additional sections can go here */}
      <section className="gtm-content-section">
        {/* Your other content sections */}
        <div className="gtm-content-wrapper">
          <h2>Our GTM Strategy Services</h2>
          <p>Content goes here...</p>
        </div>
      </section>
    </div>
  );
};

export default GTMStrategy;