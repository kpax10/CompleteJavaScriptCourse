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
let totalScore = [0, 0];

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

// if user clicks hold, add current score to total score
btnHold.addEventListener('click', function () {
    console.log(totalScore);

    // if active player is 0, add current score to totalScore[0]
    if (activePlayer === 0) {
        totalScore[0] += currentScore;
    } else {
        totalScore[1] += currentScore;
    };

    // game winning events
    if (totalScore[activePlayer] >= 20) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        // remove the dice image on win
        diceDOM.classList.add('hidden');
        // toggle losers background
        player0DOM.classList.toggle('player--active');
        player1DOM.classList.toggle('player--active');
        // disable roll dice and hold button
        btnHold.disabled = true;
        btnRoll.disabled = true;
    }
    // update the score to the DOM
    document.querySelector(`#score--${activePlayer}`).textContent = totalScore[activePlayer];

    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0DOM.classList.toggle('player--active');
    player1DOM.classList.toggle('player--active');

});

// NOT WORKING YET
// if (totalScore[0] >= 30) {
//     // put winning conditions here
//     console.log('winner');
//     // console.log(`Player ${activePlayer} wins!`);
// };
    // look in css file for winning class to add class