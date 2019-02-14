(function () {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Luis", "Luca", "Leo", "Luna"]
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (element) {
        console.log(element);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(array) {
        return array[0];
    }

    function second(array) {
        return (array[1]);
    }

    function last(array) {
        return array[(array.length - 1)];
    }

    console.log(first([1, 2, 3, 4, 5])); // returns 1
    console.log(second([1, 2, 3, 4, 5])); // returns 2
    console.log(last([1, 2, 3, 4, 5])); // return 5


    // Bonus

    function alphabet(letter) {

        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        for (var i = 0; i < letters.length; i++) {
            if (letter === letters[i]) {
                console.log(letters.indexOf(letters[i]) + 1);
            }
        }
    }

    alphabet("z");

    function randomDay() {
        var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
        return days[Math.floor(Math.random() * 7)];
    }

    console.log(randomDay());

    function shapes(input) {
        var shapes = ["square", "rectangle", "circle", "triangle"];
        for (var i = 0; i < shapes.length; i++) {
            if (input === shapes[i]) {
                console.log("shape found");
                break;
            }
        }
    }

    console.log(shapes("circle"));

    function longestString(array) {

        var length = 0;
        var longest;
        for (var i = 0; i < array.length; i++) {
            if (array[i].length > length) {
                length = array[i].length;
                longest = array[i];
            }
        }
        return longest;
    }

    console.log(longestString(["hi", "hola", "no"]));

    function equal(arr1, arr2) {
        var sumOne;
        var sumTwo;
        for (var i = 0; i < arr1.length; i++) {

            if (arr1[i] === !isNaN(arr1[i])) {
                sumOne = arr1[i] + sumOne;
            }
        }
        for (var j = 0; j < arr2.length; j++) {
            if (arr2[j] === !isNaN(arr2[j])) {
                sumTwo = arr2[j] + sumTwo;
            }
        }
        return(sumTwo === sumOne);
        }

        console.log(equal(["", 1], [3, ""] ));
})();
