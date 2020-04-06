// Sources listed below

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


//Creating a grid

const gameGrid = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());

// Create a section with a class of gameBoard

const memorygame = document.getElementById('memorygame')
const gameBoard = document.createElement('section')
gameBoard.setAttribute('class', 'gameBoard')

// Append the section to the memorygame div

memorygame.appendChild(gameBoard);


gameGrid.forEach(item => {
    const {
        name,
        img
    } = item;

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


// Select all card elements

const cards = document.querySelectorAll('.card');

// loop through them with forEach and attach event listener 

cards.forEach(card => card.addEventListener('click', cardIsClicked));

function cardIsClicked(event) {
    // access the event target (the element that got clicked)
    let card = event.currentTarget;
    if (openedCards.length == 0) {
        displayCard(card);
        openedCards.push(card)
    } else if (openedCards.length == 1) {
        openedCards.push(card)
        displayCard(card);
        moveCounter()
        checkForMatch()
        console.log(moveCounter);
    } else {
        return;
    }
}


// displayCard function gets called when a card is clicked

function displayCard(card) {
    card.classList.add('display');
}

var openedCards = [];
var matchedCards = [];
let count = 0;
let isProcessing = false;

// Clicked cards are added to a *list* of "open" cards and are compared for match. If both match, the pair is added to matchedCards array

function checkForMatch() {
    let cardValue0 = openedCards[0].getAttribute("data-name");
    console.log(cardValue0);
    let cardValue1 = openedCards[1].getAttribute("data-name");
    console.log(cardValue1);
    loseGame();
    if (cardValue0 === cardValue1) {
        console.log("cardsAreMatching");
        disableCards();
        //save the guessed cards
        matchedCards.push(cardValue0, cardValue1)
        winGame();
        console.log(matchedCards);
    } else {
        console.log("cardsDoNotMatch");
        unflipCards();
        isProcessing = false;
    }
}


function disableCards() {
    console.log(disableCards);
    openedCards[0].removeEventListener('click', displayCard);
    openedCards[1].removeEventListener('click', displayCard);
    openedCards = [];
}


function unflipCards() {
    console.log(unflipCards);
    setTimeout(() => {
        openedCards[0].classList.remove('display');
        openedCards[1].classList.remove('display');
        openedCards = [];
    }, 2000);
}

// Timer: https://codepad.co/snippet/javascript-stopwatch-using-javascript-and-css

var seconds = 0,
    minutes = 0;
hours = 0;
var t;
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
    // timer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer.textContent = minutes + " min " + seconds + " s";
    clock();
}

function clock() {
    t = setTimeout(startTimer, 1000);
}
clock();

function stopTimer() {
    clearInterval(t);
}

// moves

var moves = 0;
const movesX = document.querySelector('.moves');
const stars = document.querySelector('.stars');

function moveCounter() {
    moves++;
    console.log(moves);
    movesX.innerHTML = moves;
    loadStars();
    return moves;
}


// stars

function loadStars() {
    switch (moves) {
        case 18:
            stars.innerHTML = `<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>`;
            break;
        case 25:
            stars.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
            break;
        case 30:
            stars.innerHTML = `<li><i class="fa fa-star"></i></li>`;
            break;
        case 35:
            stars.innerHTML = ``;
    }
}


// Function to restart the game: "https://github.com/shannonj498/memory-matching-game/blob/master/js/app.js"
function reset() {
    $(".reset").on("click", function () {
        document.getElementById("gamestart").style.display = "none";
        location.reload()
    });
}

reset();


// game start menu: https://stackoverflow.com/questions/43823180/how-to-create-a-game-menu-for-an-easy-js-game

var runGame = function () {
    document.getElementById("gamestart").style.display = "none";

    reset();
};

var howToPlay = function () {
    document.getElementById("instructions").style.display = "block";
    document.getElementById("return").style.display = "block";
    document.getElementById("menu").style.display = "none";
};

var backToMenu = function () {
    document.getElementById("return").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("credits").style.display = "none";
};

var creditScreen = function () {
    document.getElementById("credits").style.display = "block";
    document.getElementById("return").style.display = "block";
    document.getElementById("menu").style.display = "none";
};

var backToMenu = function () {
    document.getElementById("return").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("credits").style.display = "none";
};

//winning modal

var modal = document.getElementsByClassName("gameEnd")[0];

function winGame() {
    if (matchedCards.length == 24) {
        stopTimer();

        var finalTime = timer.textContent + ".";

        //gray things out
        document.getElementById("memorygame").classList.add('grayedOut');
        document.getElementById("titleMag").classList.add('grayedOut');
        document.getElementById("scoreBoard").classList.add('grayedOut');

        modal.style.display = "block";

        var starRating = document.querySelector(".stars").innerHTML;
        //showing move, rating, time on modal
        document.getElementById("totalMoves").innerHTML = moves;
        document.getElementById("totalStars").innerHTML = "Star rating: " + starRating;
        document.getElementById("totalTime").innerHTML = finalTime;
    };
}

function playAgain() {
    $(".playAgain").on("click", function () {
        location.reload()
    });
}

playAgain();


// Sound: https://siongui.github.io/2012/10/12/javascript-toggle-sound-onclick/

function toggleSound() {
    var marioTheme = document.getElementById('audio');
    if (marioTheme.paused) {
        marioTheme.play()
        document.getElementById('on').style.display = "inline-block";
        document.getElementById('off').style.display = "none";
    } else {
        marioTheme.pause();
        document.getElementById('on').style.display = "none";
        document.getElementById('off').style.display = "inline-block";
    }
};


// Game Over

var modalTwo = document.getElementsByClassName("youLose")[0];

function loseGame() {
    if (moves == 35) {
        stopTimer();
        modalTwo.style.display = "block";
    };
}

function playAgain() {
    $(".playAgain").on("click", function () {
        location.reload()
    });
}

playAgain();

/* Sources:

https://marina-ferreira.github.io/tutorials/js/memory-game/
https://github.com/optimistanoop/memory-game
https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
https://github.com/sandraisrael/Memory-Game-fend
https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/
https://github.com/JavaVista/Project-Memory-Game
http://hexgl.bkcore.com/play/
https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/
https://github.com/shannonj498/memory-matching-game/blob/master/js/app.js
https://siongui.github.io/2012/10/12/javascript-toggle-sound-onclick
https://stackoverflow.com/questions/43823180/how-to-create-a-game-menu-for-an-easy-js-game
https://codepad.co/snippet/javascript-stopwatch-using-javascript-and-css*/