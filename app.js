function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('入力値が数値ではありません');
    }
    return num1 + num2;
}
var num1 = '5';
var num2 = 10;
var result = add(num1, num2);
console.log(result);
