const computerChoice = document.getElementById('computer_choice');
const userChoice = document.getElementById('user_choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoiceDisplay;
let computerChoices;
let results;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoiceDisplay = e.target.id
    userChoice.innerHTML = userChoiceDisplay;
    
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) +1;
    
    if (randomNumber === 1) {
        computerChoices = 'rock'
    }else if(randomNumber === 2){
        computerChoices = 'paper'
    }else{
        computerChoices = 'scissor'
    }

    computerChoice.innerHTML = computerChoices;
}

function getResult() {
    if (computerChoice === userChoice) {
        results = 'It is a draw!'
    }

    else if (computerChoice === 'rock' && userChoice === 'paper') {
        results = 'You Win!'
    }else if (computerChoice === 'rock' && userChoice === 'scissors'){
        results = 'You lose!';
    }
    
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        results = 'You lose!';
    }else if (computerChoice === 'paper' && userChoice === 'scissors'){
        results = 'You Win!';
    }
    
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        results = 'You lose!';
    }else {
        results = 'You Win!';
    }

    resultDisplay.innerHTML = results;
}