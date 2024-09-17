import React from "react";
import { useState } from "react";

const Navbar = ({ animate }) => {
  return (
    <nav
      className={`main__nav-bar ${animate == 1 ? "animate grow " : "shrink"}  `}
    >
      <div className="main__logo-box pop-up ">
        <img src="/logo/logo-1.webp" alt="logo" className="img" />
      </div>
      <div className="nav-link rev">
        <div className="contact-box">Contact &rarr;</div>
      </div>
    </nav>
  );
};

export default Navbar;
