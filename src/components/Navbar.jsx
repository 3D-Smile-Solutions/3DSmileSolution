import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HiChevronDown } from "react-icons/hi2";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import './Navbar.css';
import logoDark from '../assets/LogoD.png';
import logoLight from '../assets/Logo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'dark';
    });
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef(null);
    const dropdownTimeoutRef = useRef(null);

    const currentLogo = theme === 'dark' ? logoDark : logoLight;

    const serviceOptions = [
        {
            id: 'gtm',
            title: 'GTM Strategy Consulting:',
            description: 'Tailored market research, competitor analysis, pricing strategy, and channel optimization.',
            route: '/gtmstrategy'
        },
        {
            id: 'ai',
            title: 'AI Automation Solutions:',
            description: 'AI-powered automation for dental and healthcare practices to enhance efficiency and growth.',
            route: '/aiautomation'
        }
    ];

    const navItems = [
        { id: 1, name: "Home", section: null, route: '/' },
        { id: 2, name: "About", section: null, route: '/about' },
        { id: 3, name: "Services", section: null, hasDropdown: true },
        { id: 4, name: "Industries", section: null, route: '/industries' },
        { id: 5, name: "Case Studies", section: null, route: '/case-studies' },
        { id: 6, name: "Blog", section: null, route: '/blog' },
        { id: 7, name: "Contact", section: 'footer', scrollToFooter: true },
    ];

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        setServicesDropdownOpen(false);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        window.dispatchEvent(new Event('themeChange'));
    };

    const controlNavbar = () => {
        const currentScrollY = window.scrollY;
        
        if (isOpen) {
            setIsVisible(true);
            return;
        }

        if (currentScrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsVisible(false);
            setServicesDropdownOpen(false);
        } else {
            setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
    };

    const handleNavClick = (item) => {
        if (item.hasDropdown) {
            return;
        }
        
        if (item.scrollToFooter) {
            if (location.pathname === '/') {
                scrollToSection('footer');
            } else {
                navigate('/');
                setTimeout(() => {
                    scrollToSection('footer');
                }, 100);
            }
            setIsOpen(false);
            return;
        }
        
        if (item.route) {
            navigate(item.route);
            setIsOpen(false);
            return;
        }
        
        if (item.isExternal) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
            setIsOpen(false);
        } else if (item.section) {
            scrollToSection(item.section);
        }
    };

    const handleServiceClick = (route) => {
        navigate(route);
        setServicesDropdownOpen(false);
        setIsOpen(false);
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const handleMouseEnter = () => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setServicesDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setServicesDropdownOpen(false);
        }, 200);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // SIMPLE scroll locking - matches working navbar
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsVisible(true);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

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
    }, [isOpen]);

    useEffect(() => {
        return () => {
            if (dropdownTimeoutRef.current) {
                clearTimeout(dropdownTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className={`navbar-wrapper ${!isVisible ? "navbar-hidden" : ""}`}>
            <div
                className={`navbar-container ${isScrolled ? "navbar-scrolled" : ""}`}
            >
                {/* Logo */}
                <div className="navbar-logo-section">
                    <button 
                        onClick={handleLogoClick} 
                        className="navbar-logo-button"
                        type="button"
                    >
                        <img src={currentLogo} alt="3D Smile Solutions Logo"/>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="navbar-nav-desktop">
                    <ul className="navbar-nav-items">
                        {navItems.map((item) => (
                            <li 
                                key={item.id}
                                className={item.hasDropdown ? "navbar-dropdown-wrapper" : ""}
                                onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                                onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                            >
                                <button 
                                    onClick={() => handleNavClick(item)}
                                    className={`navbar-nav-link ${item.hasDropdown ? 'has-dropdown' : ''}`}
                                    type="button"
                                >
                                    {item.name}
                                    {item.hasDropdown && (
                                        <HiChevronDown 
                                            className={`dropdown-icon ${servicesDropdownOpen ? 'open' : ''}`}
                                        />
                                    )}
                                </button>

                                {/* Dropdown Menu */}
                                {item.hasDropdown && (
                                    <div className={`services-dropdown ${servicesDropdownOpen ? 'open' : ''}`}>
                                        {serviceOptions.map((service) => (
                                            <button
                                                key={service.id}
                                                className="service-dropdown-item"
                                                onClick={() => handleServiceClick(service.route)}
                                                type="button"
                                            >
                                                <h4 className="service-title">{service.title}</h4>
                                                <p className="service-description">{service.description}</p>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop Buttons */}
                <div className="navbar-cta-section">
                    <button 
                        onClick={toggleTheme}
                        className="navbar-theme-toggle"
                        aria-label="Toggle theme"
                        type="button"
                    >
                        {theme === 'dark' ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                    </button>
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
                            handleLogoClick();
                            setIsOpen(false);
                        }} 
                        className="navbar-logo-button"
                        type="button"
                    >
                        <img src={currentLogo} alt="3D Smile Solutions Logo"/>
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
                                {item.hasDropdown ? (
                                    <div className="mobile-dropdown">
                                        <button
                                            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                            className="navbar-mobile-link has-dropdown"
                                            type="button"
                                        >
                                            {item.name}
                                            <HiChevronDown 
                                                className={`dropdown-icon ${servicesDropdownOpen ? 'open' : ''}`}
                                            />
                                        </button>
                                        {servicesDropdownOpen && (
                                            <div className="mobile-services-dropdown">
                                                {serviceOptions.map((service) => (
                                                    <button
                                                        key={service.id}
                                                        className="mobile-service-item"
                                                        onClick={() => handleServiceClick(service.route)}
                                                        type="button"
                                                    >
                                                        <h4 className="mobile-service-title">{service.title}</h4>
                                                        <p className="mobile-service-description">{service.description}</p>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <button 
                                        onClick={() => handleNavClick(item)}
                                        className="navbar-mobile-link"
                                        type="button"
                                    >
                                        {item.name}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="navbar-mobile-buttons">
                        <button 
                            onClick={toggleTheme}
                            className="navbar-mobile-theme-toggle"
                            aria-label="Toggle theme"
                            type="button"
                        >
                            {theme === 'dark' ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
                            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>
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