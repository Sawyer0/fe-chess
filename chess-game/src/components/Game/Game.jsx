import { useState, useContext, useEffect } from "react";
import Board from "../Board/Board";
import { GameContext } from "../../context/GameContext";
import { initializeBoardState } from "../../utils/boardUtils";

const Game = () => {
  const {
    setBoardState,
    setCurrentTurn,
    setGameStatus,
    playerColor,
    setPlayerColor,
    gameMode,
    setGameMode,
  } = useContext(GameContext);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      setBoardState(initializeBoardState(playerColor));
      setCurrentTurn("white");
      setGameStatus("ongoing");
    }
  }, [gameStarted, playerColor, setBoardState, setCurrentTurn, setGameStatus]);

  const handlePlayerColorChange = (color) => {
    setPlayerColor(color);
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
  };

  const startGame = () => {
    if (playerColor && gameMode) {
      setGameStarted(true);
    } else {
      alert("Please select both color and game mode to start the game.");
    }
  };

  if (!gameStarted) {
    return (
      <div className="parent-container">
        <h1>Chess Game Setup</h1>
        <div className="color-selection">
          <h2>Select Your Color</h2>
          <button onClick={() => handlePlayerColorChange("white")}>
            White
          </button>
          <button onClick={() => handlePlayerColorChange("black")}>
            Black
          </button>
        </div>
        <div className="game-mode-selection">
          <h2>Select Your Game Mode</h2>
          <button onClick={() => handleGameModeChange("PvP")}>
            Player v Player
          </button>
          <button onClick={() => handleGameModeChange("PvAI")}>
            Player v AI
          </button>
          <button onClick={() => handleGameModeChange("AIvAI")}>AI v AI</button>
        </div>
        {playerColor && gameMode && (
          <button className="start-game-button" onClick={startGame}>
            Start Game
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="game-container">
      <Board />
    </div>
  );
};

export default Game;
