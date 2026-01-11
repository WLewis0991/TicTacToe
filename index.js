//Start screen 


const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById('player2Name');
const startButton = document.querySelector(".startButton");
const cells = document.querySelectorAll (".cell")
const restartButton = document.querySelector(".restart")
    
startButton.addEventListener("click", () => {

    document.querySelector(".startContainer").classList.add("hidden");
    document.querySelector(".gameBoardContainer").classList.remove("hidden");
    const p1 = player1Name.value;
    const p2 = player2Name.value;
    Game.start(p1, p2);
    cells.forEach((cell, i) => {
        cell.addEventListener("click", () => {
            Game.playTurn(i);
    })});
    

    console.log(GameBoard.board)
    });
//Create Player

const CreatePlayer = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return { getName, getMarker };
};

//Create Board

const GameBoard = (() => {
    const board = [ "","","","","","","","",""];

    const markCell = (index, currentMarker) => {
        if (board[index] === ""){
            board[index] = currentMarker;
            return true;
        }
        else
            return false;
    }
    
    const getBoard = () => [...board];

    const reset = () => {
        for (let i = 0; i , board.length; i++) board[i] = "";
    }
    return {reset, markCell, getBoard, board};
})();

//Game Running

const Game = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;

    const status = document.querySelector(".statusScreen");

    const start = (p1, p2) => {
        players = [CreatePlayer(p1, "X"), CreatePlayer(p2, "O")];
        currentPlayerIndex = 0;
        gameOver = false;
        updateStatus(`${currentPlayer().getName()}'s turn!`);
    };

    const currentPlayer = () => players[currentPlayerIndex];

    const updateStatus = (message) => {
        status.textContent = message;
    };

    const playTurn = (i) => {
        if (gameOver) return;

        const marker = currentPlayer().getMarker();

        if (GameBoard.markCell(i, marker)) {
            currentPlayerIndex = 1 - currentPlayerIndex;
            updateStatus(`${currentPlayer().getName()}'s turn!`);
            render();
            console.log(GameBoard.board)
        }
    };

    const render = () => {
        const board = GameBoard.getBoard();
        cells.forEach((cell, i) => {
            cell.textContent = board[i];
        });
    };

    return { start, currentPlayer, updateStatus, playTurn, render };
})();


//Win Checks
