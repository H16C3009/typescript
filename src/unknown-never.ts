let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'

if (typeof userInput === 'string') {
    userName = userInput
}

function generateError(message: string, code: number): never {
    // スクリプトがクラッシュするかtry-catchするか（絶対に値を返さないnever型）
    throw { message: message, errorCode: code }
    // while (true);
}

const result = generateError('happend server error', 500);
console.log(result)

