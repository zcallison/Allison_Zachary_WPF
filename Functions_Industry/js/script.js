// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Functions - Industry
// Date: 7/31/13

/*
 Calculator to help determine the estimated space a web server uses for a customer's site
 */

// Variable declarations
var imageCount = new Number(prompt("How many images do you have?")); // Set strictly to number to prevent mathematical errors. - Experimented with setting variable type with user input prompt simultaneously, appears to work.
//imageCount  = prompt("How many images do you have?"); // User input to begin creation of array
var images = new Array(imageCount); // Array created using prompted input.
var i = imageCount;
var imageNum = 1;
var imagesPos = 0;

// While loop below builds an array based on user input. Array length and contents built dynamically on input received from prompt calls.
if(imageCount != 0){
    while(i > 0){
        images[imagesPos] = prompt("How large is image number " + imageNum + "? (In Megabytes)");
        console.log("Image #" + imageNum + " is " + images[imagesPos] + "mb.");
        imageNum++;
        imagesPos++;
        i--;
    }
}else{
    console.log("Thank you for your interest in the estimation tool.");
}


// console.log(images); - Tested, removed. In place to assure that array is built correctly from user input.


function totalSize(){
    //var imagesPos = 0;
    var imageSizeMath = 0;
    while(imageCount > 0){
        imageSizeMath = Number(imageSizeMath) + Number(images[imagesPos]);
        imagesPos++;
        imageCount--;
    }
    return console.log("The total image size is " + imageSizeMath + "mb.");

}

totalSize();



