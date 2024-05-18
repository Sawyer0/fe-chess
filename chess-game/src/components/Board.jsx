import { useEffect, useState } from "react";
import "../styles/board.css";
import Square from "./Square";
import { initializeBoardState } from "../utils/utils";
import { getValidMoves } from "../utils/chessRules";

const Board = ({ playerColor, gameStarted }) => {
  const [boardState, setBoardState] = useState(() =>
    initializeBoardState(playerColor)
  );
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);

  useEffect(() => {
    if (playerColor) {
      setBoardState(initializeBoardState(playerColor));
    }
  }, [playerColor]);

  const handleSquareClick = (position) => {
    if (selectedSquare) {
      if (validMoves.includes(position)) {
        const updatedBoardState = { ...boardState };
        updatedBoardState[position] = updatedBoardState[selectedSquare];
        delete updatedBoardState[selectedSquare];
        setBoardState(updatedBoardState);
        setSelectedSquare(null);
        setValidMoves([]);
      } else {
        setSelectedSquare(null);
        setValidMoves([]);
      }
    } else {
      if (boardState[position]) {
        const piece = boardState[position];
        setSelectedSquare(position);
        setValidMoves(getValidMoves(piece, position, boardState));
      }
    }
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 1; row <= 8; row++) {
      for (let col = 0; col < 8; col++) {
        const position = `${String.fromCharCode(97 + col)}${row}`;
        const piece = boardState[position];
        const color = (row + col) % 2 === 0 ? "light" : "dark";
        const highlight = validMoves.includes(position) ? "highlight" : "";
        board.push(
          <Square
            key={position}
            position={position}
            color={color}
            piece={piece}
            highlight={highlight}
            gameStarted={gameStarted}
            playerColor={playerColor}
            onClick={() => handleSquareClick(position)}
          />
        );
      }
    }
    return board;
  };

  return (
    <div className="container">
      <div className="board">{renderBoard()}</div>
    </div>
  );
};

export default Board;
