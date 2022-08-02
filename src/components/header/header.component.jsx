import React from "react";
import NavMenu from "../nav-menu/nav-menu.component";

import "./header.styles.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <NavMenu />
    </div>
  );
};

export default Header;
