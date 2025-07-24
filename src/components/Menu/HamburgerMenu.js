import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-container">
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <nav className="menu">
          <ul>
            <strong>
              <li>
                <Link to="expierence">Experience</Link>
              </li>
              <li>
                <Link to="projects">Projects</Link>
              </li>
            </strong>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
