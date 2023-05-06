'use strict';
const gameNumber = getNumber();
let score = 20;


// Event Handlers
document.querySelector('.check').addEventListener('click', function(){
    const userGuess = document.querySelector('.guess').value;
    console.log(userGuess);

    // If user does NOT enter any value.
    if(!userGuess){
        document.querySelector('.message').textContent = 'Please type a number.';
    } else if(userGuess === gameNumber){
        // If user matches the number, you win.
        document.querySelector('.message').textContent = 'You win!';
    } else if(userGuess > gameNumber){
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = score;
    } else if(userGuess < gameNumber){
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
});


// Functions
function getNumber(){
    return (Math.floor(Math.random() * 20) + 1);
}