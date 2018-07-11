// Julie Leon

// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

// 1. Ask the user for a number and print whether it is positive or negative or zero.
// var readline = require("readline-sync");
// var userNumber = readline.question("Enter a number:");
// if(userNumber >= 1){
//   console.log("Your number is positive")
// } else if(userNumber < 0){
//   console.log("Your number is negative")
// } else if(userNumber == 0){
//   console.log("your number is zero")
// }

// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
// var readline = require("readline-sync");
// var num1 = readline.question("Enter your first number:");
// var num2 = readline.question("Enter your second number:");
// var num3 = readline.question("Enter your third number:");
// if(num1 > num2 && num1 > num3){
//   console.log("Your first number is the biggest number")
// } else if (num2 > num1 && num2 > num3) {
//   console.log("Your second number is the biggest number")
// } else if (num3 > num1 && num3 > num2){
//   console.log("Your third number is the biggest number")
// }
// 3. Ask the user for a number and print whether it is odd or even
 // var readline = require("readline-sync");
 // var userNum = readline.question("Enter a number:");
 // if(userNum % 2 ){
 //   console.log("your number is odd")
 // } else {
 //   console.log("your number is even")
 // }
// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
 // var readline = require("readline-sync");
 // var letter = readline.question("Enter a letter:");
 // if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
 //   console.log("Your letter is a vowel") } else {
 //    console.log("your letter is a consonant")
 //  }
// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
// var readline = require("readline-sync");
// var year= readline.question("Enter a year:");
// let ifLeap = year % 4
// if(ifLeap == 0){
//   console.log("It's a leap year!")
// } else {
//   console.log("it isn't a leap year!")
// }

// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
// var readline = require("readline-sync");
// var year= readline.question("Have you been a citizen for at least 9 years (yes or no):");
// var age= parseFloat(readline.question("How old are you?: "));
// var ny = readline.question("Do you live in the New York state? (yes or no): ");
// if(year == 'yes' && age >= 30 && ny == 'yes'){
//   console.log("You can run for senate in NY")
// } else {
//   console.log("You can't run for senate in NY")
// }
// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// var readline = require("readline-sync");
// var num= parseFloat(readline.question("Enter a whole number that's 1-7:"));
// if(num == 1){
//   console.log("The day is Monday.")
// } else if(num == 2) {
// console.log("The day is Tuesday")
// } else if(num == 3) {
// console.log("The day is Wednesday")
// } else if(num == 4) {
// console.log("The day is Thursday")
// } else if(num == 5) {
// console.log("The day is Friday")
// } else if(num == 6) {
// console.log("The day is Saturday")
// } else if(num == 7) {
// console.log("The day is Sunday")
// }
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
