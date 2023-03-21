const gameBoard = () => {
const playerX =  playerFactory("Player X", 0, "X");
    const playerXNameInput = document.getElementById("playerX-name");
    const playerXPointsDisplay = document.getElementById("playerX-counter");

const playerO = playerFactory("Player O", 0, "O");
    const playerONameInput = document.getElementById("playerO-name");
    const playerOPointsDisplay = document.getElementById("playerO-counter");

let currentPlayer = playerX.name;
const buttons = document.querySelectorAll(".button");
const gameBoardArr = ["", "", "", "", "", "", "", "", ""];

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
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (currentPlayer === playerX.name) {
                button.style.backgroundColor = 'blue';
                gameBoardArr[index] = playerX.sign;
        } else{
            button.style.backgroundColor = 'green';
            gameBoardArr[index] = playerO.sign;
        }
        console.log(gameBoardArr);
        
        decideWinner();
        turns();
        });
    });

    function decideWinner(){
        let winner;  
        //X wins
        function winOutComes(){
            if ([0, 1, 2].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
            } else if ([3, 4, 5].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
            } else if ([6, 7, 8].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
            } else if ([0, 3, 6].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
            } else if ([1, 4, 7].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
            } else if ([2, 5, 8].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
            } else if ([0, 4, 8].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
            } else if ([2, 4, 6].map(x => gameBoardArr[x]).every(val => val === "X")) {
                winner = "X";
            }
            //O wins
            if ([0, 1, 2].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
            } else if ([3, 4, 5].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
            } else if ([6, 7, 8].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
            } else if ([0, 3, 6].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
            } else if ([1, 4, 7].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
            } else if ([2, 5, 8].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
            } else if ([0, 4, 8].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
            } else if ([2, 4, 6].map(x => gameBoardArr[x]).every(val => val === "O")) {
                winner = "O";
            }
        }
        winOutComes();
        
        function endGame(){
            if(winner == "X"){
                playerX.incrementPoints();
                playerXPointsDisplay.textContent = playerX.points;
                console.log("We love a X win");
                console.log(playerX.points);
            } else if(winner == "O"){
                playerO.incrementPoints();
                playerOPointsDisplay.textContent = playerO.points;
                console.log("We love a Y win");
                console.log(playerX.points);
            }
        }
        endGame();
    }

    

};
gameBoard();