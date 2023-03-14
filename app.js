const gameBoard = () => {
    const playerX =  playerFactory("Player X", "0", "X");
    const playerO = playerFactory("Player O", "0", "O");
    const currentPlayer = playerX.name;
    const buttons = document.querySelectorAll(".button");
    // const currentTurnSign;
    // const currentTurnPlayer;
    const gameBoardArr =["", "", "", "", "", "", "", "", ""];

    function playerFactory(name,points,sign){
        return{name,points,sign}
    }
    function turns(){
        if(currentPlayer === playerX){
            squareSignClick();
        }else{
            squareSignClick();
        }

        //Need to switch between turn order
        if(currentPlayer === playerX.name){
            currentPlayer === playerO.name;
        } else {
            currentPlayer === playerX.name;
        }
    }

    function squareSignClick(){
        console.log("squareSignClick called");
        buttons.forEach(button => {
            button.addEventListener('click', () => {
              button.style.backgroundColor = 'blue'; // Change button background color to red
            });
        });
    };
    
};
gameBoard();
