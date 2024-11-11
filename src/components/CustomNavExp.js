/*
npm install bootstrap bootstrap-icons
npm install --save react-bootstrap bootstrap@4
*/
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const CustomNav = ({ li, handleClick }) => {
  const [window] = useState(false);

  return (
    <nav className="navbar-menu" style={{ width: window === false ? 320 : 60 }}>
      <ul className="navbar__list">
        {li.map((item, i) => (
          <div
            className="navbar__li-box"
            key={i}
            onClick={() => handleClick(item[0].toLowerCase())}
          >
            <li
              className="navbar__li"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </li>
          </div>
        ))}
      </ul>
      <div class="nav-footer-icons">
        <a href="https://github.com/HerndonE" target="_blank" rel="noreferrer">
          <i class="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ethan-herndon/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
    </nav>
  );
};

export default CustomNav;
