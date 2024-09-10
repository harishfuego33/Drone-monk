// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const submitNavigate = () => {
    navigate("/contact", {
      state: {
        drone: "Dji Matrix series 300RTK",
        service: "Battery maintenance",
      },
    });
  };
  return (
    <nav className="main__nav-bar">
      <div className="main__logo-box">
        <img src="../public/logo/logo-1.webp" alt="logo" className="img" />
      </div>
      <div className="nav-link" onClick={submitNavigate}>
        <div className="contact-box">Contact &rarr;</div>
      </div>
    </nav>
  );
};

export default Navbar;
