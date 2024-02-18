import React from "react";

const GameBoard = ({ onSelectSquare, board }) => {
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
            {board.map((row, rowIndex) => (
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
