let body = document.querySelector('body');
let buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
            body.style.backgroundColor = e.target.id;
    })
})