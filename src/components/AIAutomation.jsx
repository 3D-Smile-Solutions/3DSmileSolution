import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import './AIAutomation.css';

// Import your topographic background image
import topographicBG from '../assets/RED.png'; // Replace with actual path

gsap.registerPlugin(ScrollTrigger);

const AIAutomation = () => {
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
    <div className="ai-automation-page">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="ai-hero-section" ref={heroRef}>
        {/* Background Image with Overlay */}
        <div className="ai-hero-bg">
          <img src={topographicBG} alt="" />
          <div className="ai-hero-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="ai-hero-content" ref={contentRef}>
          <h1 className="ai-hero-title">
            Transform Your Practice with AI-Powered Automation Solutions
          </h1>
          
          <p className="ai-hero-subtitle">
            Automate key processes like scheduling, patient management, and billing, allowing you to focus on providing excellent care.
          </p>

          <button 
            className="ai-hero-cta"
            onClick={scrollToDemo}
          >
            REQUEST A FREE DEMO
          </button>
        </div>
      </section>

      {/* Additional sections can go here */}
      <section className="ai-content-section">
        {/* Your other content sections */}
        <div className="ai-content-wrapper">
          <h2>Our AI Automation Services</h2>
          <p>Content goes here...</p>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;
