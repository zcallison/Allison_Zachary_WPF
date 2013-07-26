// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Conditionals - Wacky
// Date: 7.25.13

/*
    A calculator to determine how many servings of ramen it takes to fill a container.
    1 gallon = 231 cubic inches. 1 serving = 8 ounces.  128 ounces = 1 gallon.
*/

var gallonCube = 231;
var servingOunces = 8;
var gallonOunces = 128;

var contLength = prompt("How many inches long is the container?");
var contWidth = prompt("How many inches wide is the container?");
var contDepth = prompt("How many inches deep is the container?");

var contVolume = contLength * contWidth * contDepth;
//console.log("Volume of the container is " + contVolume + "cubic inches.");

var contGallons = contVolume / gallonCube;
//console.log("The container will hold " + contGallons + " gallons");

var contOunces = contGallons * gallonOunces;
//console.log("The container will hold " + contOunces + " ounces");

var contServings = contOunces / servingOunces;
//console.log("The container will hold " + contServings + " servings");

if(contOunces < servingOunces){
    console.log("This container will not hold a complete serving of ramen.");
}else{
    console.log("This container will hold " + contServings.toFixed(1) + " ramen servings.");
}