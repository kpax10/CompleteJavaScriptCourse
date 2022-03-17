/*
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
*/
/*
'use strict';

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}


var x = 1;
let y = 2;
const z = 3;
*/
// 'use strict';

// // console.log(this);

// // const calcAge = function (birthYear) {
// //     console.log(2037 - birthYear);
// //     console.log(this);
// // }
// // calcAge(1986);

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(1986);

// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();
/*
'use strict';

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }

        // Solution 2
        // This arrow function inherits the `this` from the parent function, or the `jonas` object
        const self = this;
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }

        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => a + b;
*/

'use strict';

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'
console.log(jessica, marriedJessica);

// Copying Objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alcie', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('andy');
console.log(jessica2, jessicaCopy);