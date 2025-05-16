import Welcome from "./HomeComps/Welcome";
import HighScores from "./HomeComps/HighScores";
import ScoreBoard from "./GameComps/ScoreBoard";
import GameField from "./GameComps/GameField";
import { useGame } from "./Context/GameContext";
export default function App() {
  const { gameStarted } = useGame();
  return (
    <>
      <h1>Whack a Mole</h1>
      {gameStarted ? (
        <>
          <ScoreBoard />
          <GameField />
        </>
      ) : (
        <>
          <Welcome />
        </>
      )}
    </>
  );
}
