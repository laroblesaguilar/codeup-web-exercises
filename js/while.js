"use strict";

var x = 1;

while (x < 17) {
    console.log(Math.pow(2, x));
    x++;

}

var allCones = Math.floor(Math.random() * 50) + 50;

var conesSold = Math.floor(Math.random() * 5) + 1;


do {

    console.log(conesSold + " cones sold");
    allCones = allCones - conesSold;
    conesSold = Math.floor(Math.random() * 5) + 1;

    if (allCones === 0) {
        console.log("Yay! I sold them all!");
        break;
    } else if (conesSold > allCones) {
        console.log("I can not sell you " + conesSold + " I only have " + allCones);
        conesSold = Math.floor(Math.random() * 5) + 1;

    }


} while (allCones >= conesSold);




