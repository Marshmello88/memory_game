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

CSS, Javascript and HTML, Bootstrap.

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

The site's functionality was manually tested. 

I. Start screen

* Does each menu item increase in size/change color when hovered over? 
   - Yes/Pass

* Does the size/color go back to the original state when onhovered?
   - Yes/Pass

* Does the sound toggle on and off?
   - Yes/Pass

* Does the how-to-play button open up a screen with instructions?
   - Yes/Pass

* Does the return button return to main menu?
   - Yes/Pass



II. Responsiveness

* Does the game board behave responsively when viewed on all screen sizes? 
   - Yes/Pass

* Does the score board bar behave responsively when viewed on all screen sizes?
   - Yes/Pass

* Does the win-game screen appear in the center of the game board on all devices?
   - Yes & No/Partial Pass
     - Note: I have tested on the following screen sizes: Laptop with MDPI screen, Galaxy S5, Pixel 2, Pixel 2XL, iPhone 5/SE,
     iPhone 6/7/8, iPhone X, iPad, iPad Pro, iPhone 6/7/8 plus. I have tried to center the win game pop-up on most popular devices, 
     however on iPhone 6/7/8 plus it is slightly pushed upwards. This is due to conflict with other media queries, as such I've decided 
     to leave it like it is on this particular set of devices.


III. The Game itself

* Does the deck lock all other cards once two cards are flipped over? 
    - Yes/Pass

* Does the win game screen appear once all cards are matched?
    - Yes/Pass 

* Does the game over screen appear once the user runs out of moves?
    - Yes/Pass

* Does the reset button reset the scoreboard and the deck? 
    - Yes/Pass

* Are the number of moves displayed correctly?
    - Yes/Pass

* Is the star rating displayed correctly?
    - Yes/Pass

IV. Modals

* Does the win game screen contain the correct player stats?
   - Yes/Pass

* Does the timer stop when the pop-up appears?
    - Yes/Pass

* Is the play again button on the win game screen functional?
   - Yes/Pass

* Is the restart game button on the game over screen functional?
   - Yes/Pass


# Deployment

This site is hosted using GitHub pages: https://marshmello88.github.io/memory_game Any further updates will be automatically 
applied whenever the local changes are pushed to the remote GitHub-hosted repo. After this, the GitHub site should update within 
a few seconds.

# Media

None of the images are owned by me.
Mario Kart png file source: https://favpng.com/
Mario Kart background image: https://www.ecopetit.cat/ecvi/iwibh_screenshot/

