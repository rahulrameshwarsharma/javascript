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
    console.log(randomNumber);
    
    if (randomNumber === 1) {
        computerChoices = 'rock';
    }
    if(randomNumber === 2){
        computerChoices = 'paper';
    }
    if(randomNumber === 3){
        computerChoices = 'scissor';
    }
    computerChoice.innerHTML = computerChoices;
    // console.log(computerChoice);
}

function getResult() {
    console.log(computerChoices, userChoiceDisplay)

    if (computerChoices === userChoiceDisplay) {
        results = 'It is a draw!';
    }
    if (computerChoices === 'rock' && userChoiceDisplay === 'paper') {
        results = 'You Win!';
    }
    if (computerChoices === 'rock' && userChoiceDisplay === 'scissor'){
        results = 'You lose!';
    }   
    if (computerChoices === 'paper' && userChoiceDisplay === 'rock') {
        results = 'You lose!';
    }
    if (computerChoices === 'paper' && userChoiceDisplay === 'scissor'){
        results = 'You Win!';
    }
    if (computerChoices === 'scissor' && userChoiceDisplay === 'rock') {
        results = 'You lose!';
    }

    console.log(`Computer choices: ${results}`);

    resultDisplay.innerHTML = results;
}