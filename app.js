const gameBoard = () => {
    const playerX =  playerFactory("Player X", "0", "X");
    const playerO = playerFactory("Player O", "0", "O");
    let currentPlayer = playerX.name;
    const buttons = document.querySelectorAll(".button");
    const gameBoardArr = ["", "", "", "", "", "", "", "", ""];

    function playerFactory(name,points,sign){
        return{name,points,sign}
    }

    function turns(){
      // switch players
        currentPlayer = currentPlayer === playerX.name ? playerO.name : playerX.name;
    }

    // add event listeners to buttons
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
        button.style.backgroundColor = 'blue';
        gameBoardArr[index] = currentPlayer.sign;
        turns();
        });
    });
};
gameBoard();