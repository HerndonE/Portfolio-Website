/*
npm install bootstrap bootstrap-icons
npm install --save react-bootstrap bootstrap@4
*/
import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const CustomNav = ({ li, handleClick  }) => {
  const [window] = useState(false);

  /*
  const [window, setWindow] = useState(false);
  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
    */

  return (
    <nav className="navbar-menu" style={{ width: window === false ? 300 : 60 }}>
      <h1>Ethan Herndon</h1><br />
      <h3>Software Engineer</h3><br />
      <p>Developing quality new codebases, programs, and full-stack applications from the ground up.</p>
      {/* 
      <div className="burger" onClick={() => openClose()}>
        <img src="img/menu.svg" alt="burger" />
      </div>
      */}
      <ul className="navbar__list">
        {li.map((item, i) => (
          <div className="navbar__li-box" key={i} onClick={() => handleClick(item[0].toLowerCase())}>
            <img
              src={item[1]}
              alt={item[1]}
              style={{ paddingLeft: window === false ? 27 : 17 }}
            />
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
        <a href="https://github.com/HerndonE" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
        <a href="https://www.linkedin.com/in/ethan-herndon/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
      </div>
    </nav>
  );
};

export default CustomNav;
