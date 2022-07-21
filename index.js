
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let hasBlackjack = false;
let sum = firstCard + secondCard;
let isAlive = true;

let = message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

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
    renderGame();
}

function newCard() {
    let card = getRandomCard();
    cards.push(card);

    message = "Drawing a new card from the deck!";
    messageEl.textContent = message;

    sum += card;
    renderGame();
}

