import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CoreServices.css';

gsap.registerPlugin(ScrollTrigger);

const CoreServices = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const trackRef = useRef(null);

  const services = [
    {
      id: 1,
      category: 'Core Services',
      title: 'GTM Strategy Consulting',
      tagline: 'Discreet market positioning and strategic execution',
      description: 'Comprehensive go-to-market strategies tailored for dental and healthcare technology companies—delivered with complete confidentiality.',
      features: [
        'Market research and competitive analysis',
        'Target market identification and segmentation',
        'Pricing strategy development',
        'Channel strategy and partner ecosystem design',
        'Sales process optimization',
        'Revenue operations infrastructure setup'
      ],
      accent: 'blue'
    },
    {
      id: 2,
      category: 'Core Services',
      title: 'AI Automation Solutions',
      tagline: 'Invisible technology, visible results',
      description: 'Cutting-edge AI-powered automation seamlessly integrated into your operations—your competitive advantage remains yours alone.',
      features: [
        'AI-powered phone and chat systems',
        'Automated patient scheduling and reminders',
        'Intelligent lead qualification and routing',
        'Multi-channel communication automation',
        'CRM integration and workflow automation',
        'Real-time analytics and reporting dashboards'
      ],
      accent: 'green'
    },
    {
      id: 3,
      category: 'Industries We Serve',
      title: 'Dental Technology Companies',
      tagline: 'Behind every breakthrough, a strategic partner',
      description: 'Specialized support for dental tech innovators—we help you scale while protecting your proprietary advantages.',
      features: [
        'Product-market fit validation',
        'Commercialization strategy and execution',
        'Sales team enablement and training',
        'Partner channel development',
        'Customer success program design',
        'Revenue forecasting and pipeline management'
      ],
      accent: 'purple'
    },
    {
      id: 4,
      category: 'Industries We Serve',
      title: 'Dental Service Organizations',
      tagline: 'Operational excellence, maintained in confidence',
      description: 'End-to-end growth strategies for multi-location practices—we work behind the scenes so you stay in the spotlight.',
      features: [
        'Revenue operations optimization',
        'Patient acquisition and retention strategies',
        'Multi-location standardization and scaling',
        'Technology stack evaluation and implementation',
        'Performance metrics and KPI tracking',
        'Staff training and operational efficiency programs'
      ],
      accent: 'orange'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop (768px+)
      mm.add("(min-width: 768px)", () => {
        // Header animation
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: 1
            }
          }
        );

        const track = trackRef.current;
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = trackWidth - viewportWidth + 150;

        gsap.to(track, {
          x: -scrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
      });

      // Mobile (below 768px) - horizontal scroll
      mm.add("(max-width: 767px)", () => {
        const track = trackRef.current;
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = trackWidth - viewportWidth + 40;

        gsap.to(track, {
          x: -scrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="core-services-horizontal" ref={sectionRef}>
      {/* Header */}
      <div className="cs-fixed-header" ref={headerRef}>
        <h2 className="cs-main-title">What We Offer</h2>
        <p className="cs-subtitle">
          White-glove consulting and technology solutions—delivered with ironclad confidentiality
        </p>
      </div>

      {/* Horizontal scroll container - this is what moves */}
      <div className="cs-cards-wrapper" ref={trackRef}>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`cs-card accent-${service.accent}`}
          >
            <div className="cs-card-inner">
              <div className="cs-card-header">
                <span className="cs-category">/ {service.category}</span>
                <h3 className="cs-title">{service.title}</h3>
                <p className="cs-tagline">{service.tagline}</p>
                <p className="cs-description">{service.description}</p>
              </div>

              <div className="cs-card-body">
                <ul className="cs-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="cs-feature-item">
                      <span className="cs-feature-icon">→</span>
                      <span className="cs-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs-accent-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreServices;