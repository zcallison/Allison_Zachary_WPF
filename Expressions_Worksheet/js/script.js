// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Expressions Worksheet
// Date: Thu, Jul 18, 2013


// Dog Years

/*

 Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  Calculate how old Sparky the pit bull is in dog years based on his actual age.
 Givens:
 Sparky’s age.
 Result Varable:
 Sparky’s age in dog years.
 Result to Print:
 “Sparky is X human years old which is X in dog years.

 */

var sparkyAge;

sparkyAge = 5;
var sparkyAgeDog = (sparkyAge * 7);

console.log(sparkyAgeDog);

/*
console.log("Sparky is "sparkyAge" human years old which is "sparkyAgeDog" in dog years.");
--Failed first attempt at printing result using variable.
*/

console.log("Sparky is " + sparkyAge + " human years old which is " + sparkyAgeDog + " in dog years.");
// Success! - Prints to log as intended.
// alert("Sparky is " + sparkyAge + " human years old which is " + sparkyAgeDog + " in dog years.");
// Alert added. Prints the same text as console.log in an alert.
// Alert disabled by commenting out so as to not confuse source code in the remainder of the assignment.

// Slice of Pie - Part 1

/*

 A bunch of students are having a party and somebody ordered pizza.
 Create an expression that calculates how much pizza each partygoer will get at the party.
 (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)

 Given:
 Number of slices per pizza
 Number of people at the party
 Number of pizzas ordered.
 Result Variables:
 Number of slices per person. (Can be a decimal or floating point).
 Result to Print:
 “Each person ate X slices of pizza at the party.”

 */

var numberPizzas;
var partyGoers;
var slicePerPizza;
var slicePerPerson;
/*
numberPizzas = 15;
partyGoers = 9;
slicePerPizza = 17.4;

numberPizzas = 4;
partyGoers = 10;
slicePerPizza = 8;

First set was my original testing for Part I. Second set is testing to proove theory in Part II.
*/

numberPizzas = 15;
partyGoers = 9;
slicePerPizza = 8;

slicePerPerson = numberPizzas * slicePerPizza / partyGoers;
console.log("Each person ate " + slicePerPerson +" slices of pizza at the party.");
//alert("Each person ate " + slicePerPerson +" slices of pizza at the party.");
//Alert added, tested, and disabled to verify. Current math states a round number despite decimal value for slicePerPizza

// Slice of Pie - Part 2

/*

 At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests.
 Assume guests get whole slices, how many whole slices will Sparky feast on?
 Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices.
 (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)

 Given:
 Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.
 Result Variables:
 Number of slices Sparky gets to eat.
 Result to Print:
 “Sparky got X slices of pizza.”

 */

var sparkySlice;
sparkySlice = numberPizzas * slicePerPizza % partyGoers;

// console.log(sparkySlice);
// Console print disabled as I tested code and verified my math worked with given example math.

console.log("Sparky got " + sparkySlice + " slices of pizza.")
//alert("Sparky got " + sparkySlice + " slices of pizza.")
//Alert added, tested, and disabled to verify.


// Average Shopping Bill

/*

 You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks.
 Store the past five grocery totals as a list in an array.
 Create an expression that will use the items in the array to calculate the average amount spent on groceries.
 Please note: there should only be one given for this problem set, the array holding the five weekly totals.
 You should be able to access the array using the array access notation discussed earlier in the course.

 Givens:
 An array with five weekly grocery totals.
 Result Variable:
 Total amount spent on groceries.
 Average weekly grocery spending.
 Result to Print:
 “You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week”

 */

var groceryCost;
groceryCost = [413.89, 517.32, 348.91, 627.18, 426.84]; // 0, 1, 2, 3, 4 - Arrays all start at position 0 moving forward by 1.

/*
var gC0 = groceryCost[0];
var gC1 = groceryCost[1];
var gC2 = groceryCost[2];
var gC3 = groceryCost[3];
var gC4 = groceryCost[4];

Good idea for a verbose implementation of code. Incredibly useful in theory if I was not in an IDE that would allow for tab-completion of variables.
Poor usage in WebStorms as it is creating needless work.
*/

/*
var aggregateCost =  (groceryCost[0] + groceryCost[1] + groceryCost[2] + groceryCost[3] + groceryCost[4]);
console.log("You have spent a total of $" + groceryCost + " on groceries over 5 weeks.");

So I made a variable, then did not call on it. I'm glad that I know I don't spend the national debt in groceries monthly.
*/

var aggregateCost =  (groceryCost[0] + groceryCost[1] + groceryCost[2] + groceryCost[3] + groceryCost[4]);
//console.log("You have spent a total of $" + aggregateCost + " on groceries over 5 weeks.");
// Console print disabled as I tested code and verified my math worked
var averageCost = aggregateCost / 5;
//console.log("That is an average of $" + averageCost + " per week.");
// Console print disabled as I tested code and verified my math worked
console.log("You have spent a total of $" + aggregateCost + " on groceries over 5 weeks. That is an average of $" + averageCost + " per week.");
//alert("You have spent a total of $" + aggregateCost + " on groceries over 5 weeks. That is an average of $" + averageCost + " per week.");
//Alert added, tested, and disabled to verify.


// Discounts

/*

 Calculate the discounted price for an item.
 Create an expression that will calculate the discounted price with and without sales tax.
 (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)

 Givens:
 Original price
 Discount percentage (20% would be 20, for example)
 Description of item
 Sales tax percentage
 Result Variables:
 Price of the item with tax
 Price of the item without tax
 Result to Print:
 “Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.”

 */

var origPrice;
var discountPct;
var prodDesc;
var salesTaxPct;
var costPreTax;
var costPostTax;

origPrice = 5;
discountPct = 15;
prodDesc = "delightfully creamy pastry";
salesTaxPct = .08;
costPreTax = origPrice - (origPrice / discountPct);
//console.log(costPreTax);
// Console print disabled as I tested code and verified my math worked
costPostTax =  costPreTax * salesTaxPct + costPreTax;
//console.log(costPostTax);
// Console print disabled as I tested code and verified my math worked
console.log("Your " + prodDesc + " was originally $" + origPrice + ", but after a " + discountPct + "% discount, it is now $" + costPreTax + " without tax, and $" + costPostTax + " with tax.");
//alert("Your " + prodDesc + " was originally $" + origPrice + ", but after a " + discountPct + "% discount, it is now $" + costPreTax + " without tax, and $" + costPostTax + " with tax.");
//Alert added, tested, and disabled to verify.



