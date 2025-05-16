import "./Game.css";
import { useGame } from "../Context/GameContext";

export default function RestartBtn() {
  const { toggleGameStarted } = useGame();
  const handleClick = () => toggleGameStarted();
  return <button onClick={handleClick}>Restart</button>;
}
