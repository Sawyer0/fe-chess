import { useContext } from "react";
import Square from "./Square";
import { GameContext } from "../../context/GameContext";
import { getValidMoves, isCheck, isCheckmate } from "../../utils/chessRules";

const Board = () => {
  const {
    boardState,
    setBoardState,
    currentTurn,
    setCurrentTurn,
    selectedSquare,
    setSelectedSquare,
    validMoves,
    setValidMoves,
    setGameStatus,
  } = useContext(GameContext);

  const handleSquareClick = (position) => {
    if (selectedSquare) {
      if (validMoves.includes(position)) {
        const updatedBoardState = { ...boardState };
        updatedBoardState[position] = updatedBoardState[selectedSquare];
        delete updatedBoardState[selectedSquare];
        setBoardState(updatedBoardState);
        if (isCheckmate(updatedBoardState, currentTurn)) {
          setGameStatus("checkmate");
        } else if (isCheck(updatedBoardState, currentTurn)) {
          setGameStatus("check");
        } else {
          setGameStatus("ongoing");
        }
        setSelectedSquare(null);
        setValidMoves([]);
        setCurrentTurn(currentTurn === "white" ? "black" : "white");
      } else {
        setSelectedSquare(null);
        setValidMoves([]);
      }
    } else {
      if (boardState[position] && boardState[position].color === currentTurn) {
        setSelectedSquare(position);
        setValidMoves(
          getValidMoves(boardState[position], position, boardState)
        );
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
