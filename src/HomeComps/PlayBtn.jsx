import "./Welcome.css";
import { useGame } from "../Context/GameContext";

export default function PlayBtn() {
  const { toggleGameStarted, setScore } = useGame();
  const handleClick = () => {
    toggleGameStarted();
    setScore(0);
  };
  return <button onClick={handleClick}>Play</button>;
}
