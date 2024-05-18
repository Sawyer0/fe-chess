import "../../styles/Queen.css";

const Queen = ({ playerColor, gameStarted }) => {
  if (!gameStarted) return null;
  return (
    <div className={`queen ${playerColor}`}>
      {playerColor === "white" ? "♕" : "♛"}
    </div>
  );
};

export default Queen;
