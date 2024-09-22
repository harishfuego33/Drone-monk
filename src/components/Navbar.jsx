import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ animate }) => {
  return (
    <nav
      className={`main__nav-bar ${animate == 1 ? "animate grow " : "shrink"}  `}
    >
      <NavLink to="/" className="main__logo-box pop-up ">
        <img src="/logo/logo-1.webp" alt="logo" className="img" />
      </NavLink>
      <NavLink to="contact" className="nav-link rev">
        <div className="contact-box">Contact &rarr;</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
