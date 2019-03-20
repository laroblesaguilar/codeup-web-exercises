"use strict";

function showMultiplicationTable(num){
    for(var i = 1; i < 11; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }
}

export{showMultiplicationTable}

// showMultiplicationTable(10);

// var randomNum = Math.floor(Math.random() * 20) + 180;

for(var i = 0; i < 10; i++){
    var randomNum = Math.floor(Math.random() * 20) + 180;

    if(randomNum % 2 === 0){
        console.log(randomNum + " is even");
    } else{
        console.log(randomNum + " is odd");
    }
}

for(var i = 100; i > 0; i-=5){
    console.log(i);
}



for(var i = 1; i < 10; i++){
    i = i.toString();
    var string = i.repeat(i);
    console.log(string);
}

