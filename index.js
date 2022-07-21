let firstCard = 10;
let secondCard = 7;
let nextCard = 4;
let hasBlackjack = false;
let sum = firstCard + secondCard;
let isAlive = true;

let = message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {

    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
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

// function newCard() {

//     message = "Drawing a new card from the deck!";
//     messageEl.textContent = message;
//     sum += nextCard;
//     startGame();
// }

