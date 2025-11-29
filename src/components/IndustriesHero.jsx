import React, { useEffect, useRef } from 'react';
import './IndustriesHero.css';
import { HiArrowUpRight } from 'react-icons/hi2';

// Import your background image - replace with actual path
import industriesBG from '../assets/RED.png';


// SVG Icons as components
const ToothIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C9.5 2 7 3 7 6c0 2-1 3-2 5s-1 5 1 7c1.5 1.5 2 3 3 5 .5 1 1.5 1 2 0 .5-1.5 1-2.5 1-4s.5-2.5 1-2.5 1 1 1 2.5 .5 2.5 1 4c.5 1 1.5 1 2 0 1-2 1.5-3.5 3-5 2-2 2-5 1-7s-2-3-2-5c0-3-2.5-4-5-4z"/>
  </svg>
);

const HealthcareIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4M16 2v4M8 18v4M16 18v4M2 8h4M2 16h4M18 8h4M18 16h4"/>
    <rect x="6" y="6" width="12" height="12" rx="2"/>
    <path d="M12 9v6M9 12h6"/>
  </svg>
);

const IndustriesHero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const cardsRef = useRef([]);

  const industries = [
    {
      id: 1,
      icon: <ToothIcon />,
      title: 'Dental Industry',
      description: 'Focused content on AI and GTM benefits for small practices to enterprise-level dental chains.',
    },
    {
      id: 2,
      icon: <HealthcareIcon />,
      title: 'Healthcare Industry',
      description: 'Explaining how AI and GTM strategies can solve common problems in healthcare operations.',
    }
  ];

  return (
    <section className="industries-hero" ref={sectionRef}>
      {/* Background Image */}
      <div className="industries-bg">
        <img src={industriesBG} alt="" />
        <div className="industries-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="industries-content">
        {/* Left Side - Sticky Title */}
        <div className="industries-title-wrapper">
          <div className="industries-title-sticky" ref={titleRef}>
            <h2 className="industries-title">
              Industries We Serve
            </h2>
            <p className="industries-subtitle">
              Accelerate Growth & Optimize Operations with Our Custom AI & Strategic Expertise
            </p>
          </div>
        </div>

        {/* Right Side - Cards */}
        <div className="industries-cards" ref={cardsWrapperRef}>
          {industries.map((industry, index) => (
            <div 
              key={industry.id} 
              className="industry-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="industry-icon">
                {industry.icon}
              </div>
              
              <h3 className="industry-card-title">{industry.title}</h3>
              
              <p className="industry-card-description">{industry.description}</p>
              
              <div className="industry-card-divider"></div>
              
              <button className="industry-learn-more">
                <span>LEARN MORE</span>
                <HiArrowUpRight className="btn-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;