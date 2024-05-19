import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const useGame = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [boardState, setBoardState] = useState({});
  const [currentTurn, setCurrentTurn] = useState("white");
  const [gameStatus, setGameStatus] = useState("ongoing");
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [playerColor, setPlayerColor] = useState(null);
  const [gameMode, setGameMode] = useState(null);

  return (
    <GameContext.Provider
      value={{
        boardState,
        setBoardState,
        currentTurn,
        setCurrentTurn,
        gameStatus,
        setGameStatus,
        selectedSquare,
        setSelectedSquare,
        validMoves,
        setValidMoves,
        playerColor,
        setPlayerColor,
        gameMode,
        setGameMode,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext };