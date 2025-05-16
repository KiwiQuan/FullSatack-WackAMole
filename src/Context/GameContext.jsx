import { createContext, useContext, useState } from "react";

const GameContext = createContext();
const NUM_HOLES = 9;

export function GameProvider({ children }) {
  const [field, setField] = useState(makeField());
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const toggleGameStarted = () => setGameStarted(!gameStarted);
  const whack = () => {
    setField(makeField(field));
    setScore(score + 1);
  };

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        whack,
        field,

        gameStarted,

        toggleGameStarted,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within a GameProvider");
  return context;
}

function makeField(field = []) {
  const newField = Array(NUM_HOLES).fill(false);
  let mole = Math.floor(Math.random() * NUM_HOLES);

  while (field[mole]) {
    mole = Math.floor(Math.random() * NUM_HOLES);
  }

  newField[mole] = true;
  return newField;
}
