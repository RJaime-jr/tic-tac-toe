const gameBoard = document.getElementById('gameBoard');


const grid = document.createElement('div');
grid.classList.add('game-grid');


const sayHello = (e) => {
    console.log("hello!");
}

function createSquare() {
    const square = document.createElement('div');
    const text = document.createElement('div');
    square.classList.add('squares');
    text.classList.add('square-text');
    square.onclick = sayHello;
    grid.appendChild(square);
    square.appendChild(text);
    text.innerText = "X";

}

gameBoard.appendChild(grid);

for (let i = 0; i < 9; i++) {
    createSquare();

}

