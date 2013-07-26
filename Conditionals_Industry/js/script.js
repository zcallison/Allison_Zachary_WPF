// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Conditionals - Industry
// Date: 7.25.13

/*
This is a calculator to determine if an image will go over bandwidth traffic limits.
Determines based off of user input.
*/

var imgSize;
var dailyViewCt;
var monthlyBandwidthAllowance;

imgSize = prompt("How large is the image? (In megabytes)");
dailyViewCt = prompt("Approximately how many views per day does the image receive?");
monthlyBandwidthAllowance = prompt("What is your monthly bandwidth limit? (In gigabytes)");

/*
Inserting Console.log prints to test math.


console.log("Image size:" + imgSize + "mb");
console.log("View count:" + dailyViewCt);
console.log("Monthly Allowance:" + monthlyBandwidthAllowance + "gb");

Math appears to be accurate, tested against own math. 1 gigabyte = 1024 mb.
*/

var monthlyViewCt = dailyViewCt * 28;
var dailyBandwidth = imgSize * dailyViewCt / 1024;
var monthlyBandwidth = dailyBandwidth * 28;

console.log("Daily Bandwidth =" + dailyBandwidth + "mb");
console.log("Monthly Views =" + monthlyViewCt);
console.log("Monthly Bandwidth =" + monthlyBandwidth);

if(monthlyBandwidth > monthlyBandwidthAllowance){
    var excessUsage = monthlyBandwidth - monthlyBandwidthAllowance;
    console.log("You have exceeded your monthly allowance by " + excessUsage + "gb.");
}else{
    var availUsage = monthlyBandwidthAllowance - monthlyBandwidth;
    console.log("You are still within your monthly allowance by " + availUsage + "gb.");
}


