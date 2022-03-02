/*
'use strict';


console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
'use strict';

const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

// Reset button
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start guessing...'
    // reset background color
    // reset score back to 20
    // reset ? block size and number back to '?'
})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number...'

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = ' #60b347';
        document.querySelector('.number').style.width = '30rem';

        // When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose the game';
            document.querySelector('.score').textContent = 0;
        }

        // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});