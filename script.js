// DOM 

const gameBoard = document.getElementById('gameBoard');
const testButton = document.getElementById('test_but');
const display = document.getElementById('display_player');
let playerTurn = true;
let player1Win = document.querySelector(".player1win");
let player2Win = document.querySelector(".player2win");
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
    //console.log(e.target.parentNode.value);
    checkWin();
    toggleBool();
    //console.log(playerTurn);
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
const allSquaresClick = document.querySelectorAll('.basic');

for (let i = 0; i < 9; i++) {
    squarePoints[i] = allSquares[i];
}



/*
[0][1][2]
[3][4][5]
[6][7][8]

win is 
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]

*/


const checkWin = () => {
    if ((squarePoints[0].classList.contains("player1") && squarePoints[1].classList.contains("player1") && squarePoints[2].classList.contains("player1")) ||
        (squarePoints[3].classList.contains("player1") && squarePoints[4].classList.contains("player1") && squarePoints[5].classList.contains("player1")) ||
        (squarePoints[6].classList.contains("player1") && squarePoints[7].classList.contains("player1") && squarePoints[8].classList.contains("player1")) ||
        (squarePoints[0].classList.contains("player1") && squarePoints[3].classList.contains("player1") && squarePoints[6].classList.contains("player1")) ||
        (squarePoints[1].classList.contains("player1") && squarePoints[4].classList.contains("player1") && squarePoints[7].classList.contains("player1")) ||
        (squarePoints[2].classList.contains("player1") && squarePoints[5].classList.contains("player1") && squarePoints[8].classList.contains("player1")) ||
        (squarePoints[0].classList.contains("player1") && squarePoints[4].classList.contains("player1") && squarePoints[8].classList.contains("player1")) ||
        (squarePoints[2].classList.contains("player1") && squarePoints[4].classList.contains("player1") && squarePoints[6].classList.contains("player1"))


    ) {
        disableBoard();
        player1Win.classList.remove("hide");
        console.log("player1 wins!");
    }

    else if
        ((squarePoints[0].classList.contains("player2") && squarePoints[1].classList.contains("player2") && squarePoints[2].classList.contains("player2")) ||
        (squarePoints[3].classList.contains("player2") && squarePoints[4].classList.contains("player2") && squarePoints[5].classList.contains("player2")) ||
        (squarePoints[6].classList.contains("player2") && squarePoints[7].classList.contains("player2") && squarePoints[8].classList.contains("player2")) ||
        (squarePoints[0].classList.contains("player2") && squarePoints[3].classList.contains("player2") && squarePoints[6].classList.contains("player2")) ||
        (squarePoints[1].classList.contains("player2") && squarePoints[4].classList.contains("player2") && squarePoints[7].classList.contains("player2")) ||
        (squarePoints[2].classList.contains("player2") && squarePoints[5].classList.contains("player2") && squarePoints[8].classList.contains("player2")) ||
        (squarePoints[0].classList.contains("player2") && squarePoints[4].classList.contains("player2") && squarePoints[8].classList.contains("player2")) ||
        (squarePoints[2].classList.contains("player2") && squarePoints[4].classList.contains("player2") && squarePoints[6].classList.contains("player2"))


    ) {
        squarePoints.forEach(element => {

        });
        disableBoard();
        player2Win.classList.remove("hide");
        console.log("player2 wins");
    }

}


const disableBoard = () => {
    allSquaresClick.forEach(element => {
        element.onclick = null;

    });
    display.classList.add('hide');

}


/*

const showBoard = (e) => {

    display.classList.add('hide');
    player1Win.classList.remove('hide');



}

testButton.onclick = showBoard;


*/