export const initializeBoardState = (playerColor) => {
    const initialBoardState = {};
    const pieceOrder = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    
    if (playerColor === 'white') {
        for (let i = 0; i < 8; i++) {
            initialBoardState[`${String.fromCharCode(97 + i)}1`] = { type: pieceOrder[i], color: 'white' };
            initialBoardState[`${String.fromCharCode(97 + i)}2`] = { type: 'pawn', color: 'white' };
            initialBoardState[`${String.fromCharCode(97 + i)}7`] = { type: 'pawn', color: 'black' };
            initialBoardState[`${String.fromCharCode(97 + i)}8`] = { type: pieceOrder[i], color: 'black' };
        }
    } else {
        for (let i = 0; i < 8; i++) {
            initialBoardState[`${String.fromCharCode(97 + i)}1`] = { type: pieceOrder[i], color: 'black' };
            initialBoardState[`${String.fromCharCode(97 + i)}2`] = { type: 'pawn', color: 'black' };
            initialBoardState[`${String.fromCharCode(97 + i)}7`] = { type: 'pawn', color: 'white' };
            initialBoardState[`${String.fromCharCode(97 + i)}8`] = { type: pieceOrder[i], color: 'white' };
        }
    }

    return initialBoardState;
};
