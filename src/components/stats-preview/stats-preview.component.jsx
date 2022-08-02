import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PlayerBlock from "../player-block/player-block.component";

import "./stats-preview.styles.scss";

const StatsPreview = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats);
      });
  }, []);

  return (
    <div className="stats-preview">
      <h2>
        <Link to="/stats">Найкращі гравці</Link>
      </h2>

      <div className="stats-wrapper">
        {stats
          ?.filter((p) => p.id <= 4)
          .map((p) => {
            return (
              <PlayerBlock
                key={p.id}
                image={p.image}
                name={p.name}
                points={p.points}
                games={p.gamesPlayed}
              />
            );
          })}
      </div>
    </div>
  );
};

export default StatsPreview;
