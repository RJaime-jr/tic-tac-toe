// DOM 

const gameBoard = document.getElementById('gameBoard');
const testButton = document.getElementById('test_but');
const display = document.getElementById('display_player');
let playerTurn = true;
const grid = document.createElement('div');
grid.classList.add('game-grid');
gameBoard.appendChild(grid);

let squarePoints = ["", "", "", "", "", "", "", "", "",];






const player = (name, mark) => {
    return { name, mark }
}


const player1 = player('player1', 'X');
const player2 = player('player2', 'O');
displayPlayer();



function toggleBool() {
    playerTurn = !playerTurn;
}



const claimSquare = (e) => {
    e.target.classList.remove('basic');
    e.target.classList.add('square-text');
    if (playerTurn) {
        e.target.innerText = player1.mark;
        e.target.parentNode.classList.add('player1');
    }

    else {
        e.target.innerText = player2.mark;
        e.target.parentNode.classList.add('player2');
    }
    console.log(e.target.parentNode.value);
    toggleBool();
    console.log(playerTurn);
    displayPlayer();
    e.target.onclick = null;
}

function displayPlayer() {
    display.innerText = "";
    if (playerTurn) {
        display.style.color = "#F06C9B";
        display.innerText = `${player1.name}'s turn mark your ${player1.mark}`;


    }
    else {
        display.style.color = "#F9B9B7";
        display.innerText = `${player2.name}'s turn mark your ${player2.mark}`;

    }

}

function createSquare() {
    const square = document.createElement('div');
    const text = document.createElement('div');
    square.classList.add('squares');
    text.classList.add('basic');

    grid.appendChild(square);
    square.appendChild(text);
    text.onclick = claimSquare;
}

for (let i = 0; i < 9; i++) {
    createSquare();

}

const allSquares = document.querySelectorAll('.squares');











const showBoard = (e) => {
    console.log({ allSquares });




}

testButton.onclick = showBoard;


