// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Expressions - Wacky Expression
// Date: Thu, Jul 18, 2013

// Random color message.

var userMsg = prompt("What would you like to say?");
var messageSize = prompt("How big would you like the message?\nChoose a number between 1 and 10:");
var randColor1 = Math.floor(Math.random()*255);
var randColor2 = Math.floor(Math.random()*255);
var randColor3 = Math.floor(Math.random()*255);
/*
I'm being told by the IDE that I'm attempting to be too clever with my code.
 var rgbValue = (Number(randColor1),Number(randColor2),Number(randColor3);

 This is a "comma expression"

 Attempted simplification below.

 */
// Testing theory

//var rgbValue = number(randColor1 + "," + randColor2 + "," + randColor3);

// Chrome states that there is an undefined number in the line above.

// Looking at the line, I realize that number /= Number.

var rgbValue = (randColor1 + "," + randColor2 + "," + randColor3);  //converting to number seemed to have no effect.

//document.write(userMsg.fontcolor(Number(randColor1),Number(randColor2),Number(randColor3)).fontsize(6));
// The above only seems to produce black text.

//document.write("<p>" + userMsg.fontcolor(rgbValue) + "</p>");
console.log("Value of Red is " + randColor1);
console.log("Value of Green is " + randColor2);
console.log("Value of Blue is " + randColor3);

document.write("<p>" + userMsg.fontsize(messageSize).fontcolor(rgbValue) + "</p>");  // fontsize seems to only be between 1 and 10 in use. Larger size does not make it actually larger.









