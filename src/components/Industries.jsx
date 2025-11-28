import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import './Industries.css';

// Import your background image
import industriesBG from '../assets/Discover.jpg'; // Replace with actual path

gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
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
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="industries-page">
      <Navbar />

      {/* Hero Section */}
      <section className="industries-page-hero" ref={heroRef}>
        <div className="industries-page-bg">
          <img src={industriesBG} alt="" />
          <div className="industries-page-overlay"></div>
        </div>

        <div className="industries-page-content" ref={contentRef}>
          <h1 className="industries-page-title">
            Industries We Serve
          </h1>
          
          <p className="industries-page-subtitle">
            Accelerate Growth & Optimize Operations with Our Custom AI & Strategic Expertise
          </p>

          <button 
            className="industries-page-cta"
            onClick={scrollToDemo}
          >
            REQUEST A FREE DEMO
          </button>
        </div>
      </section>

      {/* Additional sections */}
      <section className="industries-page-content-section">
        <div className="industries-page-wrapper">
          <h2>Dental Industry</h2>
          <p>Focused content on AI and GTM benefits for small practices to enterprise-level dental chains.</p>
          
          <h2>Healthcare Industry</h2>
          <p>Explaining how AI and GTM strategies can solve common problems in healthcare operations.</p>
        </div>
      </section>
    </div>
  );
};

export default Industries;
