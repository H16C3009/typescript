const button = document.querySelector('button');
// const button = document.querySelector('button')!;

function clickHandler(message: string) {
    console.log('clicked' + message)
}


if (button) {
    // a comment 
    button.addEventListener('click', clickHandler.bind(null, " you're welcome"))
}
