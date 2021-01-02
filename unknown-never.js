"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    // スクリプトがクラッシュするかtry-catchするか（絶対に値を返さないnever型）
    throw { message: message, errorCode: code };
    // while (true);
}
var result = generateError('happend server error', 500);
console.log(result);
