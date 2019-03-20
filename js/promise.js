// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1500);
// })
//     .then(() => console.log('resolved!'))
//     .catch(() => console.log('rejected!'));

// console.log(myPromise); // a pending promise

// fetch('https://api.github.com/users/laroblesaguilar', {headers: {"Authorization": `token ${gitHubKey}`}})
//     .then(response => console.log(response.json()))
//     .catch(error => console.error(error));



// const lastCommit = userName =>{

    // function getLastPush(data){
    // return data[0].created_at
    // }

    var test = $.ajax(`https://api.github.com/users/laroblesaguilar/events`, {headers: {"Authorization": `token ${gitHubKey}`}})
        .done(function (data) {
            console.log(data);

        })




// fetch(`https://api.github.com/users/laroblesaguilar/events`, {headers: {"Authorization": `token ${gitHubKey}`}})
//         .then((data) => data.json().then (updatedResponse => {
//             console.log(updatedResponse)
//             console.log(updatedResponse[0].type + " " + updatedResponse[0].created_at)
//         }))
//         .then((jsonData) => {
//             return console.log(jsonData.login)
//         })
// }

// console.log(lastCommit("laroblesaguilar"));


// const wait = (timeOut) =>{
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve()
//             reject()
//
//         }, timeOut);
//     })
//         .then(() => console.log("You'll see this after " + timeOut/1000 + " seconds"))
//         .catch(() => console.log("Error"))
//
// }
// wait(1000)
// wait(3000)

// function wait(time){
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             resolve()
//             reject()
//         }, time)
//     })
//         .then(() => console.log("You'll see this after " + time/1000 + " seconds"))
//         .catch(() => console.log("Error"))
//
// }
//
//
// wait(1000)

// const request = wait(1000)
// console.log(request);
// request.then(() => console.log("You'll see this after " + time/1000 + "seconds"))
// request.catch(() => console.log("Error"))