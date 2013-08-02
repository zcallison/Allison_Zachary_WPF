// Name: Zachary Allison
// Student Number: 0003968340
//
// Assignment: Functions Personal
// Date: 7/31/13


/*
  Assistant to determine total available screen real estate available on my physical desk.
*/
var screenCount = prompt("How many displays are connected?")


if (screenCount > 0) {
    while (screenCount >= 1) {
        screenCount--;

        var resWide = prompt("How many pixels wide is the resolution?");
        var resHigh = prompt("How many pixels high is the resolution?");
        var scrWide = prompt("How many inches wide is the display?");
        var scrHigh = prompt("How many inches high is the display?");

        function resArea(wPixels, hPixels) {
            var sqPixels = wPixels * hPixels;
            return Number(sqPixels);
        }

        function screenArea(wInches, hInches) {
            var sqInches = wInches * hInches;
            return Number(sqInches);
        }

        function numberPixels(sqPixels, sqInches) {
            var pixelCount = sqPixels * sqInches;
            return Number(pixelCount);
        }

        //console.log(resArea(resWide, resHigh));
        //console.log(screenArea(scrWide,scrHigh)); -- Both made redundant by code below.
        //console.log(numberPixels(resArea(resWide, resHigh), screenArea(scrWide, scrHigh)));
        var totalPixels = totalPixels + numberPixels((resArea(resWide, resHigh), screenArea(scrWide, scrHigh)));

    }
    console.log(Number(totalPixels));
} else {
    console.log("Unable to calculate.\nThere are no displays connected.");
}

