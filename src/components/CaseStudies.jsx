import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import './CaseStudies.css';

import caseStudiesBG from '../assets/Discover.jpg'; // Replace with actual path

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
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
    <div className="case-studies-page">
      <Navbar />

      <section className="case-studies-page-hero" ref={heroRef}>
        <div className="case-studies-page-bg">
          <img src={caseStudiesBG} alt="" />
          <div className="case-studies-page-overlay"></div>
        </div>

        <div className="case-studies-page-content" ref={contentRef}>
          <h1 className="case-studies-page-title">
            Case Studies
          </h1>
          
          <p className="case-studies-page-subtitle">
            Real results from real practices. Discover how we've helped businesses transform their operations and accelerate growth.
          </p>

          <button 
            className="case-studies-page-cta"
            onClick={scrollToDemo}
          >
            REQUEST A FREE DEMO
          </button>
        </div>
      </section>

      <section className="case-studies-page-content-section">
        <div className="case-studies-page-wrapper">
          <h2>Success Stories</h2>
          <p>Explore how our clients have achieved remarkable results with our AI solutions and strategic guidance.</p>
          
          <div className="case-studies-grid">
            {/* Case studies will go here */}
            <p>Case studies coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
