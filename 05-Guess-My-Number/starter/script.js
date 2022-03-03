'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('No Number...');

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = ' #60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lose the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Reset button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    secretNumber = Math.floor(Math.random() * 20) + 1;
})