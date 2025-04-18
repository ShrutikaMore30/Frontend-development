const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");

let boardState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
];

// Handle player move
function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (boardState[index] !== "" || !gameActive) return;

    boardState[index] = currentPlayer;
    event.target.innerText = currentPlayer;
    event.target.classList.add("taken");

    if (checkWin(currentPlayer)) {
        statusText.innerText = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (boardState.every(cell => cell !== "")) {
        statusText.innerText = "It's a draw!";
        gameActive = false;
        return;
    }

    currentPlayer = "O"; // Switch to computer
    setTimeout(computerMove, 500);
}

// Computer makes a move (random)
function computerMove() {
    if (!gameActive) return;
    
    let availableCells = boardState.map((val, idx) => (val === "" ? idx : null)).filter(val => val !== null);
    
    if (availableCells.length === 0) return;

    let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    
    boardState[randomIndex] = "O";
    cells[randomIndex].innerText = "O";
    cells[randomIndex].classList.add("taken");

    if (checkWin("O")) {
        statusText.innerText = "Computer wins!";
        gameActive = false;
        return;
    }

    if (boardState.every(cell => cell !== "")) {
        statusText.innerText = "It's a draw!";
        gameActive = false;
        return;
    }

    currentPlayer = "X"; // Switch back to player
}

// Check if a player has won
function checkWin(player) {
    return winPatterns.some(pattern => pattern.every(index => boardState[index] === player));
}

// Reset the game
function resetGame() {
    boardState = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.innerText = "";
        cell.classList.remove("taken");
    });
    currentPlayer = "X";
    gameActive = true;
    statusText.innerText = "";
}

// Event Listeners
cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);
