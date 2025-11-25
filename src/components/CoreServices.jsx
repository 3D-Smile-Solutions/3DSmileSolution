import React, { useEffect, useRef } from 'react';
import './CoreServices.css';
import { HiArrowUpRight } from 'react-icons/hi2';

// Import your images - replace with actual image paths
import gtmImage from '../assets/Discover.jpg';
import aiImage from '../assets/Discover.jpg';

const CoreServices = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      id: 1,
      title: 'GTM Strategy Consulting',
      description: 'Tailored market research, competitor analysis, pricing strategy, and channel optimization.',
      features: [
        'Market Research',
        'Competitor Analysis',
        'Pricing Strategy & Channel Strategy'
      ],
      image: gtmImage,
      imagePosition: 'right'
    },
    {
      id: 2,
      title: 'AI Automation Solutions',
      description: 'AI-powered automation for dental and healthcare practices to enhance efficiency and growth.',
      features: [
        'Patient Management',
        'Automated Appointment Scheduling',
        'Workflow Optimization'
      ],
      image: aiImage,
      imagePosition: 'left'
    }
  ];

  // Intersection Observer for scroll animations (fallback for browsers without animation-timeline support)
  useEffect(() => {
    // Check if browser supports animation-timeline
    const supportsAnimationTimeline = CSS.supports('animation-timeline', 'view()');
    
    if (supportsAnimationTimeline) {
      // Browser supports CSS scroll animations, no JS needed
      return;
    }

    // Fallback: Use Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe title
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observe cards
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="core-services" ref={sectionRef}>
      <div className="core-services-container">
        {/* Section Title */}
        <h2 className="core-services-title" ref={titleRef}>Our Core Services</h2>

        {/* Service Cards */}
        <div className="services-list">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${service.imagePosition === 'left' ? 'image-left' : 'image-right'}`}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              {/* Content Side */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-bullet"></span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="learn-more-btn">
                  <span>LEARN MORE</span>
                  <HiArrowUpRight className="btn-icon" />
                </button>
              </div>

              {/* Image Side */}
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;