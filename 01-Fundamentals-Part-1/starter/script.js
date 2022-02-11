/*
/////////////////////////////
//Values and Variables
let js = 'amazing';
console.log(40 + 8);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'teacher';
//////////////////////////////
*/
/*
//////////////////////////////
//Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
///////////////////////////////
*/
/*
///////////////////////////////
//let, const, and var
let age = 30;
age = 31;

const birthYear = 1990;
birthYear = 1991;

const job;

var job = 'programmer';
job = 'teacher';
///////////////////////////////
*/
/*
///////////////////////////////
//Basic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2010;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 2);

const firstName = 'Jonas';
const lastName = 'S';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
console.log(x);
////////////////////////////////
*/

////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/
/*
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
////////////////////////////////
*/
/*
///////////////////////////////
// Strings and Template literals
const firstName = 'Jonas';
const job = 'teacher';
const bithYear = 1991;
const year = 2037;

console.log(`I'm ${firstName}, a ${year - bithYear} year old ${job}.`);

console.log(`String with
multiple
lines`)
///////////////////////////////
*/
/*
///////////////////////////////
// If /Else Statements
const age = 11;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Not old enough, ${yearsLeft} year(s) left.`)
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(`Born in the ${century} century`);
////////////////////////////////
*/
////////////////////////////////
/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
*/
/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI} is higher than Mark's (${markBMI})!`);
}
/////////////////////////////
*/
/*
/////////////////////////////
// Type Conversion and Coercion

//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear))
console.log(Number(inputYear) + 18);

console.log(String(23));

//Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);


let n = '1' + 1; // 11
n = n - 1; // 11 - 1
console.log(n);
/////////////////////////////
*/
/*
//Truthy and Falsy Values
// 5 values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log('dont spend it all')
} else {
    console.log('you should get a job')
}

let height;
if (height) {
    console.log('YAY height is defined');
} else {
    console.log('height is undefined');
}
///////////////////////////////
*/
/*
///////////////////////////////
//Equality Operator
const age = 18;
if (age === 18) console.log('you just became an adult');

let favorite = Number(prompt('Whats your favorite number?'));
console.log(favorite);

if (favorite === 23) {
    console.log('23 is a great number')
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}
/////////////////////////////////
*/
/////////////////////////////////
//Logical Operators 
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

// const isTired = true; //C

// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive')
// }
//////////////////////////////////
//////////////////////////////////
// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. BONUS 1: Include a requirement for a minimum score of 100.With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw!  So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

TEST DATA:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 11;
// const koalaScore1 = 109;
// const koalaScore2 = 95;
// const koalaScore3 = 16;

// const dolphinAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// const koalaAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

// console.log(`Dolphin Avg:${dolphinAvg}, Koala Avg: ${koalaAvg}`)

// if (dolphinAvg > koalaAvg && dolphinAvg >= 100) {
//     console.log('Dolphins win!');
// } else if (koalaAvg > dolphinAvg && koalaAvg >= 100) {
//     console.log('Koalas win!');
// } else if (koalaAvg >= 100 && dolphinAvg >= 100) {
//     console.log('DRAW!');
// } else console.log('NO ONE WINS!')
///////////////////////////////////
///////////////////////////////////
// Switch Statement

// const day = 'wednesday';

// switch (day) {
//     case 'monday': //day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend');
//         break;
//     default:
//         console.log('not a valid day!')
// }
/////////////////////////////////////
