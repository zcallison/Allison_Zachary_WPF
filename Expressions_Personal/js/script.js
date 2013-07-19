// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Expressions - Personal Expression
// Date: Thu, Jul 18, 2013


/*

    This is the Personal Expression portion of this week's assignment.
    I am calculating the average cost of the repeating charges on my credit card for the family's entertainment.

*/

// Creating variables

var pymtSrc1 = prompt("We are calculating total and average costs of monthly payments for entertainment.\nPlease enter the payee of your first entertainment source:" );
var src1Amt = prompt("And the payment amount?");
var pymtSrc2 = prompt("Please enter the payee of your second entertainment source:");
var src2Amt = prompt("And the payment amount?");
var pymtSrc3 = prompt("Please enter the payee of your third entertainment source:");
var src3Amt = prompt("And the payment amount?");
var pymtSrc4 = prompt("Please enter the payee of your fourth entertainment source:");
var src4Amt = prompt("And the payment amount?");
var pymtSrc5 = prompt("Please enter the payee of your fifth entertainment source:");
var src5Amt = prompt("And the payment amount?");

/*
I realized when starting my var list that I needed input.
I would have preferred to enter this information into an array to be called upon, but did not have time do the requisite research.
*/

var pymtTotal = Number(src1Amt) + Number(src2Amt) + Number(src3Amt) + Number(src4Amt) + Number(src5Amt);
var pymtAvg = pymtTotal / 5;

console.log("The total of all five payments is $" + pymtTotal + " and the average cost of payment is $" + pymtAvg + ".");
console.log("You are paying a total of $" + pymtTotal + " for an average cost of $" + pymtAvg + ".\nYou are paying " + pymtSrc1 + ": $" + src1Amt + ", "  + pymtSrc2 + ": $" + src2Amt + ", "  + pymtSrc3 + ": $" + src3Amt + ", " + pymtSrc4 + ": $" + src4Amt + ", " + pymtSrc5 + ": $" + src5Amt + ".");