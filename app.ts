function add(n1: number, n2: number): number {
    return n1 + n2
    // return n1.toString() + n2.toString()
}

function printResult(num: number): void {
    console.log('Result: ' + num)
}

// function printResult(num: number): undefined {
//     console.log('Result: ' + num)
//     return;
// }


console.log(printResult(add(5, 12)))
