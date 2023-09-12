let name = "Jimmy Tran";
let age = "20";
let favFruit = "Banana";

const input = require('readline-sync');
let userAnswer = input.question("How ya doin? ");
console.log("I'm doing " + userAnswer);
console.log(`or using string interpolation ${userAnswer}`);


