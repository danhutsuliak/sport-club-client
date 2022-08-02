import React, { useEffect } from "react";
import { useState } from "react";

import "./stats.styles.scss";

const Stats = () => {
  const [sortedBy, setSortedBy] = useState("name");
  const [stats, setStats] = useState(null);
  const [sortedStats, setSortedStats] = useState(stats);

  const handleSelect = (event) => {
    setSortedBy(event.target.value);
  };

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats);
      });

    switch (sortedBy) {
      case "name":
        setSortedStats(stats?.sort((a, b) => (a.name > b.name ? 1 : -1)));
        break;
      case "points":
        setSortedStats(stats?.sort((a, b) => b.points - a.points));
        break;
      case "avg":
        setSortedStats(
          stats?.sort(
            (a, b) => b.points / b.gamesPlayed - a.points / a.gamesPlayed
          )
        );
        break;
      case "games":
        setSortedStats(stats?.sort((a, b) => b.gamesPlayed - a.gamesPlayed));
        break;
      default:
        setSortedStats(stats?.sort((a, b) => a.id - b.id));
        break;
    }
  }, [stats, sortedBy]);

  return (
    <div className="stats">
      <h1>Статистика</h1>
      <label className="select-label">
        Сортувати за:{" "}
        <select value={sortedBy} onChange={handleSelect}>
          <option value="name">Ім'ям</option>
          <option value="points">Очками</option>
          <option value="games">Зіграними матчами</option>
          <option value="avg">Середньою кількістю очок за гру</option>
        </select>
      </label>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>ГРАВЕЦЬ</th>
            <th>ІГОР</th>
            <th>ОЧКИ</th>
            <th>СЕР.</th>
          </tr>
        </thead>
        <tbody>
          {sortedStats?.map((player) => {
            return (
              <tr key={player.id}>
                <td className="img">
                  <img src={player.image} alt={player.name} />
                </td>
                <td>{player.name}</td>
                <td>{player.gamesPlayed}</td>
                <td>{player.points}</td>
                <td>{(player.points / player.gamesPlayed).toFixed(1)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
