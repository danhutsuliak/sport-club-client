import React from "react";

import "./news-block.styles.scss";

const NewsBlock = ({ image, title, text, date }) => (
  <div className="news-block">
    <img className="news-image" src={image} alt="Basketball Game" />
    <div className="news-content">
      <h3>{title}</h3>
      <div className="news-text">
        <p>{text}</p>
      </div>
      <div className="news-date">{date}</div>
    </div>
  </div>
);

export default NewsBlock;
