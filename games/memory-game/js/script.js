const cardArray = [
    {
        name: 'fries',
        img: './images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'milkshake.png',
        img: 'images/milkshake.png',
    },
    {
        name: 'fries',
        img: './images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'milkshake.png',
        img: 'images/milkshake.png',
    },
];

// console.log(cardArray);

// Sort method in javascript
cardArray.sort(()=> 0.5 - Math.random());

const gridElement = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];

let cardsWon = [];

console.log(gridElement);

function createBoard () {
    for (let i=0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);

        // console.log(card, i);
        gridElement.appendChild(card);
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');

    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    console.log(cards);
    console.log('check for match!');

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './images/blank.png');
        cards[optionTwoId].setAttribute('src', './images/blank.png');
        alert('You have clicked the same image!');
    }

    if(cardsChosen[0] == cardsChosen[1]) {
        alert("Match found")
        cards[optionOneId].setAttribute('src', './images/white.png');
        cards[optionTwoId].setAttribute('src', './images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', './images/blank.png');
        cards[optionTwoId].setAttribute('src', './images/blank.png');
        alert('Sorry try again');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'congratulations you found them all!';
    }
}

function flipCard() {
    // console.log(cardArray);
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);

    // console.log(cardArray[cardId].name);

    console.log('clicked', cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);

    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}