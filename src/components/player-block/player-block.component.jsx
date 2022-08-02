import React from "react";

import "./player-block.styles.scss";

const PlayerBlock = ({ image, name, points, games }) => {
  return (
    <div className="player-block">
      <img className="player-image" src={image} alt="Basketball Game" />
      <div className="player-content">
        <h3>{name}</h3>
        <div className="player">
          <p>
            Очки: {points} Ігри: {games}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerBlock;
