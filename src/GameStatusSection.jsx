import React from "react";
import "./App.css";

const GAME_STARTED_COPY = "Game is in progress";
const GAME_NOT_STARTED_COPY = "Game has not been started";

const GameStatusSection = ({ isStarted }) => {
  return (
    <div style={{ display: "flex", alignItems: "end" }}>
      {isStarted ? (
        <button>End game</button>
      ) : (
        <>
          <button>Join game</button>
          <button>Start game</button>
        </>
      )}
    </div>
  );
};

export default GameStatusSection;
