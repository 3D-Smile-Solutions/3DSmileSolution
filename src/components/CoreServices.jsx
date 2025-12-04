import React, { useMemo } from 'react';
import CircularGallery from './CircularGallery';
import './CoreServices.css';

// Import your images - replace with actual image paths
import gtmImage from '../assets/GTM.jpg';
import aiImage from '../assets/AI.jpg';
import dentalImage from '../assets/Dental.jpg';
import healthcareImage from '../assets/Health.jpg';

const CoreServices = React.memo(() => {
  // Format items for CircularGallery with descriptions
  const items = useMemo(() => [
    {
      image: gtmImage,
      text: 'GTM Strategy Consulting',
      description: 'Tailored market research, competitor analysis, pricing strategy, and channel optimization to ensure your products reach the right audience with maximum impact.'
    },
    {
      image: aiImage,
      text: 'AI Automation Solutions',
      description: 'AI-powered automation for dental and healthcare practices to enhance efficiency and growth through cutting-edge technology and seamless integration.'
    },
    {
      image: dentalImage,
      text: 'Dental Industry',
      description: 'Focused content on AI and GTM benefits for small practices to enterprise-level dental chains, streamlining operations and improving patient care.'
    },
    {
      image: healthcareImage,
      text: 'Healthcare Industry',
      description: 'Explaining how AI and GTM strategies can solve common problems in healthcare operations, enhancing workflow automation and patient data management.'
    }
  ], []);

  return (
    <section className="core-services">
      <div className="core-services-container">
        {/* Section Title */}
        <h2 className="core-services-title">Our Core Services & Industries</h2>

        {/* Circular Gallery */}
        <div style={{ 
          height: '600px', 
          position: 'relative',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}>
          <CircularGallery 
            items={items}
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
});

CoreServices.displayName = 'CoreServices';

export default CoreServices;