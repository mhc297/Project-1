# Project-1

A single-player racing game.
Any collision with the obstacles or the game board edges ends the game.
Uses jQuery to randomly circle divs as obstacles for the player to avoid and tallies the score.

https://mhc297.github.io/

INSTRUCTIONS:

Use the 'a', 'w', 's' & 'd' keys to move left, up, right & down respectively


FEATURES

Randomization:

The game runs a math.random function multiple times when cycling through the divs to randomize the movement of the game’s obstacles.

Collision Detection:

Uses the offset of both the player and the obstacles to detect a collision and end the game.

Scoring:

Monitors the new obstacles being created to tally a player score.

Forms:

Uses jQuery forms to pull the player’s name from the landing page to the main game page.


CONSTRAINTS & CHALLENGES

Randomization:

Was only able to generate the same six obstacles over and over, would prefer to have a library to pull from the randomly generate individually.
Margins:

Obstacle cars frequently generate on top of each other, was unable to fix using margins.
Future Additions:

Add high score functionality, multiple players and different families of obstacles.
