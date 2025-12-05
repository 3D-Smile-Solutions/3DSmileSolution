import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Discovery from './components/Discovery.jsx';
import CoreServices from './components/CoreServices.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';

import GTMStrategy from './components/GTMStrategy.jsx';
import AIAutomation from './components/AIAutomation.jsx';
import Industries from './components/Industries.jsx';
import About from './components/About.jsx';
import BlogPage from './components/BlogPage.jsx';
import CaseStudies from './components/CaseStudies.jsx';

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
  // AUTO RELOAD + SCROLL RESTORE
  // ------------------------------
  React.useEffect(() => {
    // Save scroll before reload
    const saveScrollPos = () => {
      localStorage.setItem("scrollY", window.scrollY.toString());
    };

    // Restore scroll after reload
    const restoreScrollPos = () => {
      const savedY = localStorage.getItem("scrollY");
      if (savedY !== null) {
        window.scrollTo(0, parseFloat(savedY));
      }
    };

    // Restore immediately on load
    restoreScrollPos();

    // ---- ONE reload after 1–2 seconds ----
    const initialTimeout = setTimeout(() => {
      saveScrollPos();
      window.location.reload();
    }, Math.random() * 1000 + 1000); // 1–2 sec

    // ---- Then reload every 25 seconds ----
    const interval = setInterval(() => {
      saveScrollPos();
      window.location.reload();
    }, 25000); // 25,000 ms (25 seconds)

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
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
      </Routes>
    </Router>
  );
}

export default App;
