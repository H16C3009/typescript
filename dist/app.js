"use strict";
let appId = 'abc';
const button = document.querySelector('button');
function add1(num1, num2) {
    if (num1 + num2 > 0) {
        return num1 + num2;
    }
    return;
}
function clickHandler(message) {
    console.log('clicked' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, " you're welcome"));
}
//# sourceMappingURL=app.js.map