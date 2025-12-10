import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonial.css";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      text: "SplNX team members are responsive, innovative...",
      author: "Brianna Miller",
      title: "Assistant Global Director of Marketing",
      image:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop",
    },
    {
      text: "In just 3 months, our bookings grew 60%...",
      author: "Dr. Sarah Martinez",
      title: "Martinez Family Dentistry",
      image:
        "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=600&fit=crop",
    },
    {
      text: "This has been our best investment...",
      author: "Dr. James Wilson",
      title: "Wilson Orthodontics",
      image:
        "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=600&fit=crop",
    },
    {
      text: "The SMS and chat integration feels natural...",
      author: "Dr. Michael Chen",
      title: "Smile Bright Dental",
      image:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop",
    },
  ];

  // Navigation
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    pauseAutoplay();
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    pauseAutoplay();
  };

  const pauseAutoplay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Auto slider
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Swiping
  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    preventScrollOnSwipe: false,
    trackMouse: true,
    trackTouch: true,
    delta: 10,
  });

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(sliderRef.current, {
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
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
          {/* Prev button */}
          <button
            className="testimonial-nav-button testimonial-nav-prev"
            onClick={goToPrev}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          {/* SWIPE TRACK */}
          <div className="testimonials-slider-wrapper">
            <div
              {...swipeHandlers}
              className="testimonials-slider-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.6s ease",
              }}
            >
              {testimonials.map((t, index) => {
                const isActive = index === currentIndex;
                const isPrev =
                  index ===
                  (currentIndex - 1 + testimonials.length) %
                    testimonials.length;
                const isNext =
                  index === (currentIndex + 1) % testimonials.length;

                return (
                  <div
                    key={index}
                    className={`testimonial-item ${
                      isActive ? "active" : ""
                    } ${isPrev ? "prev" : ""} ${
                      isNext ? "next" : ""
                    }`}
                  >
                    <div className="testimonial-content">
                      {/* Image */}
                      <div className="testimonial-image">
                        <img
                          src={t.image}
                          alt={t.author}
                          draggable="false"
                        />
                        <div className="testimonial-image-overlay"></div>
                      </div>

                      {/* Text */}
                      <div className="testimonial-text">
                        <p className="testimonial-quote">
                          "{t.text}"
                        </p>

                        <div className="testimonial-author">
                          <h4 className="testimonial-author-name">
                            {t.author}
                          </h4>
                          <p className="testimonial-author-title">
                            {t.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next button */}
          <button
            className="testimonial-nav-button testimonial-nav-next"
            onClick={goToNext}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => {
                setCurrentIndex(index);
                pauseAutoplay();
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
