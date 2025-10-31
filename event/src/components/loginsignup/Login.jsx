import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Event Platform</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* 👇 Add your Login and Sign Up buttons here */}
        <li>
          <Link to="/login" className="nav-btn login-btn">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="nav-btn signup-btn">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
