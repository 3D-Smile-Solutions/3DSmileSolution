import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// GSAP Provider - wrap the entire app
import { GSAPProvider } from './components/GSAPProvider.jsx';

// Components
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Discovery from './components/Discovery.jsx';
import CoreServices from './components/CoreServices.jsx';
import IndustriesHero from './components/IndustriesHero.jsx';
import Testimonial from './components/Testimonial.jsx';
import Blog from './components/Blog.jsx';
import Footer from './components/Footer.jsx';

// Page components
import GTMStrategy from './components/GTMStrategy.jsx';
import AIAutomation from './components/AIAutomation.jsx';
import Industries from './components/Industries.jsx';
import About from './components/About.jsx';
import BlogPage from './components/BlogPage.jsx';
import CaseStudies from './components/CaseStudies.jsx';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// HomePage component
function HomePage() {
  React.useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // iOS viewport height fix
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  return (
    <div className="app dark-mode">
      <Navbar />
      <Hero />
      
      <div className="main-content-wrapper">
        <div id="discovery" className="snap-section">
          <Discovery />
        </div>
        <div id="core-services" className="snap-section">
          <CoreServices />
        </div>
        <div id="testimonials" className="snap-section">
          <Testimonial />
        </div>
        <div id="footer" className="snap-section">
          <Footer />
        </div>
      </div>
    </div>
  );
}

// Main App component with routing
function App() {
  // ============================================
  // CRITICAL: Android/Mobile ScrollTrigger Fix
  // ============================================
  useEffect(() => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isMobile = window.innerWidth < 1000;

    // Check if this is the first load (not a refresh)
    const hasRefreshed = sessionStorage.getItem('hasAutoRefreshed');
    
    // Function to refresh ScrollTrigger
    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    // Disable smooth scroll ONLY on Android - iOS needs it
    if (isAndroid) {
      document.documentElement.style.scrollBehavior = 'auto';
    }

    // Wait for everything to load
    const initApp = () => {
      if (document.readyState === 'complete') {
        // Page already loaded
        if (isAndroid) {
          // Android needs extra time for layout to settle
          setTimeout(refreshScrollTrigger, 200);
          setTimeout(refreshScrollTrigger, 500);
          setTimeout(refreshScrollTrigger, 1000);
        } else if (isIOS || isMobile) {
          // iOS needs less aggressive refresh
          setTimeout(refreshScrollTrigger, 100);
          setTimeout(refreshScrollTrigger, 300);
        } else {
          // Desktop
          setTimeout(refreshScrollTrigger, 100);
        }
        
        // Auto refresh ONLY for Android (not iOS!)
        if (isAndroid && !hasRefreshed) {
          setTimeout(() => {
            sessionStorage.setItem('hasAutoRefreshed', 'true');
            window.location.reload();
          }, 1000);
        }
      } else {
        // Wait for load event
        window.addEventListener('load', () => {
          if (isAndroid) {
            setTimeout(refreshScrollTrigger, 200);
            setTimeout(refreshScrollTrigger, 500);
            setTimeout(refreshScrollTrigger, 1000);
          } else if (isIOS || isMobile) {
            setTimeout(refreshScrollTrigger, 100);
            setTimeout(refreshScrollTrigger, 300);
          } else {
            setTimeout(refreshScrollTrigger, 100);
          }
          
          // Auto refresh ONLY for Android
          if (isAndroid && !hasRefreshed) {
            setTimeout(() => {
              sessionStorage.setItem('hasAutoRefreshed', 'true');
              window.location.reload();
            }, 1000);
          }
        }, { once: true });
      }
    };

    initApp();

    // Handle resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };
    window.addEventListener('resize', handleResize);

    // Handle orientation change (important for mobile)
    const handleOrientation = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };
    window.addEventListener('orientationchange', handleOrientation);

    // Custom scrollbar styling
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: ${isAndroid ? 'auto' : 'smooth'};
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
      }
      
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.5);
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientation);
      clearTimeout(resizeTimer);
      document.head.removeChild(style);
    };
  }, []);

  // Theme initialization (existing code)
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <GSAPProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />
          
          {/* Service Pages */}
          <Route path="/gtmstrategy" element={<GTMStrategy />} />
          <Route path="/aiautomation" element={<AIAutomation />} />
          
          {/* Other Pages */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </Router>
    </GSAPProvider>
  )
}

export default App