import React from 'react';
import './CoreServices.css';
import { HiArrowUpRight } from 'react-icons/hi2';

// Import your images - replace with actual paths
import dentalImage from '../assets/Dental.jpg';
import healthcareImage from '../assets/Health.jpg';

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
  const industries = [
    {
      id: 1,
      icon: <ToothIcon />,
      title: 'Dental Industry',
      description: 'Focused content on AI and GTM benefits for small practices to enterprise-level dental chains.',
      features: [
        'Practice Management Automation',
        'Patient Engagement Solutions',
        'Revenue Optimization Strategies'
      ],
      image: dentalImage,
      imagePosition: 'right',
      link: '/industries'
    },
    {
      id: 2,
      icon: <HealthcareIcon />,
      title: 'Healthcare Industry',
      description: 'Explaining how AI and GTM strategies can solve common problems in healthcare operations.',
      features: [
        'Workflow Automation',
        'Patient Data Management',
        'Operational Excellence'
      ],
      image: healthcareImage,
      imagePosition: 'left',
      link: '/industries'
    }
  ];

  return (
    <section className="core-services">
      <div className="core-services-container">
        {/* Section Title */}
        <h2 className="core-services-title">Industries We Serve</h2>
        {/* Industry Cards */}
        <div className="services-list">
          {industries.map((industry) => (
            <div 
              key={industry.id} 
              className={`service-card ${industry.imagePosition === 'left' ? 'image-left' : 'image-right'}`}
            >
              {/* Content Side */}
              <div className="service-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    minWidth: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(181, 205, 178, 0.1)',
                    border: '1px solid rgba(181, 205, 178, 0.2)',
                    borderRadius: '10px',
                    color: '#B5CDB2',
                    transition: 'all 0.3s ease'
                  }}>
                    {industry.icon}
                  </div>
                  <h3 className="service-title" style={{ margin: 0 }}>{industry.title}</h3>
                </div>
                
                <p className="service-description">{industry.description}</p>
                
                <ul className="service-features">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-bullet"></span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={industry.link} className="learn-more-btn">
                  <span>Learn More</span>
                  <HiArrowUpRight className="btn-icon" />
                </a>
              </div>

              {/* Image Side */}
              <div className="service-image">
                <img src={industry.image} alt={industry.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;