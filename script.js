
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13)+1
    if(randomCard > 10) {
        return 10
    }
    else if(randomCard === 1) {
        return 11
    }
    else {
        return randomCard
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i=0; i<=cards.length-1; i++) {
        cardsEl.textContent += cards[i] +" "
    }
    sumEl.textContent = "Sum: "+sum
    if(sum < 21) {
        message = "Do you want another round?"
    }
    else if(sum === 21) {
        message = "You won, It's black Jack!"
        hasBlackJack = true
    }
    else {
        message = "Try again next time!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let lastCard = getRandomCard()
        sum += lastCard
        cards.push(lastCard) //lastCard is to be pushed to cards
        console.log(cards) 
        renderGame()
    }
}

