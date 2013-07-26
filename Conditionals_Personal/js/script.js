// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Conditionals - Personal
// Date: 7.25.13


/*
   If/Else 'calculator' for how much a trip to the movies will cost.
*/

var ticketPrice = 10.00;
var studentPrice = 7.50;
var childPrice = 5.00;
var patronCount = prompt("How many people are going to the movies? Normally priced tickets are $" + ticketPrice);
var childCount;
var studentCount;
/* Original attempt for this variable did not work because the childCount and studentCount variables are not declared until below.
 var normalCount = patronCount - (childCount + studentCount);
 */
var student;
var child;



if(patronCount > 0){
    childCount = prompt("How many are children? Children's ticket prices are $" + childPrice);
    studentCount = prompt("How many are students? Student ticket prices are $" + studentPrice);
    //console.log("Children :" + childCount);
    //console.log("Students :" + studentCount);
    if(childCount > 0){
        child = true;
    }else{
        child = false;
    }
    if(studentCount > 0){
        student = true;
    }else{
        student = false;                                                                                           s
    }
    }else{
    alert("It appears you have no interest in going to the movies.");
    //console.log("It appears you have no interest in going to the movies.");
}

/* Relocated the variable below from above in the original var declaration list. This allows the formula to work as intended.
 var normalCount = patronCount - (childCount + studentCount);
 */
var normalCount = patronCount - childCount - studentCount; // PEMDAS order error in original attempt
// Commented console.log prints out as they are no longer needed"no network"
//console.log("Total Patrons:" + patronCount);
//console.log("Total Children:" + childCount);
//console.log("Total Students:" + studentCount);
//console.log("Total Normal Patrons:" + normalCount);

/*

Moved the variables below to the start of the var declarations so that I could use the static values in the prompts.
var ticketPrice = 10.00;
var studentPrice = 7.50;
var childPrice = 5.00;
*/

var totalCost = (normalCount * ticketPrice) + (studentCount * studentPrice) + (childCount * childPrice);
alert("Total Cost is $" + totalCost + ".");
console.log("Total Cost is $" + totalCost + ".");
//console.log("Total Cost is $" + totalCost + ".");
//console.log("Total Cost is $" + totalCost + ".");
//console.log("Total Cost is $" + totalCost + ".");

