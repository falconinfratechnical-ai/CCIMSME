import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Header.css";
import logo from "../assets/CCIMSME-logo.jpg";

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setAboutOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setAboutOpen(false);
      closeTimerRef.current = null;
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img  src={logo} alt="Chamber Logo" className="logo" />
          <h3 className="logo-tagline">
            New Impetus for Industrial Growth in Kerala
          </h3>
        </div>
      </div>

      <nav className="navbar">
        <Link to="/">WELCOME</Link>

        <div
          className="nav-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          

          {aboutOpen && (
            <div className="dropdown-menu">
              <Link to="/about#auditoriums">AUDITORIUMS</Link>
              <Link to="/about#forums">FORUMS</Link>
              <Link to="/about#former-presidents">FORMER PRESIDENTS</Link>
            </div>
          )}
        </div>
        <Link to="/Vision" className="nav-link">
            VISION
          </Link>
<Link to="/about" className="nav-link">
            ABOUT US
          </Link>
          
        <Link to="/activity">OUR ACTIVITIES</Link>
        <Link to="/gallery">GALLERY</Link>
        
        <Link to="/contact">CONTACT US</Link>
        <Link to="/membership" className="highlight">
          MemberShip 👑
        </Link>
      </nav>

      <div className="header-right"></div>
    </header>
  );
};

export default Header;