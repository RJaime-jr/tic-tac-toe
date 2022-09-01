const gameBoard = document.getElementById('gameBoard');
const testButton = document.getElementById('test_but');
const display = document.getElementById('display_player');
let playerTurn = true;

function toggleBool() {
    playerTurn = !playerTurn;
}

const grid = document.createElement('div');
grid.classList.add('game-grid');


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

    toggleBool();
    console.log(playerTurn);
    displayPlayer();
    e.target.onclick = null;

    //console.log("hello!");
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



gameBoard.appendChild(grid);

for (let i = 0; i < 9; i++) {
    createSquare();

}

const player = (name, mark) => {
    return { name, mark }
}


const player1 = player('player1', 'X');
const player2 = player('player2', 'O');
displayPlayer();




/*
const game = (() => {
    const a = player1;
    const b = player2;

    const swap = (a, b) => { let c = b; b = a; a = c; return { a, b }; };




return{
    activePlayer
}
;
})();
*/







const allSquares = document.querySelectorAll('.squares');
const showBoard = (e) => {

    console.log({ allSquares });


}

testButton.onclick = showBoard;



