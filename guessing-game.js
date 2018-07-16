// Julie Leon

// This game has already been discussed in the notes on the site.
// Do not look back at those notes, that would ruin the learning.
// If you have not yet done so, run npm install random-int in terminal.
// Google "npm random-int" to see how it works.
// We will make a guessing game as follows:
// // Set a random number from 1 to 100 to be the answer.

// var randomInt = require('random-int');
// var readline = require("readline-sync");
// let card = randomInt(1, 100)
// let guess = randomInt(1, 100)
// console.log("The card is " + card);
// var guessing = readline.question("Do you think the next roll will be higher, lower, or the same as the first roll: ");
// console.log("This time, the die landed on " + guess);
// if (card > guess && guessing == "lower" || card < guess && guessing == "higher" || card == guess && guessing == "the same") {
//   console.log("You were right!")
// } else if (card > guess && guessing == "higher" || card > guess && guessing == "the same" || card < guess && guessing == "lower" || die1 < die2 && guess == "the same" || die1 == die2 && guess == "higher" || die1 == die2 && guess == "lower") {
//   console.log("You were wrong!")
// }


// Ask the user to guess a number.
// If they're wrong, you should ask them to guess again.
// Each time they guess, you should be telling them if their guess was too high or too low.
// Also, you should be tracking how many times they have guessed.
// Then, at the end, when you tell them that they guessed correctly,
// you should mention how many guesses it took them.