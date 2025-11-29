import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Discovery from './components/Discovery.jsx';
import CoreServices from './components/CoreServices.jsx';
import IndustriesHero from './components/IndustriesHero.jsx';
import Testimonial from './components/Testimonial.jsx';
import Blog from './components/Blog.jsx';
import Footer from './components/Footer.jsx';

// Import new page components
import GTMStrategy from './components/GTMStrategy.jsx';
import AIAutomation from './components/AIAutomation.jsx';
import Industries from './components/Industries.jsx';
import About from './components/About.jsx';
import BlogPage from './components/BlogPage.jsx';
import CaseStudies from './components/CaseStudies.jsx';

// HomePage component - your current homepage
function HomePage() {
  // Fix for iOS viewport height issue
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
        <div id="industries" className="snap-section">
          <IndustriesHero />
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
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Service Pages */}
        <Route path="/gtmstrategy" element={<GTMStrategy />} />
        <Route path="/aiautomation" element={<AIAutomation />} />
        
        {/* Other Pages */}
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
    </Router>
  )
}

export default App