import Queen from "../pieces/Queen";
import "../../styles/board.css";

const Square = ({
  color,
  piece,
  onClick,
  highlight,
  gameStarted,
  playerColor,
}) => {
  if (!gameStarted) return null;
  return (
    <div className={`square ${color} ${highlight}`} onClick={onClick}>
      {piece && renderPiece(piece, gameStarted, playerColor)}
    </div>
  );
};

const renderPiece = (piece, gameStarted, playerColor) => {
  switch (piece.type) {
    case "queen":
      return (
        <Queen
          color={piece.color}
          gameStarted={gameStarted}
          playerColor={playerColor}
        />
      );
    default:
      return null;
  }
};

export default Square;
