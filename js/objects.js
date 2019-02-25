// (function() {
"use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
var person = {
    firstName: "Luis",
    lastName: "Robles",
    sayHello: function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    }
};

var arrayWithin = [["Luis", "Ariana1"], ["Ariana"], ["Leo"]]

for(var i = 0; i < arrayWithin.length; i++){
    console.log(arrayWithin[i].toString() + " sucks!");

}

// console.log(person.firstName);

var person2 = [
    {name: "Luis", lastName: "Robles", age: 25},
    {name: "Ariana", lastName: "Robles", age: 24},
    {name: "Leo", lastName: "Robles", age: 5}
];

// console.log(person2[1].name +" " + person2[1].lastName)

for(var i = 0; i < person2.length; i++){
    console.log(person2[i].name)
   for(var z = 0; z < person2[i].name.length; z++){
       console.log(person2[i].name.charAt(z))
   }
}

var ArrayTest = ["Luna", "Luca", "Leo"]
for(i = 0; i < ArrayTest.length; i++){
    console.log(ArrayTest[i]);
    for(var j = 0; j < ArrayTest[i].length; j++){
        if(j === 1) console.log(ArrayTest[i].charAt(j))
        }
    }


person2.forEach(function (person) {
person.name = "Ha Ha ";
console.log(person.name + person.lastName);
});

/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */

console.log(person.sayHello());

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

shoppers.forEach(function (element, index, array) {
    if (element.amount > 200) {
        console.log(element.name + " receives a discount of 12 % and therefore pays " + (element.amount * .88).toFixed(2) + " original total: " + element.amount);
    } else console.log(element.name + " total: " + element.amount)
});


/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */
var books = [
    {
        title: "Harry Potter",
        author: {
            firstName: "J.K.",
            lastName: "Rowling"
        }
    },
    {
        title: "Of mice and men",
        author: {
            firstName: "John",
            lastName: "Steinbeck"
        }
    },
    createBook("Game of Thrones", "George", "RR Martin"),
   createBook("The Uglies", "Scott", "Westerfield")
];

// for(var i = 0; i < books.length; i++ ){
//     console.log(books[i].title + " is written by " + books[i].author.firstName + " " + books[i].author.lastName)
// }

books.forEach(function(book){
    console.log(book.title + " " + "is written by " + book.author.firstName + " " + book.author.lastName);
})


// for(i = 0; i < books.length; i++){
//     console.log(books[i].author.firstName);
// }
// books.forEach(function(book){
//     console.log(book.author.firstName)
// });

// function authorFirstName (book){
//     console.log(book.author.firstName);
// }
//
// books.forEach(authorFirstName);

// for(var i = 0; i < books.length; i++){
//     console.log(books[i].title + " " + books[i].author.firstName +" " + books[i].author.lastName + " " + i);
//
// }



// var x = "bob";
// for(var i = 0; i < x.length; i++ ){
//     console.log(x.charAt(i));
// }


// console.log(books[1].title);
// console.log(books[0].author.firstName);


/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */
// books.forEach(showBookInfo);

/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */
function createBook(title, firstName, lastName) {
    var book = {
        title: title,
        author: {
            firstName: firstName,
            lastName: lastName,
        }
    };
    return book;
}

function showBookInfo(element, index){
    console.log("Book # " + (index + 1) + "\nTitle: " + element.title + "\nAuthor: " + element.author.firstName + " " + element.author.lastName);
}

console.log(createBook("Test", "Luis", "Robles"));

// BONUS

var users = [
    {
        name: "Sam",
        age: 21
    },
    {
        name: "Cathy",
        age: 34
    },
    {
        name: "Karen",
        age: 43
    }
];
// users.forEach(showUsers);
//
// function showUsers(user){
//     console.log(user.name + "  " +  user.age);
// }

// for(var i =0; i < users.length; i++){
//     console.log(users[i].name + " " + users[i].age);
//     console.log(users[i].name.charAt(0));
//     for(i < 0 ; i < users.length; i ++){
//         console.log(users[i].name.charAt(0));
//
//     }
// }

// console.log(users);
// })();
