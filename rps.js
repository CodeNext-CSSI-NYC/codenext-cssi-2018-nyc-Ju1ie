// Julie Leon
const compNum = Math.random() * 3
let compChoice;
if(compNum> 0 && compNum < 1){
  compChoice = "Rock"
} else if(compNum > 1 && compNum < 2) {
  compChoice = "Scissors"
} else if(compNum > 2 && compNum < 3){
  compChoice = "Paper"
}
//console.log("The computer chose:" + compChoice)
var readline = require("readline-sync");
let playerChoice = readline.question("Choose either Rock, Paper, or Scissors:");
if(playerChoice == "Rock" && compChoice == "Rock" || playerChoice == "Scissors" && compChoice == "Scissors" || playerChoice == "Paper" && compChoice == "Paper" ) {
  console.log("The computer chose:" + compChoice)
  console.log("It was a tie!")
} else if (playerChoice == "Rock" && compChoice == "Paper" || playerChoice == "Paper" && compChoice == "Scissors" || playerChoice == "Scissors" && compChoice == "Rock" ) {
  console.log("The computer chose:" + compChoice)
  console.log("You lost!")
} else if (playerChoice == "Paper" && compChoice == "Rock" || playerChoice == "Scissors" && compChoice == "Paper" || playerChoice == "Rock" && compChoice == "Scissors" ) {
  console.log("The computer chose:" + compChoice)
  console.log("You won!")
}
