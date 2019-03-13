"use strict"

const numbers = [1,2,3,4,5]
const newNumbers = numbers.map(n => n + numbers.indexOf(n))

console.log(newNumbers)

const numbers1 = [1,0,1,0,1,1,1,1,0]

const ones = numbers1.filter(n => n == true)
const zeros = numbers1.filter(n => n == false)


console.log(ones)
console.log(zeros)

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguages = users.filter(user => user.languages.length  >= 3)

console.log(threeLanguages)

const string = users.map(user => user.email);

console.log(string)

const totalYears = users.reduce((sum, person) => {
    return sum + person.yearsOfExperience
}, 0);

console.log(totalYears)


const longestEmail = users.reduce((current, next ) => {
   console.log(current)
    if(next.email.length > current.length){
    current = next.email }
        return current

}, "")

console.log(longestEmail)

const instructors = users.reduce((current, next) => current + next.name + ",", "Your instructors are: ");
console.log(instructors)

var instructorsName = []
for(var i = 0; i < users.length; i++){
    instructorsName.push(users[i].name)
}
console.log(instructorsName)
console.log("Your instructors are: " + instructorsName.join(", "))

// function countLanguages(sentence) {
//     var list = sentence.split(" ")
//     var languages = list.reduce((LanguageCount, language) => {
//         if (typeof LanguageCount[language] === "undefined") {
//             LanguageCount[language] = 1
//         } else {
//             LanguageCount[language] += 1;
//         }
//         return LanguageCount
//     }, {})
//     return languages
//
// }
// var languageList = users.map(user => user.languages)
// var sentence = languageList.join(" ")
// console.log(languageList.join(", "))
//
// console.log(countLanguages(sentence));
