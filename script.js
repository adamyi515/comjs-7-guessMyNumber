'use strict';
const gameNumber = getNumber();
console.log(gameNumber);
let score = 20;


// Event Handlers
document.querySelector('.check').addEventListener('click', function(){
    const userGuess = parseInt(document.querySelector('.guess').value);

    // If user does NOT enter any value.
    if(!userGuess){
        document.querySelector('.message').textContent = 'Please type a number.';
    } else if(userGuess === gameNumber){
        // If user matches the number, you win.
        document.querySelector('.message').textContent = 'You win!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    // Guess is too high
    } else if(userGuess > gameNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }

    // Guess is too low
    } else if(userGuess < gameNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
});


// Functions
function getNumber(){
    return (Math.floor(Math.random() * 20) + 1);
}