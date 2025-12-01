import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import Footer from './Footer';
import './About.css';

import aboutBG from '../assets/Hero.jpg';

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

      // Mission & Vision cards with stagger
      gsap.from('.about-mv-card', {
        scrollTrigger: {
          trigger: missionVisionRef.current,
          start: 'top 75%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 80,
        scale: 0.9,
        duration: 0.9,
        stagger: 0.2,
        ease: 'back.out(1.2)'
      });

      // Values section - reveal animation
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
        rotateX: -15,
        duration: 0.8,
        stagger: {
          amount: 0.4,
          from: 'start'
        },
        ease: 'power3.out'
      });

      // Why choose us - stats counter animation
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
    // Animate practices counter
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

    // Animate satisfaction counter
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

    // Animate efficiency counter
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

        <div className="about-floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>

        <div className="about-page-content" ref={contentRef}>
          <div className="about-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Innovating Dental Care Since 2020</span>
          </div>

          <h1 className="about-page-title">
            Transforming Dental Care<br />Through Innovation
          </h1>
          
          <p className="about-page-subtitle">
            Empowering dental practices worldwide with cutting-edge AI automation and 3D printing solutions that enhance efficiency, streamline workflows, and elevate patient care.
          </p>

          <button 
            className="about-page-cta"
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

      {/* Introduction Section */}
      <section className="about-intro-section" ref={introRef}>
        <div className="about-intro-container">
          <div className="about-intro-content">
            <span className="about-section-label">WHO WE ARE</span>
            <h2 className="about-section-title">
              Leading the Future of<br />Dental Automation
            </h2>
            <div className="about-intro-text">
              <p>
                3D Smile Solutions offers innovative automation services designed specifically for dental businesses. By leveraging advanced technologies like AI and 3D printing, we streamline dental workflows, improve operational efficiency, and enhance patient care.
              </p>
              <p>
                Our commitment to innovation and excellence drives us to deliver solutions that not only meet the current needs of dental practices but anticipate future challenges, ensuring our partners stay ahead in an ever-evolving industry.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative line divider */}
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-vision-section" ref={missionVisionRef}>
        <div className="about-mv-container">
          <div className="about-mv-card">
            <div className="card-glow"></div>
            <div className="about-mv-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="about-mv-title">Our Mission</h3>
            <p className="about-mv-text">
              To revolutionize dental practices by offering innovative automation solutions that enhance efficiency, streamline workflows, and improve patient care through AI and 3D printing.
            </p>
            <div className="card-corner corner-tl"></div>
            <div className="card-corner corner-br"></div>
          </div>

          <div className="about-mv-card">
            <div className="card-glow"></div>
            <div className="about-mv-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="about-mv-title">Our Vision</h3>
            <p className="about-mv-text">
              To be the leading provider of automation solutions in the dental industry, empowering practices globally to deliver exceptional care with advanced technologies.
            </p>
            <div className="card-corner corner-tl"></div>
            <div className="card-corner corner-br"></div>
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
                Continuously pushing boundaries with cutting-edge AI and 3D printing technologies to redefine what's possible in dental care.
              </p>
            </div>

            <div className="about-value-card">
              <div className="value-card-bg"></div>
              <div className="about-value-number">02</div>
              <h4 className="about-value-title">Reliability</h4>
              <p className="about-value-text">
                Delivering consistent, dependable solutions that dental practices can trust to enhance their daily operations.
              </p>
            </div>

            <div className="about-value-card">
              <div className="value-card-bg"></div>
              <div className="about-value-number">03</div>
              <h4 className="about-value-title">Excellence</h4>
              <p className="about-value-text">
                Maintaining the highest standards in everything we do, from product development to customer support.
              </p>
            </div>

            <div className="about-value-card">
              <div className="value-card-bg"></div>
              <div className="about-value-number">04</div>
              <h4 className="about-value-title">Patient-First</h4>
              <p className="about-value-text">
                Focusing on solutions that ultimately improve patient experiences and outcomes in dental care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              <p className="about-why-label">Dental Practices Served</p>
            </div>

            <div className="about-why-item">
              <div className="stat-circle">
                <svg className="stat-progress" viewBox="0 0 120 120">
                  <circle className="stat-bg" cx="60" cy="60" r="54" />
                  <circle className="stat-fill" cx="60" cy="60" r="54" />
                </svg>
              </div>
              <div className="about-why-stat">{counters.satisfaction}%</div>
              <p className="about-why-label">Client Satisfaction Rate</p>
            </div>

            <div className="about-why-item">
              <div className="stat-circle">
                <svg className="stat-progress" viewBox="0 0 120 120">
                  <circle className="stat-bg" cx="60" cy="60" r="54" />
                  <circle className="stat-fill" cx="60" cy="60" r="54" />
                </svg>
              </div>
              <div className="about-why-stat">{counters.efficiency}%</div>
              <p className="about-why-label">Average Efficiency Improvement</p>
            </div>

            <div className="about-why-item">
              <div className="stat-circle">
                <svg className="stat-progress" viewBox="0 0 120 120">
                  <circle className="stat-bg" cx="60" cy="60" r="54" />
                  <circle className="stat-fill" cx="60" cy="60" r="54" />
                </svg>
              </div>
              <div className="about-why-stat">24/7</div>
              <p className="about-why-label">Dedicated Support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;