// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "./logo.png";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home">
          <img src={logoImage} alt="Logo" onClick={() => scrollToSection("home")} />
        </a>
      </div>
      
      {/* Your name section */}
      <div className="name-section">
        <p className="name">Sahil Singh Solanki</p>
      </div>

      <div className="mobile-menu">
        {/* Mobile menu toggler button */}
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation list */}
        <ul className={`list ${isMobileMenuOpen ? "show" : ""}`}>
          <li>
            <a href="#home" onClick={() => scrollToSection("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => scrollToSection("experience")}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => scrollToSection("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
