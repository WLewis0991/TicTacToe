//Start screen 


const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById('player2Name');
const startButton = document.querySelector(".startButton");
    
startButton.addEventListener("click", () => {
    const p1 = player1Name.value;
    const p2 = player2Name.value;
    Game.start (p1, p2);
    document.querySelector(".startContainer").classList.add("hidden");
    document.querySelector(".gameBoardContainer").classList.remove("hidden");
});
    
//Create Player

const CreatePlayer = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return { getName, getMarker };
};

//Create Board

//Game Running

const Game = (() => {
    let players=[];
    let currentPlayerIndex = 0;
    let gameOver = false;



    const start = (p1, p2) => {
        players = [CreatePlayer(p1, "X"), CreatePlayer(p2, "O")]; 
        currentPlayerIndex = 0;
        gameOver = false;
        console.log(players[1].getMarker())  
        console.log(players[1].getName())     
    };

    return {start};  
    
    
})();



//Win Checks

//Restart Button
