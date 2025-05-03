import React, { useState, useEffect } from "react";

// Square Component
const Square = ({ value, onClick, disabled }) => {
  return (
    <button
      className="w-24 h-24 border-2 border-gray-500 text-xl font-bold"
      onClick={onClick}
      disabled={disabled} // Disable click if it's AI's turn
    >
      {value}
    </button>
  );
};

// Minimax AI logic for calculating the best move
const minimax = (board, depth, isMaximizing) => {
  const winner = calculateWinner(board);
  if (winner === "X") return -10 + depth;
  if (winner === "O") return 10 - depth;
  if (!board.includes(null)) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = "O"; // AI move
        best = Math.max(best, minimax(board, depth + 1, false));
        board[i] = null;
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = "X"; // Player move
        best = Math.min(best, minimax(board, depth + 1, true));
        board[i] = null;
      }
    }
    return best;
  }
};

// Find optimal move for AI
const findBestMove = (board) => {
  let bestVal = -Infinity;
  let move = -1;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = "O"; // AI move
      let moveVal = minimax(board, 0, false);
      board[i] = null;
      if (moveVal > bestVal) {
        move = i;
        bestVal = moveVal;
      }
    }
  }
  return move;
};

// Check for winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6], // Diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Game = ({ mode, onBack }) => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Board state
  const [isXTurn, setIsXTurn] = useState(true); // Player's turn (X starts)
  const [winner, setWinner] = useState(null); // Winner state
  const [isAITurn, setIsAITurn] = useState(false); // AI turn state (for Player vs AI mode)

  // Handle click events for player moves
  const handleClick = (index) => {
    if (board[index] || winner || isAITurn) return; // Don't allow clicks if square is filled, or if it's AI's turn

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn); // Toggle player turn
  };

  // AI makes a move after player's turn (with delay)
  useEffect(() => {
    if (mode === "ai" && !isXTurn && !isAITurn && !winner) {
      setIsAITurn(true); // Indicate it's AI's turn
      // Simulate delay before AI makes its move
      setTimeout(() => {
        const bestMove = findBestMove(board);
        const newBoard = [...board];
        newBoard[bestMove] = "O"; // AI move
        setBoard(newBoard);
        setIsXTurn(true); // Toggle back to player turn
        setIsAITurn(false); // Reset AI turn state
      }, 1000); // Delay of 1 second (adjust as needed)
    }
  }, [board, isXTurn, mode, isAITurn, winner]); // AI move after player move

  // Check for winner after every move
  useEffect(() => {
    const win = calculateWinner(board);
    if (win) {
      setWinner(win);
    }
  }, [board]);

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
    setIsAITurn(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Display Turn Text */}
      <h1 className="text-4xl font-bold mb-5">
        {winner
          ? `${winner} wins!`
          : isAITurn
          ? "Computer's Turn"
          : isXTurn
          ? "Your Turn (X)"
          : "Your Turn (O)"}
      </h1>

      <div className="grid grid-cols-3 gap-2 mt-5">
        {board.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} disabled={isAITurn} />
        ))}
      </div>
      
      <button
        onClick={resetGame}
        className="mt-5 bg-blue-500 text-white px-6 py-2 rounded-xl"
      >
        Play Again
      </button>
      
      <button
        onClick={onBack}
        className="mt-2 bg-gray-500 text-white px-6 py-2 rounded-xl"
      >
        Back to Mode Selection
      </button>
    </div>
  );
};

export default Game;
