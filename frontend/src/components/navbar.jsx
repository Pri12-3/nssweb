import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa"; 
import './navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <ul className={`navbar-items ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#">About</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Members</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaArrowLeft size={20} />
        ) : (
          <AiOutlineBars size={20} /> 
        )}
      </div>
      <div className="profile">
        <a href="#" ><FaUserCircle size={40} color="#fff"/></a>
      </div>
    </nav>
  );
};

export default Navbar;