"use strict";
function add(n1, n2) {
    return n1 + n2;
    // return n1.toString() + n2.toString()
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
    // return result;
});
// let combineValues: Function;
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
// console.log(combineValues(8, 8));
// console.log(printResult(add(5, 12)))
