import React from "react";

const initialGameBoard = [
    [null, null, null], // 1st row
    [null, null, null], // 2nd row
    [null, null, null], // 3rd row
];

const GameBoard = ({ onSelectSquare, turns }) => {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //   setGameBoard((prevGameBoard) => {
    //      {
    //         /* Create a brand new copy array */
    //     }
    //     const updatedBoard = [
    //         ...prevGameBoard.map((innerArray) => [...innerArray]),
    //     ];
    //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //     return updatedBoard;
    //  });

    //   onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {/*Creating the rows*/}
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {/*Creating the cols*/}
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() =>
                                        onSelectSquare(rowIndex, colIndex)
                                    }
                                    disabled={playerSymbol !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
};

export default GameBoard;
