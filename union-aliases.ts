type Combineable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

// 引数に対して、複数の型を指定することができる（タプル型）
function combine(
    input1: Combineable,
    input2: Combineable,
    resultConversion: ConversionDescriptor,
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' ||
        resultConversion === 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    // if (resultConversion === 'as-number') {
    //     return +result
    //     // return parseFloat(result)
    // } else {
    //     return result.toString()
    // }
    // const result = input1 + input2
    return result
}

console.log(combine(30, 26, 'as-number'))

console.log(combine('30', '26', 'as-number'))

console.log(combine('Max', 'Anna', 'as-text'))