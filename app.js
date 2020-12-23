function add(n1, n2, showResult, phrase) {
    // if ( typeof n1 !== 'number' || typeof 2 !== 'number' ){
    //     throw new Error('入力値が数値ではありません')
    // }
    if (showResult) {
        console.log(phrase + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var num1 = 5;
// const num1 = '5'
var num2 = 10;
var printResult = true;
var resultPhrase = 'Result: ';
var result = add(num1, num2, printResult, resultPhrase);
// console.log(result);
