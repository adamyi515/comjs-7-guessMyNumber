'use strict';
let gameNumber; // This variable is initialized in the init() function.
let score; // The Score variable is initialized in the init() function.
let highscore = 0;

// Initialize game parameters at the beginning of game.
init();

// Event Handlers
document.querySelector('.check').addEventListener('click', function(){
    const userGuess = parseInt(document.querySelector('.guess').value);

    // If user does NOT enter any value.
    if(!userGuess){
        displayMessage('Please type a number');
    } else if(userGuess === gameNumber){
        // If user matches the number, you win.
        displayMessage('You win!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = gameNumber;
        document.querySelector('.number').style.width = '30rem';

        // Check the highscore. If the current game's highscore is higher than previous, then
        // update highscore.
        if(highscore < score){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // Guess is too high or too low.
    } else if(userGuess !== gameNumber){
        if(score > 1){
            displayMessage(userGuess > gameNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lose the game!');
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
});


document.querySelector('.again').addEventListener('click', function() {
     /*
    1. Reset the game
     - Reset score
     - Remove any CSS that changes if user wins
     - Generate a new number
    */
    init();
});


// Functions
function getNumber(){
    return (Math.floor(Math.random() * 20) + 1);
}

function displayMessage(msg){
    document.querySelector('.message').textContent = msg;
}

function init(){
    gameNumber = getNumber();
    console.log(gameNumber);
    // Reset the score board.
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    // Revert the game message back to the original
    displayMessage('Start guessing...');

}