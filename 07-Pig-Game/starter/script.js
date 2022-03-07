'use strict';
let p1Current = 0;
document.querySelector('.btn--roll').addEventListener('click', function () {
    const roll = Math.floor(Math.random() * 6) + 1;
    const imgDie = document.querySelector('img');

    if (roll === 1) {
        imgDie.src = 'dice-1.png'
        p1Current = 0;
        // SWITCH USERS HERE
        return;
    } else if (roll === 2) {
        imgDie.src = 'dice-2.png'
        p1Current += roll;
    } else if (roll === 3) {
        imgDie.src = 'dice-3.png'
        p1Current += roll;
    } else if (roll === 4) {
        imgDie.src = 'dice-4.png'
        p1Current += roll;
    } else if (roll === 5) {
        imgDie.src = 'dice-5.png'
        p1Current += roll;
    } else {
        imgDie.src = 'dice-6.png'
        p1Current += roll;
    }
    console.log(p1Current);
    // return p1Current;

});

// if not a 1, add the roll to the current score
// if it is a 1, switch players