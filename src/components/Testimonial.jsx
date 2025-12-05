import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonial.css';

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  
  // Touch/Swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const testimonials = [
    {
      text: "SplNX team members are responsive, innovative, problem-solvers and a pleasure to work with day in and day out. They are at the top of their industry.",
      author: "Brianna Miller",
      title: "Assistant Global Director of Marketing",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop",
    },
    {
      text: "In just 3 months, our bookings grew 60%. Patients get answers instantly, and my staff finally has breathing room instead of being stuck on the phone.",
      author: "Dr. Sarah Martinez",
      title: "Martinez Family Dentistry",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=600&fit=crop",
    },
    {
      text: "This has been our best investment. Patient satisfaction is higher, staff stress is lower, and we're booking 3x more consultations than before.",
      author: "Dr. James Wilson",
      title: "Wilson Orthodontics",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=600&fit=crop",
    },
    {
      text: "The SMS and chat integration feels natural. Patients now book while browsing our site, and our no-shows dropped by 40% since reminders go out automatically.",
      author: "Dr. Michael Chen",
      title: "Smile Bright Dental",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop",
    }
  ];

  // Auto-rotate slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  // Touch/Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - go next
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        // Swiped right - go prev
        setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
      }
    }
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
    isDragging.current = true;
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
      }
    }
    
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          once: true
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from(sliderRef.current, {
        scrollTrigger: {
          trigger: sliderRef.current,
          start: 'top 85%',
          once: true
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header" ref={titleRef}>
          <h2 className="testimonials-title">Testimonials</h2>
          <p className="testimonials-subtitle">
            Proven Success with Leading Dental and Healthcare Brands
          </p>
        </div>

        {/* Slider */}
        <div className="testimonials-slider" ref={sliderRef}>
          {/* Navigation Arrow - Previous */}
          <button 
            className="testimonial-arrow testimonial-arrow-prev" 
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Slider Content */}
          <div 
            className="testimonials-slider-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className="testimonials-slider-track" ref={trackRef}>
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length;
                const isNext = index === (currentIndex + 1) % testimonials.length;
                const isVisible = isActive || isPrev || isNext;

                return (
                  <div 
                    key={index} 
                    className={`testimonial-item ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                    style={{
                      opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                      transform: `translateX(${(index - currentIndex) * 100}%) scale(${isActive ? 1 : 0.85})`,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    <div className="testimonial-content">
                      {/* Image Section */}
                      <div className="testimonial-image">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          draggable="false"
                        />
                        <div className="testimonial-image-overlay"></div>
                      </div>

                      {/* Text Section */}
                      <div className="testimonial-text">
                        <p className="testimonial-quote">
                          "{testimonial.text}"
                        </p>

                        <div className="testimonial-author">
                          <h4 className="testimonial-author-name">{testimonial.author}</h4>
                          <p className="testimonial-author-title">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Dot indicators for mobile */}
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrow - Next */}
          <button 
            className="testimonial-arrow testimonial-arrow-next" 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;