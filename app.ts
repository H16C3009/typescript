function add(num1: number, num2: number) {
    if ( typeof num1 !== 'number' || typeof num2 !== 'number' ){
        throw new Error('入力値が数値ではありません')
    }
    return num1 + num2
}

const num1 = 5
// const num1 = '5'
const num2 = 10

const result = add(num1, num2)

console.log(result);