'use strict';

document.querySelector('.btn--roll').addEventListener('click', function () {
    const roll = Math.floor(Math.random() * 6) + 1;
    const imgDie = document.querySelector('img');

    if (roll === 1) {
        imgDie.src = 'dice-1.png'
        return;
    } else if (roll === 2) {
        imgDie.src = 'dice-2.png'
    } else if (roll === 3) {
        imgDie.src = 'dice-3.png'
    } else if (roll === 4) {
        imgDie.src = 'dice-4.png'
    } else if (roll === 5) {
        imgDie.src = 'dice-5.png'
    } else imgDie.src = 'dice-6.png'
    return roll;
});

// if not a 1, add the roll to the current score
// if it is a 1, switch players