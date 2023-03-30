const gameBoard = () => {
const playerX =  playerFactory("Player X", 0, "X");
    const playerXPointsDisplay = document.getElementById("playerX-counter");
    const playerXInfoDiv = document.getElementById("playerX");
    const playerXNameDisplay = document.getElementById("playerX-name");

const playerO = playerFactory("Player O", 0, "O");
    const playerOPointsDisplay = document.getElementById("playerO-counter");
    const playerOInfoDiv = document.getElementById("playerO");
    const playerONameDisplay = document.getElementById("playerO-name");

const modal = document.getElementById("modal-container");
    const playerXNameInput = document.getElementById("playerX-name-field");
    const playerONameInput = document.getElementById("playerO-name-field");
    const modalForm = document.getElementsByClassName("modal-form");
    const startBtn = document.getElementById("start-btn");
// const playerInfo = document.querySelectorAll(".player-info");
const buttons = document.querySelectorAll(".button");

let currentPlayer = playerX.name;
let gameBoardArr = ["", "", "", "", "", "", "", "", ""];

function playerFactory(name,points,sign){
    return{
        name,
        points,
        sign,
        incrementPoints() {
            this.points++;
        }
    };
}


function startGame(){
    startBtn.addEventListener("click", (event)=>{//Idk why "submit still refreshes"
        event.preventDefault();
        playerXNameDisplay.textContent = playerXNameInput.value;
        playerONameDisplay.textContent = playerONameInput.value;

        modal.style.display = "none";
        playerXInfoDiv.style.display = "block";
        playerOInfoDiv.style.display = "block";

        console.log("btn was clicked");
    })
}
startGame();


    //Shows player who turn is it
    const turnDiv = document.getElementById("Turn-text");
        let turnText = document.createElement("p");
        turnText.className = "turnText";
        turnText.textContent = "It's " + currentPlayer + " turn";
        turnDiv.appendChild(turnText);


    function turns(){
      // switch players
    if (currentPlayer === playerX.name) {
        currentPlayer = playerO.name;
        turnText.textContent = "It's " + currentPlayer + " turn";
        console.log("Its 0 turn");
    } else {
        currentPlayer = playerX.name;
        turnText.textContent = "It's " + currentPlayer + " turn";
        console.log("Its X turn");
        }
    }

    // add event listeners to buttons
    function placeSign(){
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                for(let i = 0; i < gameBoardArr.length; i++){
                    if (gameBoardArr[index] == "X" || gameBoardArr[index] == "O") {//tells if array index is filled or not
                        console.log(i);
                        return;
                        }
                        if (currentPlayer === playerX.name) {
                            button.textContent = playerX.sign;
                            button.style.color = "white";
                            button.style.backgroundColor = 'blue';
                            gameBoardArr[index] = playerX.sign;
                        } else{
                            button.textContent = playerO.sign;
                            button.style.color = "white";
                            button.style.backgroundColor = 'lightblue';
                            gameBoardArr[index] = playerO.sign;
                        }
                        console.log(gameBoardArr);
                    
                    decideWinner();
                    turns();
                    }
            });
        });
    };
    placeSign();

    function decideWinner(){
        let winner;  
        let notEmpty;
        //X wins
        function winOutComes(){
            if ([0, 1, 2].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
                endRound();
            } else if ([3, 4, 5].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
                endRound();
            } else if ([6, 7, 8].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
                endRound();
            } else if ([0, 3, 6].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
                endRound();
            } else if ([1, 4, 7].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
                endRound();
            } else if ([2, 5, 8].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
                endRound();
            } else if ([0, 4, 8].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
                endRound();
            } else if ([2, 4, 6].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
                endRound();
            }

            //O wins
            if ([0, 1, 2].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
                endRound();
            } else if ([3, 4, 5].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
                endRound();
            } else if ([6, 7, 8].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
                endRound();
            } else if ([0, 3, 6].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
                endRound();
            } else if ([1, 4, 7].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
                endRound();
            } else if ([2, 5, 8].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
                endRound();
            } else if ([0, 4, 8].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
                endRound();
            } else if ([2, 4, 6].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
                endRound();
            } else if(notEmpty = gameBoardArr.every(val => val !== '') && winner != "X" && winner != "O"){
                endRound();
            }
        }
        winOutComes();
        
        function endRound(){
            if(winner == "X"){
                playerX.incrementPoints();
                playerXPointsDisplay.textContent = playerX.points;
                wipeBoard();
                console.log("We love a X win");
                // console.log(playerX.points);
            } else if(winner == "O"){
                playerO.incrementPoints();
                // playerOPointsDisplay.style.transform = "scale(2)"
                playerOPointsDisplay.textContent = playerO.points;
                wipeBoard();
                console.log("We love a Y win");
                // console.log(playerO.points);
            } else{
                console.log("Noones wins");
                wipeBoard();
            }
            
        }
    }

document.getElementById("overlay").style.display = "none";

        function wipeBoard(){
            document.getElementById("overlay").style.display = "block";
            setTimeout(() => {
                currentPlayer = playerX.name;
                document.getElementById("overlay").style.display = "none";
                gameBoardArr = ["", "", "", "", "", "", "", "", ""];
                currentPlayer = playerX.name;
                buttons.forEach(button => {
                    button.textContent = "";
                    buttons.disabled = true;
                    button.style.backgroundColor = "#4A0D67";
                    })    
            }, 2000);
            }
            
};
gameBoard();