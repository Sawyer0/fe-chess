const Piece = ({ piece }) => {
  switch (piece.type) {
    case "queen":
      return (
        <div className={`piece ${piece.color}`}>
          {piece.color === "white" ? "♕" : "♛"}
        </div>
      );
    default:
      return null;
  }
};

export default Piece;
