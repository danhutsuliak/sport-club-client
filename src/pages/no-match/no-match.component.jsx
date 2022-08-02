import React from "react";
import { Link } from "react-router-dom";

import "./no-match.styles.scss";

const NoMatch = () => (
  <div className="no-match">
    <h1>404</h1>
    <h2>Сторінку не знайдено.</h2>
    <h2>
      <Link to="/">На головну</Link>
    </h2>
  </div>
);

export default NoMatch;
