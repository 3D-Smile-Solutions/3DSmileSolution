import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
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

  // Manual navigation handlers
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Auto-rotate slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  // REACT-SWIPEABLE - Clean and simple!
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      goToNext();
    },
    onSwipedRight: () => {
      goToPrev();
    },
    preventScrollOnSwipe: false, // Allow vertical scrolling
    trackMouse: true, // Enable mouse dragging on desktop
    trackTouch: true, // Enable touch on mobile
    delta: 10, // Minimum distance for swipe detection (10px)
  });

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
          {/* Previous Button */}
          <button 
            className="testimonial-nav-button testimonial-nav-prev"
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Slider Content - Swipeable Area */}
          <div 
            {...swipeHandlers}
            className="testimonials-slider-wrapper"
          >
            <div className="testimonials-slider-track">
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
          </div>

          {/* Next Button */}
          <button 
            className="testimonial-nav-button testimonial-nav-next"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
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
    </section>
  );
};

export default Testimonial;