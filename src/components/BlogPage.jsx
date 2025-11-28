import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import './BlogPage.css';

import blogBG from '../assets/Discover.jpg'; // Replace with actual path

gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="blog-page">
      <Navbar />

      <section className="blog-page-hero" ref={heroRef}>
        <div className="blog-page-bg">
          <img src={blogBG} alt="" />
          <div className="blog-page-overlay"></div>
        </div>

        <div className="blog-page-content" ref={contentRef}>
          <h1 className="blog-page-title">
            Blog & Insights
          </h1>
          
          <p className="blog-page-subtitle">
            Latest insights on Dental AI, healthcare automation, and go-to-market strategies to help your practice thrive.
          </p>

          <button 
            className="blog-page-cta"
            onClick={scrollToDemo}
          >
            REQUEST A FREE DEMO
          </button>
        </div>
      </section>

      <section className="blog-page-content-section">
        <div className="blog-page-wrapper">
          <h2>Recent Articles</h2>
          <p>Explore our latest insights on AI automation, market strategies, and industry trends.</p>
          
          <div className="blog-posts-grid">
            {/* Blog posts will go here */}
            <p>Blog posts coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
