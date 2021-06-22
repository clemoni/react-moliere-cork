import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__items">
        <li className="navbar__item">
          <Link smooth to="#home" className="navbar__link">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="#info" className="navbar__link">
            What
          </Link>
        </li>
        <li>
          <Link smooth to="#contact" className="navbar__link">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/member" className="navbar__link">
            Member
          </Link>
        </li>
      </ul>
    </nav>
  );
};
