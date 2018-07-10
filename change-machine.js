// Author: Julie Leon
var readline = require("readline-sync");
console.log("Hey there! I'm a change machine :)");
var cents = readline.question("Please enter cents as a positive integer:");
 const quarters = Math.floor(cents / 25);
 let centRemainder;
 centRemainder = (cents % 25);

 let dimes = Math.floor(centRemainder / 10);
 centRemainder = (centRemainder % 10);

 let nickels = Math.floor(centRemainder / 5);
 let pennies = (cents % 5);

 console.log( cents + " cents makes \n" + quarters + " quarters \n" + dimes  + " dimes \n" + nickels + "nickels \n" + pennies + " pennies");
