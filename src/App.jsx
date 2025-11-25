import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Discovery from './components/Discovery.jsx';
import CoreServices from './components/CoreServices.jsx';
import IndustriesHero from './components/IndustriesHero.jsx';

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
      </div>
    </div>
  )
}

export default App