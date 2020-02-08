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
gameBoard.setAttribute('onclick', 'checkForMatch(this);');

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
cards.forEach(card => card.addEventListener('click', displayCard));
cards.forEach(card => card.addEventListener('click', checkForMatch));
//cards.forEach(card => card.addEventListener('click', lockBoard));



// flipCard function gets triggered upon 
function displayCard() {
     if (isProcessing) { return; }
    this.classList.add('display'); //display class gets toggled, refer to css
}

// add the card to a *list* of "open" cards 

var openedCards = [];
var matchedCards = [];
let count = 0;
let isProcessing = false;

function checkForMatch() {
    openedCards.push(this);
     console.log("openedCards = " + openedCards)
    //console.log("openedCards[0].innerHTML = " + openedCards[0].innerHTML)
    //console.log("openedCards[2].innerHTML = " + openedCards[2].innerHTML)
    if (openedCards.length > 2 && openedCards[0].innerHTML === openedCards[2].innerHTML) {
        //(openedCards[0].isEqualNode(openedCards[2])) {
            isProcessing = true;
        disableCards();
        return;
    } else {
        unflipCards();
        isProcessing = false;
    }
}


function disableCards() {
    console.log(disableCards);
    openedCards[0].removeEventListener('click', displayCard);
    openedCards[2].removeEventListener('click', displayCard);
    openedCards = []; //this is not emptying the array, why?
}


function unflipCards() {
    console.log(unflipCards);
    setTimeout(() => {
        openedCards[0].classList.remove('display');
        openedCards[2].classList.remove('display');
        openedCards = []; //empty the array
    }, 1100);
}

//debugger;

function lockBoard(){
    console.log(lockBoard);
    if (openedCards.length === 2) {
       cardsArray[i].classList.add('disabled')};
}

