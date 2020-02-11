//array of objects
const cardsArray = [{
    'name': 'angrymario',
    'img': 'assets/img/angrymario.png',
},
{
    'name': 'banana',
    'img': 'assets/img/banana.png',
},
{
    'name': 'cloudguy',
    'img': 'assets/img/cloudguy.png',
},
{
    'name': 'coin',
    'img': 'assets/img/coin.png',
},
{
    'name': 'kong',
    'img': 'assets/img/kong.png',
},
{
    'name': 'luigi',
    'img': 'assets/img/luigi.png',
},
{
    'name': 'mario',
    'img': 'assets/img/mario.png',
},
{
    'name': 'mushroom',
    'img': 'assets/img/mushroom.png',
},
{
    'name': 'mushroomboy',
    'img': 'assets/img/mushroomboy.png',
},
{
    'name': 'peach',
    'img': 'assets/img/peach.png',
},
{
    'name': 'shyguy',
    'img': 'assets/img/shyguy.png',
},
{
    'name': 'yoshi',
    'img': 'assets/img/yoshi.png',
}
];




// CREATING A GRID

const gameGrid = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());

//Accessing the memorygame div in HTML. Create a section with a class of gameBoard.
const memorygame = document.getElementById('memorygame')
const gameBoard = document.createElement('section')
gameBoard.setAttribute('class', 'gameBoard')
// gameBoard.setAttribute('onclick', 'checkForMatch(this);');

// Append the section to the memorygame div
memorygame.appendChild(gameBoard);


gameGrid.forEach(item => {
    const { name, img } = item;

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${img})`;

    gameBoard.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

//FLIPPIN' CARDS

//select all card elements
const cards = document.querySelectorAll('.card');

// loop through them with forEach and attach event listener 
//The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// The second parameter is the function we want to call when the event occurs

// the "event" object is always passed to the the event handler function
cards.forEach(card => card.addEventListener('click', cardIsClicked));

function cardIsClicked(event){
    // access the event target (the element that got clicked)
    let card=event.currentTarget; 
    if(openedCards.length == 0){
        displayCard(card);
        openedCards.push(card)
    } else if (openedCards.length == 1) {
        openedCards.push(card)
        displayCard(card);
        checkForMatch()
    } else {
        return;
    }
}



// flipCard function gets triggered upon 
function displayCard(card) {
    //  if (isProcessing) { return; }
    card.classList.add('display'); //display class gets toggled, refer to css
}

// add the card to a *list* of "open" cards 

var openedCards = [];
var matchedCards = [];
let count = 0;
let isProcessing = false;

function checkForMatch() {
    let cardValue0 = openedCards[0].getAttribute("data-name");
    let cardValue1 = openedCards[1].getAttribute("data-name")

    if (cardValue0 === cardValue1) {
        disableCards();
        //save the guessed cards
         matchedCards.push(cardValue0, cardValue1)
        console.log(matchedCards);
    } else {
        unflipCards();
        isProcessing = false;
    }
}


function disableCards() {
    console.log(disableCards);
    openedCards[0].removeEventListener('click', displayCard);
    openedCards[1].removeEventListener('click', displayCard);
    openedCards = []; //this is not emptying the array, why?
}


function unflipCards() {
    console.log(unflipCards);
    setTimeout(() => {
        openedCards[0].classList.remove('display');
        openedCards[1].classList.remove('display');
        openedCards = []; //empty the array
    }, 2000);
}

debugger;

/*function lockBoard(){
    console.log(lockBoard);
    if (openedCards.length === 2) {
       cardsArray[i].classList.add('disabled')};
}*/

//you win
 function winGame(){
     if (matchedCards.length === 26) {

     }
 }

 // game timer
 //setInterval(function, milliseconds). Executes a function after milliseconds, but repeats the execution of the function continuously.

//https://codepad.co/snippet/javascript-stopwatch-using-javascript-and-css
var seconds = 0, minutes = 0; hours = 0;
var timer = document.querySelector(".timer");

function startTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
timer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
 //timer.innerHTML = minutes + "minutes " + seconds + "seconds";
    clock();
}

function clock() {
    t = setTimeout(startTimer, 1000);
}
clock();







