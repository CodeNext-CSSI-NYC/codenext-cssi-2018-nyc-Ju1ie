// Julie Leon

// 1. We did this last time, but we are going to do it again to make sure you can.
// Do not look back and copy. Then you would not be learning.
// Ask the user to guess a password.
// Keep asking them until they get it right.
// // At the end, tell them how many guesses it took them.
// let readline = require("readline-sync");
// let secretPassword = "axolotl";
// let guess = readline.question("Enter password: ");
// while (guess != secretPassword) {
//   let guess = readline.question("Wrong! try again: ");
//   guess++;
//   console.log("congrats! you got it")
// }

// 2. Make a for loop that prints out the numbers from 0 to 9.
// for (var count = 0; count <= 9; count++) {
//   console.log(count);
// }
// 3. Make a for loop that prints out the even numbers from 0 to 100.
// Note that there are two ways to do this. One way is to use i += 2 instead of i++.
// This makes i go up by two each time, so that it skips odd numbers.
// The other way is to use an if statement inside the for loop that only prints
// even numbers. Make sure you can do it both ways. (As in, actually do it both ways.)
// for (var i = 0; i <= 100; i += 2) {
//   console.log(i)
// }
// for (var i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }

// 4. Make a variable called sum that is equal to 0.

//go back to make edits

// var readline = require("readline-sync");
// let sum = 0;
// // Keep asking the user to enter in numbers until all of the numbers they have typed in
// // add up to more than 100 in total.
// var userNumber = parseFloat(readline.question("Enter a number: "));
// for (var i = 0; i != 100; i++) {
//   var userNumber2 = parseFloat(readline.question("Enter another number: "));
//   sum = userNumber + userNumber2;
//   console.log(sum);
// }
// For example, it might end after two times through the loop if I type 77, 44.
// But it might take many more attempts if I type 1, 1, 1, 1, 1 ....



// 5a. Use a loop to make this pattern:
// let empty = [];
// for (var i = 1; i <= 6; i++) {
//   empty.push("*");
//   console.log(empty);
//   //   console.log("*");
// }
// *
// **
// ***
// ****
// *****
// ******


// 5b. Use a loop to make this pattern:
// let asterisks = ["***********"]
// let count;
// for (count = 1; count <= 7; count++) {
//   console.log(asterisks)
// }
// // ***********
//
// ***********
//
// ***********
//
// ***********
//
// ***********
//
// ***********
//
// ***********
//


// // 6. Use this line:

// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for (var i = 0; i < alphabet.length; i++) {
//   letter = alphabet.charAt(i);
//   console.log(letter.toLowerCase())
//
// }
// Set up a for loop that goes through this string.
// Do not use 26 or 25 in your for loop. Instead use the .length property of strings.
// Inside the for loop, store the corresponding letter for each index in a variable called letter.
// Then, print out the toLowerCase() version of each letter.
// You should see the alphabet, in lower case, with a new letter on each line.



// 7. Last time we listed out all of the factors of a number.
// This time we will do something similar: we will check if a number is a perfect number.
// A perfect number is one where all of the factors (other than the number itself)
// add up to the number itself.
// We will write a function that returns true or false, depending on whether or not it is perfect.
// See https://en.wikipedia.org/wiki/List_of_perfect_numbers if you want to.
// 6 is perfect: 1 + 2 + 3 = 6.
// 28 is too: 1 + 2 + 4 + 7 + 14 = 28
// No other small numbers are.
// Write a function that takes in a number uses a for loop to go through the
// values from 1 to number - 1 and add together all the ones that are factors of
// number. Return true if this sum is equal to number, false otherwise.
// Make sure it returns true for 6 and 28 and false for pretty much anything else.