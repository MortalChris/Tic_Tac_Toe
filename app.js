const gameBoard = () => {

const playerX =  playerFactory("Player X", 0, "X");
const playerO = playerFactory("Player O", 0, "O");
let currentPlayer = playerX.name;
const buttons = document.querySelectorAll(".button");
const gameBoardArr = ["", "", "", "", "", "", "", "", ""];

    //Shows player who turn is it
    const turnDiv = document.getElementById("Turn-text");
        let turnText = document.createElement("p");
        turnText.className = "turnText";
        turnText.textContent = "It's " + currentPlayer + " turn";
        turnDiv.appendChild(turnText);

    function playerFactory(name,points,sign){
        return{name,points,sign}
    }

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
        turns();
        });
    });

    
};
gameBoard();