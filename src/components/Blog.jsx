import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Blog.css';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const cardsRef = useRef([]);

  const blogPosts = [
    {
      id: 1,
      title: "AI in Dental Operations",
      description: "Discover how AI is transforming dental practices by automating...",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "GTM Strategies for Scaling Dental Practice",
      description: "Discover how AI is transforming dental practices by automating...",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Enviro-Intelligence",
      description: "Turning raw environmental data into actionable insight...",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop",
      link: "#"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the title while the cards scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${cardsWrapperRef.current.offsetHeight - titleRef.current.offsetHeight}`,
        pin: titleRef.current,
        pinSpacing: false,
        anticipatePin: 1
      });

      // Animate title on load
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Animate cards on scroll - slide in from right to left
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true
            },
            opacity: 0,
            x: 60,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power2.out'
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="blog-section" ref={sectionRef}>
      <div className="blog-container">
        {/* Left Side - Sticky Title */}
        <div className="blog-title-wrapper">
          <div className="blog-title-sticky" ref={titleRef}>
            <h2 className="blog-title">Blog</h2>
            <p className="blog-subtitle">
              Latest Insights on Dental AI & Market Strategy
            </p>
          </div>
        </div>

        {/* Right Side - Blog Cards */}
        <div className="blog-cards-wrapper" ref={cardsWrapperRef}>
          <div className="blog-cards">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="blog-card"
                ref={el => cardsRef.current[index] = el}
              >
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-description">{post.description}</p>
                  
                  <a href={post.link} className="blog-card-link">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;