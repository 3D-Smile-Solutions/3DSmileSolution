import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import './About.css';

import aboutBG from '../assets/Discover.jpg'; // Replace with actual path

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <div className="about-page">
      <Navbar />

      <section className="about-page-hero" ref={heroRef}>
        <div className="about-page-bg">
          <img src={aboutBG} alt="" />
          <div className="about-page-overlay"></div>
        </div>

        <div className="about-page-content" ref={contentRef}>
          <h1 className="about-page-title">
            About Us
          </h1>
          
          <p className="about-page-subtitle">
            We are a team of experts dedicated to helping businesses leverage AI and strategic consulting to accelerate growth and optimize operations.
          </p>

          <button 
            className="about-page-cta"
            onClick={scrollToDemo}
          >
            REQUEST A FREE DEMO
          </button>
        </div>
      </section>

      <section className="about-page-content-section">
        <div className="about-page-wrapper">
          <h2>Our Mission</h2>
          <p>To empower businesses with cutting-edge AI solutions and strategic insights that drive measurable results.</p>
          
          <h2>Our Vision</h2>
          <p>To be the leading provider of AI-powered automation and go-to-market strategies for dental and healthcare practices.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
