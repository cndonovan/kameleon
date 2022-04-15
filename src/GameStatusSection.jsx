import React from "react";
import "./App.css";

const GAME_STARTED_COPY = "Game is in progress";
const GAME_NOT_STARTED_COPY = "Game has not been started";

const GameStatusSection = ({ isStarted }) => {
  return (
    <div style={{ display: "flex", alignItems: "end" }}>
      {isStarted ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "8px" }}>{GAME_STARTED_COPY}... </span>
          <button>End game</button>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "8px" }}>
            {GAME_NOT_STARTED_COPY}...{" "}
          </span>
          <button>Start game</button>
        </div>
      )}
    </div>
  );
};

export default GameStatusSection;
