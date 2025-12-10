import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import Footer from './Footer';
import './Industries.css';

// Import your images
import industriesBG from '../assets/Dental.jpg';
import Industriesweserve from '../assets/IndustriesWeServe.jpg';
import AIinHealth from '../assets/AIinHealthcare.jpg';
import dentalImage from '../assets/Dental.jpg';
import healthcareImage from '../assets/Health.jpg';

gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
      });

      // Parallax effect on hero background
      gsap.to(parallaxRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToDemo = () => {
    const calendarSection = document.querySelector('.calendar-section');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industries = [
    {
      id: 'dental',
      tag: 'DENTAL',
      title: 'AI for Dental Practices',
      description: 'At 3D Smile Solutions, we streamline the unique challenges of dental practices, from small clinics to large-scale location strategies. Our AI solutions optimize workflows, streamline patient engagement, and enhance operational efficiency. Combined with our Go-to-Market (GTM) strategies, we help you scale with confidence and sustainable growth through automation.',
      image: dentalImage,
      imagePosition: 'right',
      features: [
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: 'AI Automation for Appointment Scheduling',
          description: 'Reduce no-shows and optimize patient experience through intelligent booking.'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: 'Automated Patient Management',
          description: 'Centralize patient data, treatment plans, and communication. Extreme automation, zero manual errors.'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: 'GTM Strategies for Growth',
          description: 'Increase new patient acquisition and scale across multiple locations strategically.'
        }
      ]
    },
    {
      id: 'healthcare',
      tag: 'HEALTHCARE',
      title: 'AI in Healthcare',
      description: 'Delivering customized AI-driven solutions for healthcare providers to improve patient outcomes and reduce costs. From predictive analytics to patient care management tools, our technology-driven GTM strategies help healthcare leaders deliver better outcomes and scale operations.',
      image: AIinHealth,
      imagePosition: 'left',
      features: [
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="9" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: 'Patient Data Management',
          description: 'AI-powered HIPAA-compliant systems that centralize patient data for better decision-making.'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: 'Predictive Analytics',
          description: 'Use real-time AI-driven analytics to improve healthcare delivery, reduce costs, and predict patient needs before they arise.'
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          title: 'Operational Efficiency',
          description: 'Streamline scheduling, billing, and communications to reduce administrative overhead.'
        }
      ]
    }
  ];

  return (
    <div className="industries-page">
      <Navbar />

      {/* Hero Section */}
      <section className="industries-hero" ref={heroRef}>
        <div className="industries-hero-bg" ref={parallaxRef}>
          <img src={Industriesweserve} alt="" />
          <div className="industries-hero-overlay"></div>
        </div>

        <div className="industries-hero-content" ref={contentRef}>
          <span className="industries-tag">INDUSTRIES</span>
          
          <h1 className="industries-hero-title">
            Industries We Serve
          </h1>
          
          <p className="industries-hero-subtitle">
            Transforming businesses with AI-powered solutions and go-to-market strategies tailored for the dental and healthcare sectors.
          </p>

          <button 
            className="industries-hero-cta"
            onClick={scrollToDemo}
          >
            <span className="cta-text">REQUEST A FREE DEMO</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>

        <div className="scroll-indicator-hero">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Industries List */}
      <section className="industries-list-section">
        <div className="industries-container">
          {industries.map((industry, index) => (
            <div 
              key={industry.id} 
              className={`industry-card ${industry.imagePosition === 'left' ? 'image-left' : 'image-right'}`}
            >
              {/* Content */}
              <div className="industry-content">
                <span className="industry-tag">{industry.tag}</span>
                
                <h2 className="industry-title">{industry.title}</h2>
                
                <p className="industry-description">{industry.description}</p>
                
                {/* Features List */}
                <div className="industry-features">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-icon">
                        {feature.icon}
                      </div>
                      <div className="feature-content">
                        <h4 className="feature-title">{feature.title}</h4>
                        <p className="feature-description">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="industry-image">
                <div className="image-wrapper">
                  <img src={industry.image} alt={industry.title} />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;