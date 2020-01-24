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

// flipCard function gets triggered upon 
function displayCard() {
  this.classList.toggle('display'); //display class gets toggled, refer to css
}

