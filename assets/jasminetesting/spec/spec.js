/*describe('card is clicked', function() {


function cardIsClicked(event) {
    // access the event target (the element that got clicked)
    let card = event.currentTarget;
    if (openedCards.length == 0) {
        displayCard(card);
        openedCards.push(card)
    } else if (openedCards.length == 1) {
        openedCards.push(card)
        displayCard(card);
        checkForMatch()
        moveCounter()
        console.log(moveCounter);
    } else {
        return;
    }
}
 
//

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

///

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

    timer.textContent = minutes + " min " + seconds + " s";
    clock();
}

//////////////

var runGame = function () {
    //document.getElementById("start").style.display = "none"; //hide the element
    document.getElementById("gamestart").style.display = "none";

    reset();
}; */

describe('runGame', function() {
        it('all html elements with id gamestart should have display of none', function() {
            runGame();
            expect('#gamestart').toBe("none");
        });
            });
     