////////////////////////////
/*
// Functions
'use strict';

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}
const descUsa = describeCountry('USA', 350, 'Washington, DC');
const descPortugal = describeCountry('Portugal', 6, 'Lisbon');
const descCanada = describeCountry('Canada', 37, 'Ottawa');

console.log(descUsa, descPortugal, descCanada);
//////////////////////////////
*/
/*
//////////////////////////////
// Function Declarations vs. Expressions

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }
// const china = percentageOfWorld1(1441);
// const USA = percentageOfWorld1(350);
// const mexico = percentageOfWorld1(131);
// console.log(china, USA, mexico);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
const china = percentageOfWorld2(1441);
const USA = percentageOfWorld2(350);
const mexico = percentageOfWorld2(131);
console.log(china, USA, mexico);
//////////////////////////////
*/
/*
//////////////////////////////
// Arrow Functions

const percentageOfWorld3 = population => (population / 7900) * 100;
const china = percentageOfWorld3(1441);
const USA = percentageOfWorld3(350);
const mexico = percentageOfWorld3(131);
console.log(china, USA, mexico);
//////////////////////////////
*/
//////////////////////////////
// Functions Calling Other Functions

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
    console.log(description);
}

describePopulation('China', 1441);
describePopulation('USA', 350);
describePopulation('Mexico', 131);