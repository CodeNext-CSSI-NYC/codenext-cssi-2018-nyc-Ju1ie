// Julie Leon

// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.
// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
var readline = require("readline-sync");
var userNumber = readline.question("Enter a number:");
console.log("The square root of " + userNumber + " is " + Math.sqrt(userNumber));
// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
var userName = readline.question("Enter your name: ")
var str = userName;
var number = str.length;
console.log("Your name has " + number + " letters");
// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
var userWord = readline.question("Enter any word: ")
var st = userWord;
var res = st.charAt(0);
console.log("The word " + userWord + " starts with the letter " + res);
// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.
var userNumber1 = readline.question("Enter a number: ")
var userNumber2 = readline.question("Enter another number: ")
var average = (userNumber1+userNumber2)/2;
console.log("The average of " + userNumber1 + " and " + userNumber2 + " is " + average);
