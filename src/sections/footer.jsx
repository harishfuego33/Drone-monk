import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="service__footer">
      <NavLink to="/" className="footer__logo-box">
        <img src="/logo/logo-1.webp" alt="logo" className="img" />
      </NavLink>
      <div className="footer__contact">
        <h1 className="footer__h1">Flying in Mediation</h1>
        <hr />
        <p className="footer__p1">
          &copy;copyright 2024 by Pepadverts.All rights deserve to pepadverts
        </p>
      </div>
    </footer>
  );
};
export default Footer;
