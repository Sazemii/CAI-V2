'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  // Close mobile menu on window resize if screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 863 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="heading">
        <div className="heading-logo">
          <Image
            src="/CAI_logo.svg"
            alt="CAI Logo"
            width={250}
            height={45}
            priority
          />
        </div>

        <div className="heading-nav">
          <div className="heading-services" onClick={() => scrollToSection('services')}>
            <span>Services</span>
          </div>
          <div className="heading-company" onClick={() => scrollToSection('how-different')}>
            <span>Company</span>
          </div>
          <div className="heading-contact" onClick={() => scrollToSection('contact')}>
            <span>Contact</span>
          </div>
        </div>

        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
      
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-item" onClick={() => scrollToSection('services')}>Services</div>
        <div className="mobile-nav-item" onClick={() => scrollToSection('how-different')}>Company</div>
        <div className="mobile-nav-item" onClick={() => scrollToSection('contact')}>Contact</div>
      </div>
    </>
  );
};

export default Header;