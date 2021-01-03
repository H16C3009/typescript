let appId = 'abc'
const button = document.querySelector('button');
// const button = document.querySelector('button')!;

function add1(num1: number, num2: number) {
    if (num1 + num2 > 0) {
        return num1 + num2;
    }
    return;
}


function clickHandler(message: string) {
    // let userName = 'Max'
    console.log('clicked' + message)
}


if (button) {
    // a comment 
    button.addEventListener(
        'click',
        clickHandler.bind(null, " you're welcome"),
    );
}
