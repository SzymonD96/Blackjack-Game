
let player = {
    name: "Szymon",
    chips: 150
};

let cards = [];
let sum = 0;

let isAlive = false;
let hasBlackjack = false;

let = message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumer =  Math.floor(Math.random() * 13 + 1);
    if (randomNumer >= 11 ) {
        return 10;
    } else if (randomNumer === 1) {
        return 11;
    } else {
        return randomNumer;
    }

}

function renderGame() {

    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function startGame() {
    isAlive = true;
    hasBlackjack = false;
    cards[0] = getRandomCard();
    cards[1] = getRandomCard();
    sum = cards[0] + cards [1];

    while (cards.length > 2) {
        cards.pop();
    }
    
    renderGame();
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard();
        cards.push(card);
        
        message = "Drawing a new card from the deck!";
        messageEl.textContent = message;
        
        sum += card;
        renderGame();
    }
}

