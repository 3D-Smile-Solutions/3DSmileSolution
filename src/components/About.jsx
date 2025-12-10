import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import Footer from './Footer';
import './About.css';

import aboutBG from '../assets/AboutHero.jpg';
import aboutDen from '../assets/AboutDental.jpg';
import aboutAI from '../assets/AboutAI.jpg';
import Disovery from '../assets/Discover.png';
import Health from '../assets/Health.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const introRef = useRef(null);
  const missionVisionRef = useRef(null);
  const valuesRef = useRef(null);
  const whyRef = useRef(null);
  const parallaxRef = useRef(null);

  const [counters, setCounters] = useState({
    practices: 0,
    satisfaction: 0,
    efficiency: 0
  });

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

      // Introduction section animation
      gsap.from('.about-intro-content > *', {
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });

      // Mission & Vision animations
      gsap.from('.about-mv-text-content', {
        scrollTrigger: {
          trigger: missionVisionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: 'power2.out'
      });

      gsap.from('.about-mv-image', {
        scrollTrigger: {
          trigger: missionVisionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 60,
        duration: 0.9,
        ease: 'power2.out'
      });

      // Values section animations
      gsap.from('.about-values-header > *', {
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out'
      });

      gsap.from('.about-value-card', {
        scrollTrigger: {
          trigger: '.about-values-grid',
          start: 'top 75%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Why choose us animations
      ScrollTrigger.create({
        trigger: whyRef.current,
        start: 'top 70%',
        onEnter: () => animateCounters()
      });

      gsap.from('.about-why-content > *', {
        scrollTrigger: {
          trigger: whyRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out'
      });

      gsap.from('.about-why-item', {
        scrollTrigger: {
          trigger: '.about-why-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.4)'
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const animateCounters = () => {
    gsap.to(counters, {
      practices: 100,
      duration: 2,
      ease: 'power2.out',
      onUpdate: function() {
        setCounters(prev => ({
          ...prev,
          practices: Math.floor(this.targets()[0].practices)
        }));
      }
    });

    gsap.to(counters, {
      satisfaction: 98,
      duration: 2,
      ease: 'power2.out',
      onUpdate: function() {
        setCounters(prev => ({
          ...prev,
          satisfaction: Math.floor(this.targets()[0].satisfaction)
        }));
      }
    });

    gsap.to(counters, {
      efficiency: 50,
      duration: 2,
      ease: 'power2.out',
      onUpdate: function() {
        setCounters(prev => ({
          ...prev,
          efficiency: Math.floor(this.targets()[0].efficiency)
        }));
      }
    });
  };

  const scrollToDemo = () => {
    const calendarSection = document.querySelector('.calendar-section');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Section */}
      <section className="about-page-hero" ref={heroRef}>
        <div className="about-page-bg" ref={parallaxRef}>
          <img src={aboutBG} alt="" />
          <div className="about-page-overlay"></div>
        </div>

        <div className="about-page-content" ref={contentRef}>
          <div className="about-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Innovating Dental Care Since 2020</span>
          </div>

          <h1 className="about-page-title">
            3D SMILE<br />SOLUTIONS
          </h1>
          
          <p className="about-page-subtitle">
            Revolutionizing dental practices with innovative automation solutions
          </p>

          <button 
            className="about-page-cta"
            onClick={scrollToDemo}
          >
            <span className="cta-text">REQUEST A FREE DEMO</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </section>

      {/* Introduction Section with Image */}
      <section className="about-intro-section" ref={introRef}>
        <div className="about-intro-container">
          <div className="about-intro-split">
            <div className="about-intro-image">
              <img src={aboutDen} alt="Dental Innovation" />
            </div>
            <div className="about-intro-content">
              <span className="about-section-label">WHO WE ARE</span>
              <h2 className="about-section-title">
                Leading the Future of<br />
                Dental Automation
              </h2>
              <div className="about-intro-text">
                <p>
                  3DSmileSolutions.ai offers innovative automation services designed specifically for dental businesses. By leveraging advanced technologies like AI and 3D printing, we streamline dental workflows, improve operational efficiency, and enhance patient care.
                </p>
                <p>
                  Our commitment to innovation and excellence drives us to deliver solutions that not only meet the current needs of dental practices but anticipate future challenges, ensuring our partners stay ahead in an ever-evolving industry.
                </p>
              </div>
              <button className="about-learn-more">
                LEARN MORE ABOUT US →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Feature Cards */}
      <section className="about-features-section">
        <div className="about-features-container">
          <h3 className="about-features-label">Why Choose 3D Smile Solutions?</h3>
          <div className="about-features-grid">
            <div className="about-feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Industry Expertise</h4>
              <p>Deep understanding of dental workflows with years of experience in implementing automation solutions that drive real results.</p>
            </div>
            <div className="about-feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Cutting-Edge Technology</h4>
              <p>Leveraging the latest in AI, machine learning, and 3D printing to create solutions that set new industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Large Image */}
      <section className="about-mission-vision-section" ref={missionVisionRef}>
        <div className="about-mv-container">
          <div className="about-mv-split">
            <div className="about-mv-text-content">
              <span className="about-section-label">OUR APPROACH</span>
              <h2 className="about-section-title">Comprehensive Automation Solutions</h2>
              <p className="about-mv-description">
                From workflow optimization and AI-powered diagnostics to 3D printing integration — we provide end-to-end automation solutions tailored to your practice's unique needs.
              </p>
              <div className="about-services-list">
                <div className="service-item active">AI-Powered Workflow Automation</div>
                <div className="service-item">3D Printing & Digital Dentistry</div>
                <div className="service-item">Practice Management Systems</div>
                <div className="service-item">Patient Experience Enhancement</div>
              </div>
            </div>
            <div className="about-mv-image">
              <img src={aboutAI} alt="Our Solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Card */}
      <section className="about-featured-service">
        <div className="about-featured-container">
          <div className="featured-service-image">
            <img src={Health} alt="AI Automation" />
          </div>
          <div className="featured-service-content">
            <span className="featured-label">MISSION & VISION</span>
            <h3 className="featured-title">
              <em>Revolutionizing</em> Dental Practices<br />
              Through Innovation
            </h3>
            <p className="featured-description">
              <strong>Our Mission:</strong> 3DSmileSolutions.ai aims to revolutionize dental practices by offering innovative automation solutions that enhance efficiency, streamline workflows, and improve patient care through AI and 3D printing.
            </p>
            <p className="featured-description">
              <strong>Our Vision:</strong> To be the leading provider of automation solutions in the dental industry, empowering practices globally to deliver exceptional care with advanced technologies.
            </p>
            <div className="featured-benefits">
              <div className="benefit-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Trusted by leading dental practices worldwide</span>
              </div>
            </div>
            <button className="featured-cta">
              DISCOVER OUR SOLUTIONS →
            </button>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values-section" ref={valuesRef}>
        <div className="about-values-container">
          <div className="about-values-header">
            <span className="about-section-label">OUR PRINCIPLES</span>
            <h2 className="about-section-title">
              What Drives Us Forward
            </h2>
          </div>

          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="value-card-bg"></div>
              <div className="about-value-number">01</div>
              <h4 className="about-value-title">Innovation</h4>
              <p className="about-value-text">
                Continuously pushing boundaries with cutting-edge AI and 3D printing technologies to redefine what's possible in dental care automation.
              </p>
            </div>

            <div className="about-value-card">
              <div className="value-card-bg"></div>
              <div className="about-value-number">02</div>
              <h4 className="about-value-title">Excellence</h4>
              <p className="about-value-text">
                Maintaining the highest standards in everything we do, from solution development to implementation and ongoing support for our dental partners.
              </p>
            </div>

            <div className="about-value-card">
              <div className="value-card-bg"></div>
              <div className="about-value-number">03</div>
              <h4 className="about-value-title">Efficiency</h4>
              <p className="about-value-text">
                Streamlining workflows and eliminating bottlenecks to help dental practices operate at peak performance and maximize productivity.
              </p>
            </div>

            <div className="about-value-card">
              <div className="value-card-bg"></div>
              <div className="about-value-number">04</div>
              <h4 className="about-value-title">Patient-Centric</h4>
              <p className="about-value-text">
                Every solution we create is designed with the end goal of improving patient experiences, outcomes, and satisfaction in dental care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="about-why-section" ref={whyRef}>
        <div className="about-why-container">
          <div className="about-why-content">
            <span className="about-section-label">WHY CHOOSE US</span>
            <h2 className="about-section-title">
              Expertise That Makes<br />a Difference
            </h2>
          </div>

          <div className="about-why-grid">
            <div className="about-why-item">
              <div className="stat-circle">
                <svg className="stat-progress" viewBox="0 0 120 120">
                  <circle className="stat-bg" cx="60" cy="60" r="54" />
                  <circle className="stat-fill" cx="60" cy="60" r="54" />
                </svg>
              </div>
              <div className="about-why-stat">{counters.practices}+</div>
              <p className="about-why-label">Dental Practices Transformed</p>
            </div>

            <div className="about-why-item">
              <div className="stat-circle">
                <svg className="stat-progress" viewBox="0 0 120 120">
                  <circle className="stat-bg" cx="60" cy="60" r="54" />
                  <circle className="stat-fill" cx="60" cy="60" r="54" />
                </svg>
              </div>
              <div className="about-why-stat">{counters.satisfaction}%</div>
              <p className="about-why-label">Client Satisfaction Rating</p>
            </div>

            <div className="about-why-item">
              <div className="stat-circle">
                <svg className="stat-progress" viewBox="0 0 120 120">
                  <circle className="stat-bg" cx="60" cy="60" r="54" />
                  <circle className="stat-fill" cx="60" cy="60" r="54" />
                </svg>
              </div>
              <div className="about-why-stat">{counters.efficiency}%</div>
              <p className="about-why-label">Average Workflow Efficiency Gain</p>
            </div>

            <div className="about-why-item">
              <div className="stat-circle">
                <svg className="stat-progress" viewBox="0 0 120 120">
                  <circle className="stat-bg" cx="60" cy="60" r="54" />
                  <circle className="stat-fill" cx="60" cy="60" r="54" />
                </svg>
              </div>
              <div className="about-why-stat">24/7</div>
              <p className="about-why-label">Technical Support & Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;