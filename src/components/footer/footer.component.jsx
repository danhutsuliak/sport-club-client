import React from "react";
import { Link } from "react-router-dom";

import "./footer.styles.scss";

const Footer = () => (
  <footer>
    <div className="wrapper">
      <small>
        &copy;2022 <strong>БК "Tigers"</strong>
      </small>
      <nav className="footer-nav">
        <Link to="/">Головна</Link>
        <Link to="about">Про нас</Link>
        <Link to="contacts">Контакти</Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
