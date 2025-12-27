import React from 'react';
import './IndustriesHero.css';
import { HiArrowUpRight } from 'react-icons/hi2';



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