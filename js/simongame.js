$(document).ready(function () {
var randomNum = Math.floor(Math.random()* 4 +1);
var colorClick = [];
var simonGame = [];

function randomColor(num){
    simonGame.push(num);
    for(var i = 0; i < simonGame.length; i++) {
        if (simonGame[i] === 1) {
            $("#red").css("opacity", "1");
            setTimeout(function () {
                $("#red").css("opacity", ".5");
            }, 1000);
        } else if (simonGame[i] === 2) {
            $("#blue").css("opacity", "1")
            setTimeout(function () {
                $("#blue").css("opacity", ".5");
            }, 1000)
        } else if (simonGame[i] === 3) {
            $("#green").css("opacity", "1")
            setTimeout(function () {
                $("#green").css("opacity", ".5");
            }, 1000)
        } else if (simonGame[i] === 4) {
            $("#yellow").css("opacity", "1")
            setTimeout(function () {
                $("#yellow").css("opacity", ".5");
            }, 1000)
        }

    }
    console.log(simonGame);
}

 setTimeout(function(){
        randomColor(randomNum);
        console.log(simonGame)
    }, 1000);

    $("#red").click(function(){
        colorClick.push(1);
        console.log(colorClick);
        // randomNum = Math.floor(Math.random()* 4 +1);
        setTimeout(function(){
            if(simonGame.toString() === colorClick.toString()){
                randomNum = Math.floor(Math.random()* 4 +1);
                randomColor(randomNum);
                colorClick = []

            } else{
                alert("Loser")
            }
        }, 5000)

    });

    $("#blue").click(function(){
        colorClick.push(2);
        console.log(colorClick)
        // randomNum = Math.floor(Math.random()* 4 +1);
        setTimeout(function(){
            if(simonGame.toString() === colorClick.toString()){
                randomNum = Math.floor(Math.random()* 4 +1);
                randomColor(randomNum);
                colorClick = []

            } else{
                alert("Loser")
            }
        }, 6000)
    });

    $("#green").click(function(){
        colorClick.push(3)
        console.log(colorClick)
        // randomNum = Math.floor(Math.random()* 4 +1);;
        setTimeout(function(){
            if(simonGame.toString() === colorClick.toString()){
                randomNum = Math.floor(Math.random()* 4 +1);
                randomColor(randomNum);
                colorClick = []

            } else{
                alert("Loser")
            }
        }, 6000)
    });

    $("#yellow").click(function(){
        colorClick.push(4);
        console.log(colorClick)
        // randomNum = Math.floor(Math.random()* 4 +1);
        setTimeout(function(){
            if(simonGame.toString() === colorClick.toString()){
                randomNum = Math.floor(Math.random()* 4 +1);
                randomColor(randomNum);
                colorClick = []

            } else{
                alert("Loser")
            }
        }, 6000)

    });

    setTimeout(function(){
        if(simonGame.toString() === colorClick.toString()){
            randomColor(randomNum);
            colorClick = []
        } else{
            alert("Loser")
        }
    }, 6000)

    console.log(colorClick);



})