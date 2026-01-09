//Start screen functionality
let player1;
let player2;
const startButton = document.querySelector(".startButton")


startButton.addEventListener("click", e =>{
    player1 = document.getElementById("player1Name").value;
    player2 = document.getElementById("player2Name").value;
    document.querySelector(".startContainer").classList.add("hidden");
    document.querySelector(".gameBoardContainer").classList.remove("hidden");


    console.log(player1)
    console.log(player2)
})

