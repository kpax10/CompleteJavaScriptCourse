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

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number...'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose the game';
            document.querySelector('.score').textContent = 0;
        }
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