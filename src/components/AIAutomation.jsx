import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import './AIAutomation.css';

// Import your images
import topographicBG from '../assets/RED.png';
import firstImage from '../assets/RED.png';
import secondImage from '../assets/Painting.png';
import thirdImage from '../assets/3.png';
import fourthImage from '../assets/4.png';

gsap.registerPlugin(ScrollTrigger, SplitText);

const AIAutomation = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const textRevealRef = useRef(null);
  const textRevealSectionRef = useRef(null);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  
  const [frontSlideIndex, setFrontSlideIndex] = useState(0);
  const [isSliderAnimating, setIsSliderAnimating] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);
  
  const wheelAccumulatorRef = useRef(0);
  const isWheelActiveRef = useRef(false);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const isTouchActiveRef = useRef(false);

  const slideData = [
    { 
      title: "Patient Management", 
      description: "Understanding trends and competitors to provide a solid foundation for your strategy.",
      image: firstImage 
    },
    { 
      title: "Pricing Strategy", 
      description: "Differentiating your practice or healthcare brand to resonate with your target market.",
      image: secondImage 
    },
    { 
      title: "Brand Positioning", 
      description: "Tailoring pricing models to ensure competitive pricing while maximizing revenue.",
      image: thirdImage
    },
    { 
      title: "Sales Enablement & Launch", 
      description: "Equipping your team with the right tools and strategies to launch effectively.",
      image: fourthImage 
    },
  ];

  const wheelThreshold = 100;
  const touchThreshold = 50;

  // Initialize hero animation
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

  // Initialize text reveal animation
  useEffect(() => {
    if (!textRevealRef.current || !textRevealSectionRef.current) return;

    const textElement = textRevealRef.current;
    const section = textRevealSectionRef.current;

    // Split text into words
    const split = new SplitText(textElement, { type: "words" });
    const words = split.words;

    // Set initial state - all words gray
    gsap.set(words, { 
      color: 'rgba(255, 255, 255, 0.15)',
      willChange: 'color'
    });

    // Create ScrollTrigger for pinning
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${words.length * 50}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      animation: gsap.to(words, {
        color: 'rgba(255, 255, 255, 1)',
        stagger: {
          each: 0.05,
          from: "start"
        },
        ease: "none"
      })
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Initialize slider
  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    
    // Clear existing slides
    slider.innerHTML = '';

    // Create initial slides
    slideData.forEach((data, index) => {
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.innerHTML = `
        <img src="${data.image}" alt="${data.title}" class="slide-image" />
        <div class="slide-content">
          <h1 class="slide-title">${data.title}</h1>
          <p class="slide-description">${data.description}</p>
        </div>
      `;
      slider.appendChild(slide);
    });

    const slides = slider.querySelectorAll(".slide");
    
    // Apply SplitText to titles
    slides.forEach((slide) => {
      const title = slide.querySelector(".slide-title");
      new SplitText(title, { type: "words", mask: "words" });
    });

    // Set initial positions
    slides.forEach((slide, i) => {
      gsap.set(slide, {
        y: -15 + 15 * i + "%",
        z: 15 * i,
        opacity: 1,
      });

      // Set initial description opacity
      const description = slide.querySelector(".slide-description");
      gsap.set(description, { opacity: i === 0 ? 1 : 0 });
    });

    // Set initial progress
    setSlideProgress((1 / slideData.length) * 100);
  }, []);

  // Handle scroll down
  const handleScrollDown = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.querySelectorAll(".slide");
    const firstSlide = slides[0];

    const newFrontIndex = (frontSlideIndex + 1) % slideData.length;
    setFrontSlideIndex(newFrontIndex);

    const progress = ((newFrontIndex + 1) / slideData.length) * 100;
    setSlideProgress(progress);

    const newBackIndex = (newFrontIndex + 3) % slideData.length;
    const nextSlideData = slideData[newBackIndex];

    const newSlide = document.createElement("div");
    newSlide.className = "slide";
    newSlide.innerHTML = `
      <img src="${nextSlideData.image}" alt="${nextSlideData.title}" class="slide-image" />
      <div class="slide-content">
        <h1 class="slide-title">${nextSlideData.title}</h1>
        <p class="slide-description">${nextSlideData.description}</p>
      </div>
    `;
    
    const newTitle = newSlide.querySelector(".slide-title");
    const newDescription = newSlide.querySelector(".slide-description");
    const newSplit = new SplitText(newTitle, { type: "words", mask: "words" });

    gsap.set(newSplit.words, {
      yPercent: 100,
    });

    gsap.set(newDescription, {
      opacity: 0,
      y: 20,
    });

    slider.appendChild(newSlide);

    gsap.set(newSlide, {
      y: -15 + 15 * 4 + "%",
      z: 15 * 4,
      opacity: 0,
    });

    const allSlides = slider.querySelectorAll(".slide");

    const currentSlide = slides[0];
    const currentDescription = currentSlide.querySelector(".slide-description");
    gsap.to(currentDescription, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
    });

    allSlides.forEach((slide, i) => {
      const targetPosition = i - 1;

      gsap.to(slide, {
        y: -15 + 15 * targetPosition + "%",
        z: 15 * targetPosition,
        opacity: targetPosition < 0 ? 0 : 1,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
          if (i === 0) {
            firstSlide.remove();
            setIsSliderAnimating(false);
          }
        },
      });
    });

    gsap.to(newSplit.words, {
      yPercent: 0,
      duration: 0.75,
      ease: "power4.out",
      stagger: 0.15,
      delay: 0.5,
    });

    gsap.to(newDescription, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.9,
    });
  };

  // Handle scroll up
  const handleScrollUp = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.querySelectorAll(".slide");
    const lastSlide = slides[slides.length - 1];

    const newFrontIndex = (frontSlideIndex - 1 + slideData.length) % slideData.length;
    setFrontSlideIndex(newFrontIndex);
    
    const progress = ((newFrontIndex + 1) / slideData.length) * 100;
    setSlideProgress(progress);
    
    const prevSlideData = slideData[newFrontIndex];

    const newSlide = document.createElement("div");
    newSlide.className = "slide";
    newSlide.innerHTML = `
      <img src="${prevSlideData.image}" alt="${prevSlideData.title}" class="slide-image" />
      <div class="slide-content">
        <h1 class="slide-title">${prevSlideData.title}</h1>
        <p class="slide-description">${prevSlideData.description}</p>
      </div>
    `;
    
    const newTitle = newSlide.querySelector(".slide-title");
    const newDescription = newSlide.querySelector(".slide-description");
    new SplitText(newTitle, { type: "words", mask: "words" });

    gsap.set(newDescription, {
      opacity: 0,
      y: 20,
    });

    slider.prepend(newSlide);

    gsap.set(newSlide, {
      y: -15 + 15 * -1 + "%",
      z: 15 * -1,
      opacity: 0,
    });

    const currentSlide = slides[0];
    const currentDescription = currentSlide.querySelector(".slide-description");
    gsap.to(currentDescription, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
    });

    const slideQueue = Array.from(slider.querySelectorAll(".slide"));

    slideQueue.forEach((slide, i) => {
      const targetPosition = i;

      gsap.to(slide, {
        y: -15 + 15 * targetPosition + "%",
        z: 15 * targetPosition,
        opacity: targetPosition > 3 ? 0 : 1,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
          if (i === slideQueue.length - 1) {
            lastSlide.remove();
            setIsSliderAnimating(false);
          }
        },
      });
    });

    gsap.to(newDescription, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.6,
    });
  };

  // Handle slide change
  const handleSlideChange = (direction = "down") => {
    if (isSliderAnimating) return;
    setIsSliderAnimating(true);

    if (direction === "down") {
      handleScrollDown();
    } else {
      handleScrollUp();
    }
  };

  // Wheel event handler
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isSliderAnimating || isWheelActiveRef.current) return;
      
      wheelAccumulatorRef.current += Math.abs(e.deltaY);

      if (wheelAccumulatorRef.current >= wheelThreshold) {
        isWheelActiveRef.current = true;
        wheelAccumulatorRef.current = 0;

        const direction = e.deltaY > 0 ? "down" : "up";
        handleSlideChange(direction);

        setTimeout(() => {
          isWheelActiveRef.current = false;
        }, 1200);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  });

  // Touch event handlers
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      if (isSliderAnimating || isTouchActiveRef.current) return;
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    const handleTouchEnd = (e) => {
      if (isSliderAnimating || isTouchActiveRef.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartRef.current.y - touchEndY;
      const deltaX = touchStartRef.current.x - touchEndX;

      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > touchThreshold) {
        isTouchActiveRef.current = true;

        const direction = deltaY > 0 ? "down" : "up";
        handleSlideChange(direction);

        setTimeout(() => {
          isTouchActiveRef.current = false;
        }, 1200);
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  });

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isSliderAnimating) return;

      if (e.key === "ArrowDown" || e.key === "Down") {
        e.preventDefault();
        handleSlideChange("down");
      } else if (e.key === "ArrowUp" || e.key === "Up") {
        e.preventDefault();
        handleSlideChange("up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const scrollToDemo = () => {
    window.open('https://cal.com/your-calendar', '_blank');
  };

  return (
    <div className="ai-automation-page">
      <Navbar />

      {/* Hero Section */}
      <section className="ai-hero-section" ref={heroRef}>
        <div className="ai-hero-bg">
          <img src={topographicBG} alt="" />
          <div className="ai-hero-overlay"></div>
        </div>

        <div className="ai-hero-content" ref={contentRef}>
          <h1 className="ai-hero-title">
            Transform Your Practice with AI-Powered Automation Solutions
          </h1>
          
          <p className="ai-hero-subtitle">
            Automate key processes like scheduling, patient management, and billing, allowing you to focus on providing excellent care.
          </p>
        </div>
      </section>

      {/* Text Reveal Section - Pinned */}
      <section className="text-reveal-section" ref={textRevealSectionRef}>
        <div className="text-reveal-container">
          <p className="text-reveal" ref={textRevealRef}>
            Our AI-powered automation solutions enhance daily operations for dental and healthcare teams by reducing manual tasks and improving overall efficiency. From scheduling to patient management, our systems integrate seamlessly with existing workflows, enabling providers to focus more on delivering quality care.
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="ai-content-section">
        <div className="container" ref={containerRef}>
          <div className="slider" ref={sliderRef}></div>

          <div className="slider-nav-hint">
            <div className="nav-hint-text">Scroll to Navigate</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;