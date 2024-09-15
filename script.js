const canvas = document.getElementById('ticTacToeCanvas');
const ctx = canvas.getContext('2d');
const boardSize = 3;  
const cellSize = canvas.width / boardSize;
let currentPlayer = 'X'; 
let board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(''));


function drawGrid() {
    for (let i = 1; i < boardSize; i++) {
        ctx.moveTo(i * cellSize, 0);  
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.moveTo(0, i * cellSize);  
        ctx.lineTo(canvas.width, i * cellSize);
    }
    ctx.stroke();  
}


function drawMark(x, y, player) {
    const centerX = x * cellSize + cellSize / 2;
    const centerY = y * cellSize + cellSize / 2;
    const offset = cellSize / 4;

    if (player === 'X') {
        ctx.beginPath();
        ctx.moveTo(centerX - offset, centerY - offset);
        ctx.lineTo(centerX + offset, centerY + offset);
        ctx.moveTo(centerX + offset, centerY - offset);
        ctx.lineTo(centerX - offset, centerY + offset);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.arc(centerX, centerY, offset, 0, Math.PI * 2);
        ctx.stroke();
    }
}


canvas.addEventListener('click', function (event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const x = Math.floor(mouseX / cellSize);
    const y = Math.floor(mouseY / cellSize);

    if (board[y][x] === '') {
        board[y][x] = currentPlayer;
        drawMark(x, y, currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});


drawGrid();
