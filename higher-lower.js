// Julie Leon
var randomInt = require('random-int');
var readline = require("readline-sync");
let die1 = randomInt(1,6)
let die2 = randomInt(1,6)
console.log("The die landed on " + die1);
var guess = readline.question("Do you think the next roll will be higher, lower, or the same as the first roll: ");
console.log("This time, the die landed on " + die2);
if(die1 > die2 && guess == "lower" || die1 < die2 && guess == "higher" || die1 == die2 && guess == "the same"){
  console.log("You were right!")
} else if (die1 > die2 && guess == "higher" || die1 > die2 && guess == "the same" || die1 < die2 && guess == "lower" || die1 < die2 && guess == "the same" || die1 == die2 && guess == "higher" || die1 == die2 && guess == "lower") {
  console.log("You were wrong!")
}
