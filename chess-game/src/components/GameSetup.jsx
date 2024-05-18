import { useState } from "react";
import Board from "./Board";

const GameSetup = () => {
  const [playerColor, setPlayerColor] = useState(null);
  const [gameMode, setGameMode] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);


  const handlePlayerColorChange = (color) => {
    setPlayerColor(color);
  };

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
  };

  const startGame = () => {
    if (playerColor && gameMode) {
      setGameStarted(true);
      console.log("Starting game...");
    } else {
      alert("Please select both color and game mode to start the game.");
    }
  };

  return (
    <div className="parent-container">
      {!gameStarted && (
        <>
          <h1>Chess Game Setup</h1>
  
          <div className="color-selection">
            <h2>Select Your Color</h2>
            <button onClick={() => handlePlayerColorChange("white")}>White</button>
            <button onClick={() => handlePlayerColorChange("black")}>Black</button>
          </div>
  
          <div className="game-mode-selection">
            <h2>Select Your Game Mode</h2>
            <button onClick={() => handleGameModeChange("PvP")}>Player v Player</button>
            <button onClick={() => handleGameModeChange("PvAI")}>Player v AI</button>
            <button onClick={() => handleGameModeChange("AIvAI")}>AI v AI</button>
          </div>
  
          {playerColor && gameMode && (
            <button className="start-game-button" onClick={startGame}>
              Start Game
            </button>
          )}
        </>
      )}
  
      {gameStarted && <Board playerColor={playerColor} gameMode={gameMode} gameStarted={gameStarted}/>}
      
    </div>
  );
};

export default GameSetup;
