import React, { useState, useEffect, useRef } from 'react';
import { FiCalendar, FiChevronDown } from 'react-icons/fi';
import Cal, { getCalApi } from "@calcom/embed-react";
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';
import NavLogo from '../assets/LogoD.png';

const Footer = () => {
  const calendarEmbedRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [calendarDimensions, setCalendarDimensions] = useState({
    width: '900px',
    height: '700px'
  });

  // Update calendar dimensions based on screen width
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      
      if (width >= 1400) {
        setCalendarDimensions({ width: '900px', height: '750px' });
      } else if (width >= 1200) {
        setCalendarDimensions({ width: '800px', height: '700px' });
      } else if (width >= 1024) {
        setCalendarDimensions({ width: '700px', height: '650px' });
      } else if (width >= 768) {
        setCalendarDimensions({ width: '95%', height: '600px' });
      } else if (width >= 600) {
        setCalendarDimensions({ width: '100%', height: '550px' });
      } else if (width >= 480) {
        setCalendarDimensions({ width: '100%', height: '500px' });
      } else {
        setCalendarDimensions({ width: '100%', height: '450px' });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Cal.com API initialization
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "omnident-discovery" });
      cal("ui", { 
        hideEventTypeDetails: false, 
        layout: "month_view",
        theme: "dark"
      });
      
      const style = document.createElement('style');
      style.textContent = `
        [class*="cal-"] a[href*="cal.com"] {
          background: #1a1a1a !important;
          color: #1a1a1a !important;
          opacity: 0.1 !important;
        }
        
        [class*="powered-by"],
        [class*="branding"],
        a[href*="cal.com/signup"],
        a[aria-label*="Cal.com"] {
          display: none !important;
        }
        
        .cal-embed[data-cal-namespace="omnident-discovery"] > div > div:last-child {
          background: #1a1a1a !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    })();
  }, []);

  // Handle scroll indicator visibility
  useEffect(() => {
    const calendarElement = calendarEmbedRef.current;
    
    if (!calendarElement) return;

    const handleScroll = () => {
      const scrollTop = calendarElement.scrollTop;
      const scrollHeight = calendarElement.scrollHeight;
      const clientHeight = calendarElement.clientHeight;
      
      if (scrollTop > 50 || scrollHeight <= clientHeight) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    const checkOverflow = () => {
      if (!calendarElement) return;
      const scrollHeight = calendarElement.scrollHeight;
      const clientHeight = calendarElement.clientHeight;
      setShowScrollIndicator(scrollHeight > clientHeight + 50);
    };

    const timeoutId = setTimeout(checkOverflow, 2500);
    calendarElement.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      if (calendarElement) {
        calendarElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      {/* Calendar Section */}
      <section className="calendar-section">
        <div className="calendar-container">
          <div className="calendar-header">
            <h2 className="calendar-title">
              Ready to Transform Your Practice?
            </h2>
            <p className="calendar-subtitle">
              See OmniDent.ai in action. Get a personalized demo and learn how we can revolutionize your patient experience.
            </p>
          </div>

          <div className="calendar-embed-wrapper">
            <div className="calendar-widget">
              <div 
                className="calendar-embed-container"
                ref={calendarEmbedRef}
                style={{ 
                  width: calendarDimensions.width, 
                  height: calendarDimensions.height, 
                  overflow: 'auto',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                <Cal 
                  namespace="omnident-discovery"
                  calLink="3dsmilesolutions/3dss-discovery"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{ 
                    layout: "month_view", 
                    theme: "dark" 
                  }}
                />
                {showScrollIndicator && (
                  <div className="scroll-indicator">
                    <FiChevronDown className="scroll-icon" />
                    <span>Scroll to see more dates</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-left">
            <div className="footer-brand">
              <img src={NavLogo} alt="3D Smile Solutions" className="footer-logo" />
              <p className="footer-tagline">
                Empowering Dental & Healthcare<br />
                Companies with Human-First AI Solutions
              </p>
            </div>
            
            <a href="https://cal.com/3dsmilesolutions/3dss-discovery" target="_blank" rel="noopener noreferrer">
              <button className="footer-cta-button">REQUEST A FREE DEMO</button>
            </a>
          </div>

          {/* Right Section - Navigation */}
          <div className="footer-right">
            <div className="footer-nav-group">
              <h4 className="footer-nav-title">MAIN PAGES</h4>
              <div className="footer-nav-links">
                <a href="#home" className="footer-nav-link">Home</a>
                <a href="#services" className="footer-nav-link">Our services</a>
                <a href="#industries" className="footer-nav-link">Industries</a>
              </div>
            </div>

            <div className="footer-nav-group">
              <h4 className="footer-nav-title">INNER PAGES</h4>
              <div className="footer-nav-links">
                <a href="#about" className="footer-nav-link">About</a>
                <a href="#contact" className="footer-nav-link">Contact</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© Copyright 3D Smile Solutions</p>
            
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaXTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;