import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Discovery from './components/Discovery.jsx';
import CoreServices from './components/CoreServices.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';




// ------------------------------
// HOME PAGE COMPONENT
// ------------------------------
function HomePage() {
  React.useEffect(() => {
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

// ------------------------------
// MAIN APP COMPONENT
// ------------------------------
function App() {

  // Load theme
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // ------------------------------
  // FIX GSAP SCROLLTRIGGER ISSUES
  // ------------------------------
  React.useEffect(() => {
    // Import ScrollTrigger if not already available
    const initGSAP = async () => {
      try {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        const gsap = (await import('gsap')).default;

      } catch (error) {
        console.error('GSAP initialization error:', error);
      }
    };

    initGSAP();

    // Also refresh on resize and orientation change (especially important for mobile)
    const handleRefresh = () => {
      setTimeout(() => {
        if (window.ScrollTrigger) {
          window.ScrollTrigger.refresh(true);
        }
      }, 100);
    };

    window.addEventListener('resize', handleRefresh);
    window.addEventListener('orientationchange', handleRefresh);

    return () => {
      window.removeEventListener('resize', handleRefresh);
      window.removeEventListener('orientationchange', handleRefresh);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gtmstrategy" element={<GTMStrategy />} />
        <Route path="/aiautomation" element={<AIAutomation />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:caseId" element={<CaseStudies />} />
      </Routes>
    </Router>
  );
}

export default App;