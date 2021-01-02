// 引数に対して、複数の型を指定することができる（タプル型）
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // const result = input1 + input2
    return result;
}
console.log(combine(30, 26));
console.log(combine('Max', 'Anna'));
