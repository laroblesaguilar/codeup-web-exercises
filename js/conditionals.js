"use strict";
console.log("Test")
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */
var confirmed = confirm("Would you like to enter a number?");
var number;

if (confirmed) {
    var number = prompt("Please enter a number");
    if (!isNaN(+number)) {

        var greaterThan = (number > 0);

        if (number % 2 === 1) {
            alert(number + " is odd");
            alert("Your number plus 100: " + (parseInt(number) + 100));
            alert("Positive: " + greaterThan)

        } else {
            alert(number + " is even");
            alert("Your number plus 100: " + (parseInt(number) + 100));
            alert("Positive: " + greaterThan)

        }
    } else {
        alert("Not a number");
    }
}

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(string) {
    var color;
    if (string === "blue") {
        return ("blue is the color of the sky");
    } else if (string === "red") {
        return ("red is the color of an apple");
    } else if (string === "yellow") {
        return ("yellow like the sun")
    } else if (string === "white") {
        return ("White like snow");
    } else {
        return ("I dont know of anything by that color");
    }
}

console.log(analyzeColor('blue')); // returns "blue is the color of the sky"
console.log(analyzeColor('red')); // returns "Strawberries are red"
console.log(analyzeColor('cyan'));// returns "I don't know anything about cyan"

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


function colorPicker(color) {

    switch (color) {
        case "red":
            return "red like pepperoni";
            break;
        case "yellow":
            return "yellow like the sun";
            break;
        case "black":
            return "black like the night";
            break;
        default:
            return "No se!!";
            break;
    }
}

console.log(colorPicker("orange"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/* ########################################################################## */
// var userColor = prompt("Pick a color!")
// alert(analyzeColor(userColor));

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(disc, price) {
    if (disc === 0) {
        return price;
    } else if (disc === 1) {
        return (price - (price * .10));
    } else if (disc === 2) {
        return (price - (price * .25));
    } else if (disc === 3) {
        return (price - (price * .35));
    } else if (disc === 4) {
        return (price - (price * .5));
    } else if (disc === 5) {
        return (price - price);
    }
}

console.log(calculateTotal(0, 100)); // returns 100
console.log(calculateTotal(4, 100)); // returns 50
console.log(calculateTotal(5, 100));// returns 0
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

// var totalBill = prompt("What is your total bill?");

// alert("Your lucky number is " + luckyNumber + " You only pay " + calculateTotal(luckyNumber, totalBill));

// Bonus

function trafficLight(color) {

    if (color === "red") {
        return "stop";
    } else if (color === "yellow") {
        return "Speed up!"
    } else {
        return "stop";
    }
}

console.log(trafficLight("yellow"));

function inputToOutput(input) {
    if (input.trim().length > 0) {
        return ("you said " + input);
    } else {
        return "no input provided";
    }
}

// var ask = prompt("Enter something!");
// alert(inputToOutput(ask));

function seasons(inputA) {
    inputA = inputA.toLowerCase();
    if (inputA === "spring") {
        alert("Spring contains: March, April, May");
        var month = prompt("enter month!");
        month = month.toLowerCase();
        if (month === "march" || month === "mar") {
            return ("March is cool...!")
        } else if (month === "april" || month === "apr") {
            return ("Luna was born in April!")
        } else if (month === "may") {
            return ("Ariana's birthday is May 6th!");
        } else {
            return "Spring months only!"
        }
    } else if (inputA === "summer") {
        alert("Summer has June, July, and August");
        var month = prompt("enter month!");
        month = month.toLowerCase();
        if (month === "june" || month === "jun") {
            return ("Luca birthday is June 13!");
        } else if (month === "july" || month === "jul") {
            return ("Fourth of July - fireworks!")
        } else if (month === "august" || month === "aug") {
            return "August - Back to school!"
        } else {
            return "Summer months only!";
        }
    } else if (inputA === "fall" || inputA === "autumn") {
        alert("Fall has September, October, November");
        var month = prompt("enter month!");
        month = month.toLowerCase();
        if (month === "september" || month === "Sep") {
            return "September - boring!";
        } else if (month === "october" || month === "oct") {
            return "October - Halloween!!!!"
        } else if (month === "november" || month === "nov") {
            return "November - Turkey, baby!!";
        } else {
            return "Fall months only!";
        }
    } else if (inputA === "winter") {
        alert("Winter has December, January, and February");
        var month = prompt("enter month!");
        month = month.toLowerCase();
        if (month === "december" || month === "dec") {
            return "December - Ho Ho Ho!!!!"
        } else if (month === "january" || month === "jan") {
            return "January - Happy New Year!!";
        } else if (month === "february" || month === "feb") {
            return "February - Will you be my valentine?";
        } else {
            return "Winter only!!"
        }
    } else {
        return "Not a real season!!";
    }
}


// var season = prompt("Enter a season!");
// alert(seasons(season));

function dayOftheWeek(day) {
    day = day.toLowerCase();
    if (day === "monday" || day === "mon") {
        return "Mondays - boo!!";
    } else if (day === "Tuesday" || day === "tue") {
        return ("tuesday - early release at 4!");
    } else if (day === "wednesday" || day === "wed") {
        return ("Wednesday - humpday!");
    } else if (day === "thursday" || day === "thur") {
        return ("One more day until Friday!");
    } else if (day === "friday" || day === "fri") {
        return ("All good things come on a friday!");
    } else if (day === "saturday" || day === "sat" || day === "sunday" || day === "sun") {
        return ("Weekends are for extra practice");
    } else {
        return ("Not a real day")
    }
}

// var userDay = prompt ("Choose a day and I'll tell you something about it!");
// alert(dayOftheWeek(userDay));

function makeJustinMessage(input) {
    input = input.toLowerCase();
    if (input.length > input.trim().length || !isNaN(+input)) {
        return ("Invalid input");
    } else if (input === "justin") {
        return ("It's Justin")
    } else {
        return ("It's not Justin!")
    }
}

// var name = prompt("Whats your name?");
// alert(makeJustinMessage(name));

function numberMessage(num) {

    if (!isNaN(+num)) {
        if (num == 1) {
            return ("1 - uno");
        } else if (num == 2) {
            return ("2 - dos");
        } else if (num == 3) {
            return ("3 - tres");
        } else if (num == 4) {
            return ("4 - cuatro");
        } else if (num == 5) {
            return ("5- cinco");
        } else if (num == 6) {
            return ("6 - seis");
        } else if (num == 7) {
            return ("7 - siete");
        } else if (num == 8) {
            return ("8 - ocho");
        } else if (num == 9) {
            return ("9 - nueve");
        } else if (num.length > 1) {
            return ("Too many digits!");
        }
    } else {
        return ("Invalid input - #'s only");
    }
}


// var userNum = prompt("Pick a number from 1 -9!");
// alert(numberMessage(userNum));

function numCheck(num) {
    if (!isNaN(+num)) {
        return "number";
    } else {
        return "NaN"
    }
}

// var userNum1 = prompt("Number check!!");
// alert(numCheck(userNum1));

function conversion(origUnit, convertTo, num) {
    switch ("userUnit") {
        case "inches":
            if(convertTo = "feet"){
                return num/12;
            }
        case "feet":
            if(convertTo = miles){
                return ("to miles = " + num / 5280);
            } else if (convertTo = "inches"){
                return (num *12);
            }
            break;
        case "miles":
            return ("to light years = " + num / 5.879e+12);
            break;
        case "miles":
            return ("to feet = " + num * 5280);
            break;
        case "light years":
            return ("to miles = " + num * 5.879e+12);
            break;
    }
}

var userNum = prompt ("Enter original measurement and I'll convert it!");
var userUnit = prompt("Original unit of measurement");


var convert = alert(conversion(userUnit, userNum));