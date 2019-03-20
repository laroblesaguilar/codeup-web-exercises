// (function () {




"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
    function sayHello(name){
        return ("Hello, " + name);
}

import {showMultiplicationTable} from "./for_loops";

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
    var helloMessage = sayHello("Luis");
    console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
    var myName = "Luis Robles";

    console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
    function isTwo(num){
        return num === 2;
}
    console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
    function calculateTip(percentage, total){
        var toDecimal = percentage/100;
        return (toDecimal * total);
}
    console.log(calculateTip(20, 20));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
    // var bill = prompt("What is your bill total?");
    // var tip = prompt("What percentage did you want to tip");
    // alert(calculateTip(tip, bill));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
    function applyDiscount(price, discount){
        var percentToDecimal = discount/100;
        return price - (price * percentToDecimal);
}
    console.log(applyDiscount(5,20));

    function isOdd(number){
        return number % 2 === 1;
    }

    console.log(isOdd(9));

    function isEven(number){
        return number % 2 === 0;
    }

    console.log(isEven(5));

    function identity(input){
        return input;
    }

    console.log(identity("Hi"));

    function addFive(num) {
        return num + 5;
}
    console.log(addFive(100));

    function isMultiplesOfFive(number){
        return number % 5 === 0;
    }

    console.log(isMultiplesOfFive(105));

    function isMultiplesOfThree(number){
        return number % 3 === 0;
    }

    console.log(isMultiplesOfThree(5));

    function isVowel(letter){

        return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y";


    }

    console.log(isVowel("z"));

    function isLowerCase(letter) {
        return letter === letter.toLowerCase();
    }

    console.log(isLowerCase("g"));

    function isCapital(letter){
        return letter === letter.toUpperCase();
    }
    console.log(isLowerCase("g"));

    function whitespaceCounter(input) {
        return input.length - input.trim().length;
    }

    console.log(whitespaceCounter("hi    "));

    function count(input) {
        return input.length;
    }

    console.log(count("hieeeei"));

    function areEqual(inputA, inputB){
        return inputA === inputB;
    }

    console.log(areEqual(3, "3"));

    function areIdentical(str1, str2){
        return str1 === str2;
    }

    console.log(areIdentical(3,3));

    function absoluteValue(num){
        return Math.abs(num);
    }

    console.log(absoluteValue(-50));

    function not(input){
        return !input;
    }
    console.log(not(6));

    function rollDice(sides){
        return parseInt(Math.random() * (sides + 1));
    }

    console.log(rollDice(89));

    function reverseString(string){
        var splitString = string.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray. join("");

        return joinArray;
    }

    console.log(reverseString("Luis"));


    function isTruthy(input){
        return true;
    }
    console.log(isTruthy(true));

    function modulo (numA, numB){
        return numA % numB;
    }
    console.log(modulo(14,5));

    function squareRoot(num) {
        return Math.sqrt(num);
    }

    console.log(squareRoot(25));

    function cube(num){
        return Math.pow(num, 3);
    }

    console.log(cube(1));

    function cubeRoot(num){
        return Math.cbrt(num);
    }

    console.log(cubeRoot(27));

    function returnTwo(){
        return 2;
    }

    console.log(returnTwo());

    function sayHowdy(){
        return "Howdy!";
    }

    console.log(sayHowdy());

    function returnName() {
        return "Luis Robles";
    }

    console.log(returnName());

    function addThree(num){
        return num +3;
    }
    console.log(addThree(0));

    function sayString(input) {
        return input;
    }

    console.log(sayString("codeup"));

    function firstChar(input){
        return input.substring(0,1);
    }

    console.log(firstChar("Luidhfihsdihsodf"));

    function lastChar(input){
        var lastNum = input.length;
        var stoppingPoint = input.length - 1;
        return input.substring(lastNum, stoppingPoint);
    }

    console.log(lastChar("Luix"));

    function doMath(operator, a, b){

        if (operator === 'add'){
            return (a + b);
        }
        else if (operator === "subtract"){
            return (a - b);
        }
        else if(operator === "multiply"){
            return(a * b)
        }
        else {
            return (a / b);
        }
    }

    console.log(doMath("subtract", 100,100));

    function whiteSpace(input){
        return input.length - input.trim().length;
    }

    console.log(whiteSpace("             hi"));


    function add(a, b){
        return a + b;
    }

    // console.log(add(5,2));

    function square(a){
        return a * a;
    }
    // console.log(square(9));

    function sumOfSquares(a, b) {
        return add(square(a), square(b));
    }

    console.log(sumOfSquares(6,6));

    


// })();
