function humanMove() {
let Person = prompt("Enter Your Move: ");
return Person;
}
function computerMove(){
const Moves = ['rock', 'paper', 'scissor'];
const randomMove = Math.floor(Math.random() * Moves.length);
const computerMoves = Moves[randomMove];
return computerMoves;
}
let result;
const computerMoves = computerMove();
const humanMoves = humanMove();
function play(computerMove, humanMove){
    if(humanMove === computerMove){
        result = 'Tie';
    }
    else if(humanMove === 'rock' && computerMove === 'paper'|| humanMove === 'scissor' && computerMove === 'rock'|| humanMove === 'paper' && computerMove === 'scissor'){
        result = 'Lost'
    }
    else if (humanMove === 'rock' && computerMove === 'scissor'|| humanMove === 'scissor' && computerMove === 'paper'|| humanMove === 'paper' && computerMove === 'rock'){
        result = 'Win';
    }
    else{
        console.log('Invalid Choice!');
        return;
    }
    console.log(`Computer: ${computerMoves} and Human: ${humanMoves} Result: ${result}`);
}
play(computerMoves, humanMoves);