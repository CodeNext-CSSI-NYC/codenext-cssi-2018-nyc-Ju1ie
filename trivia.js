// Julie Leon
const readline = require("readline-sync");
console.log(" ☆ Welcome to my trivia game, It's about disney! ☆ ")
var Rapunzel = readline.question("In the movie Tangled, is Rapunzel a princess or just a regular gal with a strict mom (choose between princess or regular gal): ");
if(Rapunzel == "princess"){
 console.log("You were right! The floating lights scene with Flynn was so cute in that movie too")
} else if(Rapunzel == "regular gal"){
  console.log("You were wrong :( Oh well")
}
var Tiana = readline.question("Is Tiana an independent woman focused on her dreams or determined in finding the love of her life (Choose between focused on dreams or focused on love): ");
if(Tiana == "focused on dreams"){
  console.log("Good job! She is independent and isn't appreciated as a princess")
} else if(Tiana == "focused on love"){
  console.log("Wrong! Throughout the movie, she's motivated to make her dreams come true")
}
var infinityWar = readline.question("Do all the original avengers survive the end? (Choose either yes or no): ");
if(infinityWar == "yes"){
  console.log("You're right... the last scene was really sad :(")
} else if(infinityWar == "no"){
  console.log("That's wrong!! They do survive while the others die")
}
var ratatouille = readline.question("Does the movie ratatouille take place in just Paris, France? (choose either yes or no): ");
if(ratatouille == "yes"){
  console.log("That's wrong! At the beginning of the movie, the characters were in the outskirts of Paris, France")
} else if(ratatouille == "no"){
  console.log("That's right! Also the soundtrack for ratatouille was nice")
}
