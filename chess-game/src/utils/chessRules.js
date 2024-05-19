export const getValidMoves = (piece, position, boardState) => {
  switch (piece.type) {
    case "queen":
      return getQueenMoves(piece, position, boardState);
    case "knight":
      return getKnightMoves(piece, position, boardState);
    default:
      return [];
  }
};

const getQueenMoves = (piece, position, boardState) => {
  const moves = [];
  const [col, row] = [position.charCodeAt(0), parseInt(position[1])];

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  directions.forEach(([colOffset, rowOffset]) => {
    for (let i = 1; i < 8; i++) {
      const newCol = String.fromCharCode(col + colOffset * i);
      const newRow = row + rowOffset * i;
      const newPosition = `${newCol}${newRow}`;

      if (!isValidPosition(newPosition)) break;

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

const getKnightMoves = (piece, position, boardState) => {
  const moves = [];
  const [col, row] = [position.charCodeAt(0), parseInt(position[1])];

  const offsets = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1],
  ];

  offsets.forEach(([colOffset, rowOffset]) => {
    const newCol = String.fromCharCode(col + colOffset);
    const newRow = row + rowOffset;
    const newPosition = `${newCol}${newRow}`;

    if (
      isValidPosition(newPosition) &&
      (!boardState[newPosition] ||
        boardState[newPosition].color !== piece.color)
    ) {
      moves.push(newPosition);
    }
  });

  return moves;
};

const isValidPosition = (position) => {
  const [col, row] = [position.charCodeAt(0), parseInt(position[1])];
  return col >= 97 && col <= 104 && row >= 1 && row <= 8;
};

const findKingPosition = (boardState, currentPlayer) => {
  for (let position in boardState) {
    if (
      boardState[position].type === "king" &&
      boardState[position].color === currentPlayer
    ) {
      return position;
    }
  }
};

const simulateMove = (boardState, from, to) => {
  const simulatedBoard = { ...boardState };
  simulatedBoard[to] = simulatedBoard[from];
  delete simulatedBoard[from];
  return simulatedBoard;
};

export const isCheck = (boardState, currentPlayer) => {
  const kingPosition = findKingPosition(boardState, currentPlayer);
  for (let position in boardState) {
    if (boardState[position].color !== currentPlayer) {
      const moves = getValidMoves(boardState[position], position, boardState);
      if (moves.includes(kingPosition)) {
        return true;
      }
    }
  }
  return false;
};

export const isCheckmate = (boardState, currentPlayer) => {
  if (!isCheck(boardState, currentPlayer)) {
    return false;
  }
  for (let position in boardState) {
    if (boardState[position].color === currentPlayer) {
      const moves = getValidMoves(boardState[position], position, boardState);
      for (let move of moves) {
        const simulatedBoard = simulateMove(boardState, position, move);
        if (!isCheck(simulatedBoard, currentPlayer)) {
          return false;
        }
      }
    }
  }
  return true;
};
