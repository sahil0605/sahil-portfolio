import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logoImage from "./logo.png";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/home">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      <div>
        {/* Mobile menu button */}
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation list */}
        <ul className={`list ${isMobileMenuOpen ? "show" : ""}`}>
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/experience" onClick={toggleMobileMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={toggleMobileMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleMobileMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
