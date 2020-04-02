# Mario kart memory game

For Codeinstitute's Interactive Frontend Development Milestone Project.

# About

The Memory Game is a simple game built to test a users memory and other brain functions such as concentration, attention and focus.
The player needs to match each pair of cards to win the game. 

# What will I learn

The memory game presents an opportunity to combine HTML, CSS, and JavaScript into a single project. Aside from working on these 
three aforementioned technologies, I will also work on my DOM manipulation skills. 

# How it works

The board consists of twenty four cards arranged in a grid. The deck is made up of twelve different pairs of cards, each card has a 
different image on one side. All the cards are arranged randomly on the board, the image side is facing down.

The user has to flip two cards at a time in order to find a matching pair. The game can be reset at any moment, simply by clicking on the
reset icon in the top right corner of the screen. Once all the cards have been matched, the winning screen appears with a summary of the 
users'game stats (how many moves, time passed and star rating). If the game is not won within a certain amount of moves, a "game over"
screen appears instead. The user can then choose to play again by clicking on the play button.

Requirements for the game:

 *  main menu with start button and instructions
 *  game screen with a deck of cards. When a card is clicked, the card flips over to reveal the image underneath.
 *  the card is added to an array of opened cards. If the array already contains a card, both cards will be checked for match.
 *  if the cards match, both stay flipped over. In addition, the matching pair is added into another array.
 *  if the cards do not match, both cards are flipped face down and removed from the array.
 *  increment a running timer and a move counter and display it on the page.
 *  display the star rating, as well as a reset button.
 *  if all cards have matched, display a message with the final score.
 *  if the player runs out of moves, display a Game Over screen.

# Technologies used

CSS, Javascript and HTML, Bootstrap, Jasmine.

# Stuff to add in the future

Things to potentially add in the future are different themes, sound effects and various difficulty levels. 

# Demo

![Memory Game screenshot](assets/img/memorygame_demo.jpg?raw=true)

# UX

For this game I have opted for a retro easthetic. I've included pixel-styled colorful graphics and fonts that both kids and adults
can enjoy. The chosen theme for this memory card game is Mario Kart, therefore the accompanying characters are well recognized by everyone.
I have also maintained the same pixelated design as well as the darker colors throughout each "page" so as to promote consistency. 


# Wireframes

The wireframes were drawn up by hand:
![Wireframe](assets/img/wireframe1.jpg?raw=true)
![Wireframe](assets/img/wireframe2.jpg?raw=true)


# Testing

I have used the following validation services to check the validity of my code:

* W3C Markup Validation was used to validate HTML.
* W3C CSS validation was used to validate CSS.
* JSHint was used to validate JavaScript.

Most of my code was tested manually, some of my manual tests included:
* clicking on cards too fast to see if I could flip multiple cards over
* matching all cards to check whether the appropriate screen pops up
* using up all moves to check whether the appropriate screen pops up
* testing all refresh/reset buttons
* toggling music on/off

Some of the code was tested with Jasmine after I completed the game. To do this I created a spec.js file
which represents a test case. In spec.js I wrote my own tests using the jasmine framework and then afterwards I ran 
my jasmine-testing.html file. 

# How to run jasmine tests

To run the tests simply open up the jasmine-testing HTML file in a browser. Once all the files requested via script and link are loaded by
a browser the function window. onload is called, this is when Jasmine actually runs the tests. 
For more info: https://codecraft.tv/courses/angular/unit-testing/jasmine-and-karma/


# Deployment

This site is hosted using GitHub pages: https://marshmello88.github.io/memory_game Any further updates will be automatically 
applied whenever the local changes are pushed to the remote GitHub-hosted repo. After this, the GitHub site should update within 
a few seconds.

# Media

None of the images are owned by me.
Mario Kart png file source: https://favpng.com/
Mario Kart background image: https://www.ecopetit.cat/ecvi/iwibh_screenshot/

.

