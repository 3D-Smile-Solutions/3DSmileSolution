import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

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