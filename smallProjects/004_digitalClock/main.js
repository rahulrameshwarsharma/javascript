
let clock = document.getElementById('clockDiv');

setInterval(function() {
    let date = new Date();
    clock =  console.log(date.toLocaleTimeString());
}, 1000);


// let date = new Date();

// console.log(date.toLocaleTimeString());