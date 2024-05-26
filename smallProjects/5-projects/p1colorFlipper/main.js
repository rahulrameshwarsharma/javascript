/*
Steps to code this project
#1 take the body
#2

*/

const body = document.getElementsByTagName('body')[0];

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const redColor = Math.floor((Math.random() * 255) + 1);
    const greenColor = Math.floor((Math.random() * 255) + 1);
    const blueColor = Math.floor((Math.random() * 255) + 1);

    let newColor = [redColor, greenColor, blueColor];
    body.style.backgroundColor = `rgb(${newColor})`;
}

randomColor();
