import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let start = null;

    const ease = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const timeElapsed = timestamp - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const run = startPosition + distance * ease(progress);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };


  return (
    <nav className="navbar">
      {/* Status button */}
      <div className="status-button">
        <span className="status-dot" />
        <a onClick={() => smoothScrollTo("contact")}><span>Open for work</span></a>
      </div>

      {/* Desktop nav links */}
      <ul className="nav-links desktop-links">
        <li>
          <a onClick={() => smoothScrollTo("about")}>About me</a>
        </li>
        <li>
          <a onClick={() => smoothScrollTo("projects")}>Projects</a>
        </li>
        <li>
          <a onClick={() => smoothScrollTo("services")}>Services</a>
        </li>
        <li>
          <a onClick={() => smoothScrollTo("contact")}>Contact</a>
        </li>
        
      </ul>

      {/* Hamburger icon */}
      <div
        className={`menu-icon ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Mobile menu overlay */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
      <a onClick={() => {
        smoothScrollTo("about");
        setMenuOpen(false);
      }}>About me</a>
    </li>
    <li>
      <a onClick={() => {
        smoothScrollTo("projects");
        setMenuOpen(false);
      }}>Projects</a>
    </li>
    <li>
      <a onClick={() => {
        smoothScrollTo("services");
        setMenuOpen(false);
      }}>Services</a>
    </li>
    <li>
      <a onClick={() => {
        smoothScrollTo("contact");
        setMenuOpen(false);
      }}>Contact</a>
    </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
