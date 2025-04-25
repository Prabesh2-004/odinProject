const ClickableButton = document.querySelectorAll('.tic-tac-toe-button-js');
const container = document.querySelector('.container');
const jsButton = document.querySelector('.js-button');

const gameState = {
    player: {
        1: {O},
        2: {X}
    },
    currentTurn: 1,
    gameOver: false
}
function playeraction(action, playerNum){
    if(gameState.gameOver || gameState.currentTurn !== playerNum){
        return
    }

    const currentPlayer = playerNum;
    const otherPlayer = playerNum === 1 ? 2: 1;

    if(!gameState.gameOver){
        gameState.currentTurn = otherPlayer;
        logAction(`Player ${otherPlayer}'s turn.`);
    }

    updateUI();
}

function updateUI(){
    
}