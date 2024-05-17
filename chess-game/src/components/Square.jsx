import Queen from "./pieces/Queen";

const Square = ({color, piece, onClick, highlight}) => {
    return (
        <div className={`square ${color} ${highlight}`} onClick={onClick}>
            {piece && renderPiece(piece)}
        </div>
    );
};

const renderPiece = (piece) => {
    switch (piece.type) {
        case 'queen' :
            return <Queen color={piece.color} />;
        default:
            return null;
    }
};

export default Square;