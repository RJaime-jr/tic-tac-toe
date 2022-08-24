const gameBoard = document.getElementById('gameBoard');


const grid = document.createElement('div');
grid.classList.add('game-grid');


function createSquare() {
    const square = document.createElement('div');
    square.classList.add('squares');


    grid.appendChild(square);
}

gameBoard.appendChild(grid);

for (let i = 0; i < 9; i++) {
    createSquare();

}