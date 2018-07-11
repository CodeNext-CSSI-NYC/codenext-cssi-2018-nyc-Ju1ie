// Julie Leon
// Math.random() * 2
let result;
if(Math.random() * 2 <= 0.5){
  result = "heads"
} else {
  result = "tails"
}
var readline = require("readline-sync");
var guess= readline.question("Guess heads or tails: ");
if(guess == "heads" && result == "heads" || guess == "tails" && result == "tails"){
  console.log("you were right!")
} else {
  console.log("you were wrong!")
}
