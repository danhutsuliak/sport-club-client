import React from "react";

import "./landing.styles.scss";
import { ReactComponent as ArrowDown } from "../../assets/down-arrow.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = () => (
  <div className="landing">
    <div className="bg-image"></div>

    <div className="title-text">
      <h1>
        Баскетбольний клуб <span>"Tigers"</span>
      </h1>
    </div>

    <AnchorLink offset="100" href="#news-preview" className="arrow-down">
      <ArrowDown />
    </AnchorLink>
  </div>
);

export default Landing;
