//////////////////////////////////
// Values and Variables
// const country = 'USA';
// const continent = 'North America';
// let population = 350000000;

// console.log(country);
// console.log(continent);
// console.log(population);
///////////////////////////////////
// Data Types
// const isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
///////////////////////////////////
// Let, Const, and Var
// language = 'English';
///////////////////////////////////
// Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6000000);
// console.log(population < 33000000);

// const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language + '.';
// console.log(description);
///////////////////////////////////
// Strings and Template Literals
// const description1 = `${country} is in ${continent}, and its ${population} people speak ${language}.`
// console.log(description1);
// ///////////////////////////////////
// // If / Else Statements
// if (population > 33000000) {
//     console.log(`${country}'s population is above average.`)
// } else {
//     console.log(`${country}'s population is ${33000000 - population} below average.`)
// }
///////////////////////////////////
// Type Conversion and Coercion
// 4
// 617
// 23
// false
// 1143
///////////////////////////////////
// Equality Operators

// const numNeighbors = Number(prompt('How many neighbor countries does your country hav?'));

// if (numNeighbors === 1) {
//     console.log('Only 1 border');
// } else if (numNeighbors > 1) {
//     console.log('More than 1 border');
// } else console.log('No borders');
////////////////////////////////////
// Logical Operators

// const country = 'USA';
// const language = 'English';
// const population = 350;
// const isIsland = false;

// if (language === 'English' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country}!`)
// } else console.log(`${country} does not meet your criteria`)
//////////////////////////////////////
//////////////////////////////////////
// Switch Statement

const language = 'mandarin';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place')
        break;
    case 'hindi':
        console.log('number 4')
        break;
    case 'arabic':
        console.log('5th most common language')
        break;
    default:
        console.log('great language too!')
}
