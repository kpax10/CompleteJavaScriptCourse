/*
'use strict';


console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
'use strict';

const number = Math.floor(Math.random() * 20) + 1;
console.log(number);

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = 'No number'
    }
    if (guess === number) console.log('you win');
});