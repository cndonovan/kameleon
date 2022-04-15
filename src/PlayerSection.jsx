import React from "react";
import "./App.css";

const PlayerSection = ({ players }) => {
  return (
    <div>
      <h2
        style={{
          padding: "24px 0",
        }}
      >
        Players
      </h2>
      <div style={{ display: "flex" }}>
        {players.map((player) => (
          <div key={player.id} className="PlayerBadge">
            {player.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSection;
