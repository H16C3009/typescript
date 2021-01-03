const userName = 'Max'
// userName = "as"

let age = 30

// var result
// function add(a: number, b: number) {
//     let result
//     result = a + b
//     return result
// }

const add = (a: number, b: number = 1) => a + b;

// const add = (a: number, b: number) => {
//     return a + b
// }

// const printOutput: (output: string | number) => void = output => {
//     console.log(output)
// }

const printOutput = (output: string | number): void => {
    console.log(output)
}

printOutput(add(5))

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => {
        console.log(event)
    })
}

