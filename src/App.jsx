import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Discovery from './components/Discovery.jsx';
import CoreServices from './components/CoreServices.jsx';
import IndustriesHero from './components/IndustriesHero.jsx';
import Testimonial from './components/Testimonial.jsx';
import Blog from './components/Blog.jsx';
import Footer from './components/Footer.jsx';

function App() {
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
        <div id="blog" className="snap-section">
          <Blog />
        </div>
        <div id="footer" className="snap-section">
          <Footer />
        </div>
      </div>
      
    </div>
  )
}

export default App