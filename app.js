function add(n1, n2) {
    return n1 + n2;
    // return n1.toString() + n2.toString()
}
function printResult(num) {
    console.log('Result: ' + num);
}
// let combineValues: Function;
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
console.log(printResult(add(5, 12)));
