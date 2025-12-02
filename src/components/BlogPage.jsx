import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './BlogPage.css';

gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  const blogPosts = [
    {
      id: 1,
      title: "AI in Dental Operations",
      description: "Discover how AI is transforming dental practices by automating routine tasks, enhancing patient care, and optimizing operational efficiency.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
      category: "AI & Technology",
      date: "November 2024",
      readTime: "5 min read",
      link: "#"
    },
    {
      id: 2,
      title: "GTM Strategies for Scaling Dental Practice",
      description: "Learn proven go-to-market strategies that successful dental practices use to scale their operations and increase patient acquisition.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
      category: "Growth Strategy",
      date: "November 2024",
      readTime: "7 min read",
      link: "#"
    },
    {
      id: 3,
      title: "Enviro-Intelligence",
      description: "Turning raw environmental data into actionable insights for sustainable dental practice management and operational excellence.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop",
      category: "Innovation",
      date: "October 2024",
      readTime: "6 min read",
      link: "#"
    },
    {
      id: 4,
      title: "Patient Experience Optimization",
      description: "Explore cutting-edge techniques for enhancing patient satisfaction through digital transformation and personalized care pathways.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
      category: "Patient Care",
      date: "October 2024",
      readTime: "5 min read",
      link: "#"
    },
    {
      id: 5,
      title: "Revenue Cycle Management Excellence",
      description: "Master the art of revenue optimization with data-driven strategies and automated workflows for dental practices.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Operations",
      date: "September 2024",
      readTime: "8 min read",
      link: "#"
    },
    {
      id: 6,
      title: "The Future of Teledentistry",
      description: "Understanding how virtual care is reshaping dental consultations and expanding access to quality dental services.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      category: "Digital Health",
      date: "September 2024",
      readTime: "6 min read",
      link: "#"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero section
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out'
      });

      // Animate blog cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out'
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="blog-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="blog-page-hero" ref={heroRef}>
        <div className="blog-page-hero-content">
          <h1 className="blog-page-title">Insights & Resources</h1>
          <p className="blog-page-subtitle">
            Expert perspectives on dental AI, market strategy, and operational excellence
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="blog-page-content">
        <div className="blog-page-container">
          <div className="blog-page-grid">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="blog-page-card"
                ref={el => cardsRef.current[index] = el}
                onClick={() => navigate(post.link)}
              >
                <div className="blog-page-card-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-page-card-category">{post.category}</div>
                </div>
                
                <div className="blog-page-card-content">
                  <div className="blog-page-card-meta">
                    <span className="blog-page-card-date">{post.date}</span>
                    <span className="blog-page-card-separator">•</span>
                    <span className="blog-page-card-time">{post.readTime}</span>
                  </div>
                  
                  <h3 className="blog-page-card-title">{post.title}</h3>
                  <p className="blog-page-card-description">{post.description}</p>
                  
                  <button className="blog-page-card-link">
                    Read Article
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;