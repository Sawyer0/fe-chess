export const getValidMoves = (piece, position, boardState) => {
    switch (piece.type) {
        case 'queen':
            return getQueenMoves(piece, position, boardState);
        default:
            return [];
    }
};

const getQueenMoves = (piece, position, boardState) => {
    const moves = [];
    const [col, row] = [position.charCodeAt(0), parseInt(position[1])];

    const directions = [
        [1, 0], [0, 1], [-1, 0], [0, -1],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    directions.forEach(([colOffset, rowOffset]) => {
        for (let i = 1; i < 8; i++) {
            const newCol = String.fromCharCode(col + colOffset * i);
            const newRow = row + rowOffset * i;
            const newPosition = `${newCol}${newRow}`;

            if (!isValiidPosition[newPosition]) break;

            if (!boardState[newPosition]) {
                moves.push(newPosition);
            } else {
                if (boardState[newPosition].color !== piece.color) {
                    moves.push(newPosition);
                }
                break;
            }
        }
    });

    return moves;
};

const isValiidPosition = (position) => {
    const [col, row] = [position.charCodeAt(0), parseInt(position[1])];
    return col >= 97 && col <= 104 && row >= 1 && row <= 8;
};
