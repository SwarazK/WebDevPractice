// function getCard() {
//     let card = Math.floor(Math.random() * 13 ) + 1;
//     if(card == 1) return 11;
//     else if(card>=11 && card<=13) return 10;
//     else return card;
// }

// function gen(){
//     let firstCard = getCard();
//     let secondCard = getCard();
//     let sum = firstCard + secondCard;
//     console.log(sum);
//     if(sum > 21) console.log("You're out!!");
//     else if(sum == 21) console.log("BlackJack!!!");
//     else console.log("Do you want to draw a new card?");
// } 
// =================================================================================================

// let myObject = {
//     size : 6,
//     name : "big",
//     why : "yes"
// }

// console.log(myObject.size + " " + myObject.name + " " + myObject.why);
// 
// =================================================================================================

let cards = [];
let player = {
    name : "Player",
    chips : 500
};
let sum = 0;
let game_state = -1; // 0 : Base state, 1 : Won, -1 : Not Started, 2 : Lost


let info_element = document.getElementById("game-info");
let current_element = document.getElementById("current-cards");
let sum_element = document.getElementById("current-sum");
let start_btn_element = document.getElementById("start-btn");
let player_info_element = document.getElementById("player-info");


// Updates current cards displayed, updates sum display, finally checks for game-over states and updates the info_element and game_state accordingly
function renderAndCheckState(){
    // Updates current cards displayed, updates sum display, finally checks for game-over state and updates the info_element and game_state accordingly

    let current_cards = "Cards :";
    for(let i = 0; i < cards.length; i+=1)  current_cards += " " + String(cards[i]);
    current_element.textContent = current_cards;
    
    sum_element.textContent = "Sum : " + sum;

    if(sum > 21){
         info_element.textContent = "You're out!!";
         game_state = 2;
    }
    else if(sum == 21){
         info_element.textContent = "BlackJack!!!";
         game_state = 1;
    }
    else{
         info_element.textContent = "Do you want to draw a new card?";
         game_state = 0;
    }
}


// Updates sum, adds a card to the cards array, doesnt return anything
function drawCard(){
    // Updates sum, adds a card to the cards array, doesnt return anything

    let card = Math.floor(Math.random() * 13 ) + 1;

    if(card == 1) cards.push(11);
    else if(card>=11 && card<=13) cards.push(10);
    else cards.push(card);

    sum += cards[cards.length-1];
}


// Change the amount of chips based on previous game_state, stop if chips <= 0, update info_element and set game_state to the base state, 
// input the name of the player if its the first round and update the corresponding field and element, 
// display the name and chips, 
// reset sum and cards, draw two cards and call renderAndCheckState
function startGame(){
    // Change the amount of chips based on previous game_state and stop if chips <= 0 and update info_element, 
    // input the name of the player if not done previously and update the corresponding field, 
    // display the name and chips, 
    // reset sum and cards, draw two cards and call renderAndCheckState

    if(game_state == 1) player.chips += 50;
    else if(game_state == 2) player.chips -= 50;
    game_state = 0;

    if(player.chips > 0){
        if(player.name === "Player") player.name = prompt("Enter your name");
        player_info_element.textContent = player.name + " : $" + player.chips;
        sum = 0;
        cards.length = 0;

        drawCard();
        drawCard();
        renderAndCheckState();
    }
    else{
        player_info_element.textContent = player.name + " : $" + player.chips;
        info_element.textContent = "You're out of chips please reset";
    }
    
}


// Check if game is in a legal state, call drawCard and renderAndCheckState
function newCard(){
    // Check if game is in a legal state, call drawCard and renderAndCheckState
    if(game_state == -1) info_element.textContent = "First start a game";
    else if(game_state == 2 || game_state == 1)  info_element.textContent = "Start a new game";
    else{
        drawCard();
        renderAndCheckState();
    }
}