import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nav-menu.styles.scss";

const NavMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const clickLinkHandler = () => {
    setIsMenuActive(false);
  };

  return (
    <div className="nav-menu">
      <div
        className="btn"
        onClick={() => {
          setIsMenuActive(!isMenuActive);
        }}
      >
        <div className="btn__burger"></div>
      </div>

      <nav className={isMenuActive ? "active" : ""}>
        <Link to="/" onClick={clickLinkHandler}>
          Головна
        </Link>
        <Link to="/news" onClick={clickLinkHandler}>
          Новини
        </Link>
        <Link to="/stats" onClick={clickLinkHandler}>
          Статистика
        </Link>
        <Link to="/about" onClick={clickLinkHandler}>
          Про клуб
        </Link>
        <Link to="/contacts" onClick={clickLinkHandler}>
          Контакти
        </Link>
      </nav>
    </div>
  );
};

export default NavMenu;
