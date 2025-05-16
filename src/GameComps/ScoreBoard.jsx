import React from "react";
import "./Game.css";
import RestartBtn from "./RestartBtn";
import { useGame } from "../Context/GameContext";
export default function ScoreBoard() {
  const { score } = useGame();
  return (
    <div className="scoreboard">
      <p>Score:{score}</p>
      <RestartBtn />
    </div>
  );
}
