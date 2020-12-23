function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if ( typeof n1 !== 'number' || typeof 2 !== 'number' ){
    //     throw new Error('入力値が数値ではありません')
    // }
    if (showResult) {
        console.log(phrase + (n1 + n2))
    } else {
        return n1 + n2
    }
}

const num1 = 5
// const num1 = '5'
const num2 = 10
const printResult = true
const resultPhrase = 'Result: '

const result = add(num1, num2, printResult, resultPhrase)

// console.log(result);