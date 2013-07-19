// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Expressions - Industry
// Date: Thu, Jul 18, 2013


// A Random Password Generation

var animal = prompt("What is your favorite animal?");
var street = prompt("What street did you grow up on?");
var food = prompt("What is your favorite food?");
var userInfo = [animal, street, food];

console.log(userInfo);
var randomGrab1 = Math.floor(Math.random()*userInfo.length);
var randomGrab2 = Math.floor(Math.random()*userInfo.length);
var randomGrab3 = Math.floor(Math.random()*userInfo.length);
var randomPwd = String((userInfo[randomGrab1] + userInfo[randomGrab2] + userInfo[randomGrab3]));
// I had continued to look at this as needing to convert numbers into strings. I had to research random calls on an Array to find this solution.

console.log(String("Your new random password is: " + randomPwd));

