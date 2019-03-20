//Hackerrank

function simpleArraySum(ar) {
    var sum = ar.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum
}

function isSquare(num){
    if(Math.sqrt(num) % 1 === 0){
        return true
    }  return false
}


// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
function plusMinus(arr) {
    var positive = 0
    var negative = 0
    var zero = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            negative++
        } else if (arr[i] > 0) {
            positive++
        }
        else if (arr[i] === 0) {
            zero++
        }
    }
    return(positive/arr.length + "\n" + negative/arr.length + "\n" + zero/arr.length)
}

plusMinus([0,1,1,-3,2,-1])


// Sample Input
//
// 6
// Sample Output
//
// #
// ##
// ###
// ####
// #####
// ######


function stairCase(num){
    var test = "#";
    for(var i = 1; i <= num; i++){
        var string = test.repeat(i);
        console.log(string);
    }
    // return string;
}
//Curriculum Bonuses
const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// Use map, filter, and reduce to:
//
//     1. Create an array of the first letters of each fruit
const firstLetter = fruits.map(fruit => fruit.charAt(0))

console.log(firstLetter)

// 1. Create array of user objects based on the customers array of objects (each
// user object should just have name and age properties)
//
// 1. Create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
//
// 1. Determine the average age of all the customers
function averageAge(object) {
    var age = object.reduce((current, next) => current + next.age, 0);
    var averageAge = age / object.length
    return averageAge
}

averageAge(customers)
// 1. Create a function `makeSuperPet()` that takes in the pets array as input and
// returns a single pet object with the following shape...

// 1. Create a function that when given an array of first names, returns an array
// of the same names with a last name of Smith !!!!use map!!!!
//
//     ```
//     // input = ['Sally', 'Fred', 'Steve']
//     // output = ['Sally Smith', 'Fred Smith', 'Steve']

function addLastName(array){
    const addLastName = array.map(name => name + " Smith")
    return addLastName
}

//es6
const addLastName = array => array.map(name => name + " Smith")

function evenSum(array){
    let evenNum = array.filter(n => n % 2 === 0)
    let sum = evenNum.reduce((a,b) => a + b, 0)
    return sum
}

function evenSumLoop (array){
    let evenSum = 0
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenSum += array[i]
        }
    }
    return evenSum
}

function sumOf10(array){
    let numbers = array.filter(n => n % 10 === 0)
    let sum = numbers.reduce((a, b) => a + b, 0)
    return sum
}

function sumOf10Loop(array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] % 10 === 0){
            sum += array[i]
        }
    }
    return sum
}

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

// 1. Create a function `getFemaleFamilyMembers()` that when given the family
// variable as an argument, returns an array of female family member names

function getFemaleFamilyMembers(object){
    let females = object.filter(person => person.gender === "female")
    let names = females.map(person => person.name)
    return names
}



function getFemaleFamilyMembersLoop(object){
    let females = []
    for(let i = 0; i < object.length; i++){
        if(object[i].gender === "female"){
            females.push(object[i].name)
        }
    }
    return females
}

// 1. Create a function that when given three arguments: a min num, a max num, an
// array of nums will return the array of nums that are only between the min
// and max values, inclusive

function inBetween(min, max, array){
    let inBetween = array.filter(n => n < max && n > min)
    return inBetween
}

//es6
const between = (min, max, array) => array.filter(n => n < max && n > min)

function firstLetterLoop(array){
    var letters = []
    for(var i = 0; i < array.length; i++){
        letters.push(array[i].charAt(0))
    }
    return letters
}

firstLetterLoop(fruits)

function factorialize(num){
    var answer = 0;
    for(var i = num - 1; i >=1; i--){
        console.log(num = num * i)
    }
    return num
}