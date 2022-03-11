'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(age);
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven'
            const str = `Oh, you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT';
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
    };
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);