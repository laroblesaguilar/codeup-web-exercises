(function () {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (radius) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * Math.pow(radius, 2);
            return (area); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) {
                console.log(Math.round(circle.getArea(circle.radius)));
            } else {
                console.log(circle.getArea(circle.radius));
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
// Bonus

    var myMath = {
        random: Math.floor(Math.random()*50 + 1),
        favorite: 7,
        roundPi: 3.14,
        randomCircle: function () {
            var randomNum = Math.floor(Math.random() * 50 + 1)
            return "A circle with radius: " + randomNum + " is " + circle.getArea(randomNum).toFixed(2);
        },
        exponentTable: function (num, maxInt) {
            for (var i = 0; i <= maxInt; i++) {
                console.log(Math.pow(num, i));
            }
        },
        randomNumberInt: function (maxNum, minNum){
            return Math.floor((Math.random()* (maxNum - minNum))+ minNum);
        }

    };

    console.log(myMath.randomCircle());
    console.log(myMath.exponentTable(5, 10));
    console.log(myMath.randomNumberInt(100, 75));


})();


