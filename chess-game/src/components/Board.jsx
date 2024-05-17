import Square from './Square'

const Board = () => {
    const boardSize = 8;

    const renderBoard = () => {
        const board = [];

        for (let row = 0; row < boardSize; row++ ) {
            for (let col = 0; col < boardSize; col++) {
                const position = `${String.fromCharCode(97 + col)}${boardSize - row}`;
                const color = (row + col) % 2 === 0 ? 'light' : 'dark';

                board.push(<Square key={position} color={color} />);
            }
        }
        return board;
    };
    return (
        <div className='board'>
            {renderBoard()}
        </div>
    );
};

export default Board;