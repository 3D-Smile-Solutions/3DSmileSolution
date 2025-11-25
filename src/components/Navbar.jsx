import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import './Navbar.css';
import logo from '../assets/LogoD.png';  // Using only the light mode logo

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef(null);

    const navItems = [
        {
            id: 1,
            name: "Home",
            section: null,
        },
        {
            id: 2,
            name: "About",
            section: null,
        },
        {
            id: 3,
            name: "Services",
            section: null,
        },
        {
            id: 4,
            name: "Industries",
            section: null,
        },
        {
            id: 5,
            name: "Case Studies",
            section: null,
        },
        {
            id: 6,
            name: "Blog",
            section: null,
        },
        {
            id: 7,
            name: "Contact",
            section: null,
        },
    ];

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const controlNavbar = () => {
        const currentScrollY = window.scrollY;
        
        // Don't hide navbar if mobile menu is open
        if (isOpen) {
            setIsVisible(true);
            return;
        }

        // Set scrolled state for styling
        if (currentScrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Determine scroll direction and show/hide navbar
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            // Scrolling down & past 100px
            setIsVisible(false);
        } else {
            // Scrolling up or near top
            setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
    };

    const handleNavClick = (item) => {
        if (item.isExternal) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
            setIsOpen(false);
        } else if (item.section) {
            scrollToSection(item.section);
        }
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    // Lock/unlock body scroll when mobile menu opens/closes
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsVisible(true); // Always show navbar when menu is open
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle scroll events with debouncing
    useEffect(() => {
        const handleScroll = () => {
            // Clear the existing timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Set a new timeout for smooth scroll detection
            scrollTimeout.current = setTimeout(() => {
                controlNavbar();
            }, 10);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [isOpen]); // Add isOpen as dependency to ensure navbar stays visible when menu is open

    return (
        <div className={`navbar-wrapper ${!isVisible ? "navbar-hidden" : ""}`}>
            <div
                className={`navbar-container ${isScrolled ? "navbar-scrolled" : ""}`}
            >
                {/* Logo */}
                <div className="navbar-logo-section">
                    <button 
                        onClick={() => scrollToSection('home')} 
                        className="navbar-logo-button"
                        type="button"
                    >
                        <img src={logo} alt="OmniDent AI Logo"/>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="navbar-nav-desktop">
                    <ul className="navbar-nav-items">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button 
                                    onClick={() => handleNavClick(item)}
                                    className="navbar-nav-link"
                                    type="button"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Buttons */}
                <div className="navbar-cta-section">
                    <button 
                        className="navbar-cta-button"
                        onClick={() => scrollToSection('calendar')}
                        type="button"
                    >
                        REQUEST A FREE DEMO
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="navbar-mobile-toggle">
                    <button
                        onClick={toggleNavbar}
                        className="navbar-hamburger-button"
                        aria-label="Toggle menu"
                        type="button"
                    >
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`navbar-mobile-menu ${isOpen ? "navbar-mobile-menu-open" : ""}`}>
                <div className="navbar-mobile-header">
                    <button 
                        onClick={() => {
                            scrollToSection('home');
                            setIsOpen(false);
                        }} 
                        className="navbar-logo-button"
                        type="button"
                    >
                        <img src={logo} alt="OmniDent AI Logo"/>
                    </button>
                    <button
                        onClick={toggleNavbar}
                        className="navbar-mobile-close"
                        aria-label="Close menu"
                        type="button"
                    >
                        <IoMdClose size={28} />
                    </button>
                </div>

                <div className="navbar-mobile-divider"></div>

                <nav className="navbar-mobile-nav">
                    <ul className="navbar-mobile-items">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button 
                                    onClick={() => handleNavClick(item)}
                                    className="navbar-mobile-link"
                                    type="button"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar-mobile-buttons">
                        <button 
                            className="navbar-mobile-cta"
                            onClick={() => {
                                scrollToSection('calendar');
                                setIsOpen(false);
                            }}
                            type="button"
                        >
                            REQUEST A FREE DEMO
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Backdrop */}
            {isOpen && (
                <div 
                    className="navbar-mobile-backdrop"
                    onClick={toggleNavbar}
                ></div>
            )}
        </div>
    );
};

export default Navbar;