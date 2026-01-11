//Start screen 


const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById('player2Name');
const startButton = document.querySelector(".startButton");
const restartButton = document.querySelector(".restart")
    
startButton.addEventListener("click", () => {
    const p1 = player1Name.value;
    const p2 = player2Name.value;
    Game.start (p1, p2);
    document.querySelector(".startContainer").classList.add("hidden");
    document.querySelector(".gameBoardContainer").classList.remove("hidden");
    
    const cells = document.querySelectorAll(".cell")
    cells.forEach((cell, i) => {
        cell.addEventListener("click", () => {
            Game.playTurn(i);
        })
    }
)});
    
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
        return false;
    }
    
    const reset = () => {
        for (let i = 0; i , board.length; i++) board[i] = "";
    }
    return {reset, markCell,board};
})();

//Game Running

const Game = (() => {
    let players=[];
    let currentPlayerIndex = 0;
    let gameOver = false;
    const status = document.querySelector(".statusScreen");

    const start = (p1, p2) => {
        players = [CreatePlayer(p1, "X"), CreatePlayer(p2, "O")]; 
        currentPlayerIndex = 0;
        gameOver = false;
        Game.updateStatus(`${currentPlayer().getName()}'s turn!`);
        console.log(players[1].getMarker())  
        console.log(players[1].getName())     
    };

    const currentPlayer = () => players[currentPlayerIndex];

    const updateStatus = (message) => status.textContent = message

    const playTurn = (i) => {
        const currentMarker = currentPlayer().getMarker();
        if (GameBoard.markCell(i, currentMarker)){
        currentPlayerIndex = 1 - currentPlayerIndex
        }
        console.log(i);
        console.log(currentMarker);
        console.log(GameBoard.board)
        

    }

    return {start, currentPlayer, updateStatus, playTurn};  
    
    
})();



//Win Checks

//Restart Button
