
// let timer = document.getElementById("time");

// function startClock () {
//     timer.innerHTML = ""
// }

let secondsElapsed = 0;
let interval = 0;

const time = document.getElementById("time");

function twoDigit(value) {
    return String(value).padStart(2, "0");
}

function setTimer() {
    let minutes = Math.floor(secondsElapsed / 60);
    let seconds = Math.floor(secondsElapsed % 60);
    time.innerHTML = `${twoDigit(minutes)}:${twoDigit(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTimer();
}


function startClock() {
    if(interval) stopClock();
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval);
}

function resetClock() {
    clearInterval(interval);
    secondsElapsed = 0;
    setTimer();
}