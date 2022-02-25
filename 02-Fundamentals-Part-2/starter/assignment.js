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
/*
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
*/
/*
//////////////////////////////
// Arrays

const populations = [350, 120, 19, 7];
console.log(populations.length === 4);
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);
//////////////////////////////
*/
/*
//////////////////////////////
// Array Methods

const neighbors = ['USA', 'Mexico', 'Canada'];

neighbors.push('Utopia');
neighbors.pop('Utopia');

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European Country');
}

neighbors[neighbors.indexOf('Canada')] = 'Republic of Canada';
console.log(neighbors);
//////////////////////////////
*/
/*
//////////////////////////////
// Introduction to Objects

const myCountry = {
    country: 'USA',
    capital: 'Washington, D.C.',
    language: 'English',
    population: 350,
    neighbors: ['Mexico', 'Canada']
}
console.log(myCountry)
*/
/*
//////////////////////////////
// Dot vs. Bracket Notation

const myCountry = {
    country: 'USA',
    capital: 'Washington, D.C.',
    language: 'English',
    population: 350,
    neighbors: ['Mexico', 'Canada']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`)

myCountry.population = 352;
console.log(myCountry.population)
myCountry['population'] = 350;
console.log(myCountry.population);
/////////////////////////////////
*/
/*
/////////////////////////////////
// Object Methods

const myCountry = {
    country: 'USA',
    capital: 'Washington, D.C.',
    language: 'English',
    population: 350,
    neighbors: ['Mexico', 'Canada'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
    },
    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
}
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
console.log(myCountry.isIsland);
/////////////////////////////////
*/
/*
// For Loops

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`)
}
*/
/*
/////////////////////////////////
// Looping Arrays, Breaking, and Continuing

const populations = [350, 120, 19, 7];
const percentages2 = [];
function percentageOfWorld(population) {
    return population / 7900 * 100;
}

for (let i = 0; i < populations.length; i++) {
    const perc = (percentageOfWorld(populations[i]));
    percentages2.push(perc);
}

console.log(percentages2);
//////////////////////////////////
*/

