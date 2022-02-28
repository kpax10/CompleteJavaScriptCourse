// Remember, we're gonna use strict mode in all scripts now!
/*
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


const calcTemoAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i= 0; i < temps.length; i ++) {
        if (typeof temps[i] !== 'number') continue;
        if (temps[i] > max) max = temps[i];
        if (temps[i] < min) min = temps[i];
    }
    console.log(max, min);
    return max - min;
}

const amplitude = calcTemoAmplitude(temperatures);
console.log(amplitude);
*/
//////////////////////////////////////
/*
// Debugging
'use strict;'
debugger;

const measureKelvin = function() {
    const measurement = {
        type: 'temperature',
        unit: 'celsius',
        value: parseInt(prompt('Degrees celsius:'))
    }
    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin());
*/
///////////////////////////////////////
// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12, 5, -5, 0, 4]
*/

// create array
// create function that:
//loops the array, and console logging the array element value with the array position
/*
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
    let str = ``;
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}c in ${i + 1} days `;
    }
    console.log(`${str}...`);
}
printForecast(arr1);
*/