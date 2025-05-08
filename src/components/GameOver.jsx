import React from "react";
import "./GameOver.css";

const GameOver = ({ restartGame, score }) => {
  return (
    <div>
      <h1>Fim de jogo</h1>

      <h2>
        A Sua pontuação foi: <span>{score}</span>
      </h2>

      <button onClick={restartGame}>Renicie o Jogo</button>
    </div>
  );
};

export default GameOver;
