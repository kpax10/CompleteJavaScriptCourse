'use strict';

// Selecting Elements
const player0DOM = document.querySelector('.player--0')
const player1DOM = document.querySelector('.player--1')
const score0DOM = document.querySelector('#score--0');
const score1DOM = document.querySelector('#score--1');
const current0DOM = document.querySelector('#current--0');
const current1DOM = document.querySelector('#current--1');
const diceDOM = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Reset scores and die
score0DOM.textContent = 0;
score1DOM.textContent = 0;
diceDOM.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Functionality

btnRoll.addEventListener('click', function () {
    //1. Generating a random dice roll
    let dice = Math.floor(Math.random() * 6) + 1;

    //2. Remove hidden class, Display the Dice roll
    diceDOM.classList.remove('hidden');
    const diceImg = document.querySelector('img');
    diceImg.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
        // add dice to current score
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        // switch to next player
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0DOM.classList.toggle('player--active');
        player1DOM.classList.toggle('player--active');
    }
});



// const p1CurrentDOM = document.querySelector('#current--0')
// let p1Current = 0;
// let roll;

// document.querySelector('.btn--roll').addEventListener('click', function () {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     const imgDie = document.querySelector('img');

//     if (roll === 1) {
//         imgDie.src = 'dice-1.png'
//     } else if (roll === 2) {
//         imgDie.src = 'dice-2.png'
//     } else if (roll === 3) {
//         imgDie.src = 'dice-3.png'
//     } else if (roll === 4) {
//         imgDie.src = 'dice-4.png'
//     } else if (roll === 5) {
//         imgDie.src = 'dice-5.png'
//     } else {
//         imgDie.src = 'dice-6.png'
//     }
//     return roll;
// });


// p1Current = 0;
// p1Current += roll;
// p1CurrentDOM.textContent = p1Current;

// if not a 1, add the roll to the current score
// if it is a 1, switch players