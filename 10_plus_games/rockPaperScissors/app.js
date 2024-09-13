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
    }
    if(randomNumber === 2){
        computerChoices = 'paper'
    }
    if(randomNumber === 3){
        computerChoices = 'scissor'
    }

    computerChoice.innerHTML = computerChoices;
}

function getResult() {
    if (computerChoice === userChoice) {
        return results = 'It is a draw!'
    }  
    console.log(`Computer choices: ${results}`);
    if (computerChoice === 'rock' && userChoice === 'paper') {
        results = 'You Win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        results = 'You lose!';
    }   
    if (computerChoice === 'paper' && userChoice === 'rock') {
        results = 'You lose!';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        results = 'You Win!';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        results = 'You lose!';
    }

    resultDisplay.innerHTML = results;
}