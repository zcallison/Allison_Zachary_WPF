// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Conditionals Screencast Work-Along
// Date: Fri, Jul 19, 2013

var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45;
//var sneakerLift = 2;

//if the child is old enough, print to the console "you can ride!"
//if the child is over 48 inches in height

if(kidHeight > minHeight){
   //you can ride!
    console.log("You can ride the coaster!");
} else if(kidHeight > wParentHeight ) { // you can ride with parent
    console.log("You can ride, but only with a parent present.");
} else { // gotta grow!
    console.log("Sorry kid, you've got some growing to do first!");
}


/*
if(kidHeight <= minHeight){
    console.log("Sorry kid, you've got some growing to do first!");
}
*/