// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Functions - Industry
// Date: 7/31/13

/*
 Calculator to help determine the estimated space a web server uses for a customer's site
 */

// Variable declarations
var imageCount = prompt("How many images do you have?");
var images = new Array(imageCount);
var i = imageCount;
var imageNum = 1;
var imagesPos = 0;
// var imageSizeMath = 0;

// While loop below builds an array based on user input. Array length and contents built dynamically on input received from prompt calls.
while(i > 0){
    images[imagesPos] = prompt("How large is image number " + imageNum + "? (In Megabytes)");
    console.log("Image #" + imageNum + " is " + images[imagesPos] + "mb.");
    imageNum++;
    imagesPos++;
    i--;
}
// console.log(images); - Tested, removed. In place to assure that array is built correctly from user input.


function totalSize(){

}





