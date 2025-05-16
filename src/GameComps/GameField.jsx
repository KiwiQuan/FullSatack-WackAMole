import React from "react";
import "./Game.css";
import { useGame } from "../Context/GameContext";
export default function GameField() {
  const { field } = useGame();
  // function to render li elements with paremeters that control the number of the holes.
  // default is a 3x3 grid
  // one random hole will have the mole

  return (
    <ul className="field">
      {field.map((hasMole, i) => (
        <Hole key={i} hasMole={hasMole} />
      ))}
    </ul>
  );
}

function Hole({ hasMole }) {
  const { whack } = useGame();
  if (hasMole) return <li onClick={whack} className="hole mole"></li>;
  return <li className="hole"></li>;
}
