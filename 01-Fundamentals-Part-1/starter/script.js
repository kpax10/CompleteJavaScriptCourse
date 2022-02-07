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