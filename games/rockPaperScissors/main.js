    // Taking all the id in a variable

let compChoice = document.getElementById('#computer_choice');
let yourChoice = document.getElementById('user_choice');
let resultOfChoice = document.getElementById('result');
let allChoices = document.querySelectorAll('button');
console.log(allChoices)

let DisplayCompChoice;

allChoices.forEach(function(choices){

    choices.addEventListener('click', function(e){
        let ChoiceId = e.target.id;
            yourChoice.innerHTML = ChoiceId;

            // Initiate computerChoice function and getResult function here
        generateComputerChoice();
        // getResult()
    })
})



function generateComputerChoice() {

    let randomNum = Math.floor(Math.random() *3) + 1;

        if (randomNum === 1) {
            DisplayCompChoice === 'rock';
        }
        if (randomNum === 2) {
            DisplayCompChoice === 'paper';
        }
        if (randomNum === 3) {
            DisplayCompChoice === 'scissor';
        }
        console.log(DisplayCompChoice);

        // compChoice.innerHTML === DisplayCompChoice;
}