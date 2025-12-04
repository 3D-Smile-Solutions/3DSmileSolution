import React from 'react';
import InfiniteMenu from './InfiniteMenu';
import './CoreServices.css';

// Import your images - replace with actual image paths
import gtmImage from '../assets/GTM.jpg';
import aiImage from '../assets/AI.jpg';
import dentalImage from '../assets/Dental.jpg';
import healthcareImage from '../assets/Health.jpg';

const CoreServices = () => {
  const items = [
    {
      image: gtmImage,
      link: '/gtmstrategy',
      title: 'GTM Strategy Consulting',
      description: 'Tailored market research, competitor analysis, pricing strategy, and channel optimization.'
    },
    {
      image: aiImage,
      link: '/aiautomation',
      title: 'AI Automation Solutions',
      description: 'AI-powered automation for dental and healthcare practices to enhance efficiency and growth.'
    },
    {
      image: dentalImage,
      link: '/industries',
      title: 'Dental Industry',
      description: 'Focused content on AI and GTM benefits for small practices to enterprise-level dental chains.'
    },
    {
      image: healthcareImage,
      link: '/industries',
      title: 'Healthcare Industry',
      description: 'Explaining how AI and GTM strategies can solve common problems in healthcare operations.'
    }
  ];

  return (
    <section className="core-services">
      <div className="core-services-container">
        {/* Section Title */}
        <h2 className="core-services-title">Our Core Services & Industries</h2>

        {/* Infinite Menu with all items */}
        <div style={{ height: '600px', position: 'relative' }}>
          <InfiniteMenu items={items} />
        </div>
      </div>
    </section>
  );
};

export default CoreServices;