import React from "react";
import "./GameOver.css";

const GameOver = ({ restartGame }) => {
  return (
    <div>
      <h1>GameOver</h1>

      <button onClick={restartGame}>Renicie o Jogo</button>
    </div>
  );
};

export default GameOver;
