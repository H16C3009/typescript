"use strict";
const userName = 'Max';
let age = 30;
const add = (a, b = 1) => a + b;
const printOutput = (output) => {
    console.log(output);
};
printOutput(add(5));
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => {
        console.log(event);
    });
}
const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking', ...hobbies];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name: 'max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
//# sourceMappingURL=app.js.map