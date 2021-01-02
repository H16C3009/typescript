function add(n1: number, n2: number): number {
    return n1 + n2
    // return n1.toString() + n2.toString()
}

function printResult(num: number): void {
    console.log('Result: ' + num)
}

// let combineValues: Function;
let combineValues: (a:number, b:number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));
console.log(printResult(add(5, 12)))
