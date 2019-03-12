$(document).ready(function () {
var randomNum = Math.floor(Math.random()* 4 +1);
var colorClick = [];
var simonGame = [];
// Starts the game
    setTimeout(function(){
        randomColor(randomNum)
    }, 1000)
    userClick();
function randomColor(num){
    simonGame.push(num);
    for(var i = 0; i < simonGame.length; i++) {
        if (simonGame[i] === 1) {
              $("#red").css("opacity", "1");
               setTimeout(function () {
                   $("#red").css("opacity", ".5");
               }, 1000 * (i + 1));
           } else if (simonGame[i] === 2) {
               $("#blue").css("opacity", "1")
               setTimeout(function () {
                   $("#blue").css("opacity", ".5");
               }, 1000 * (i + 1))
           } else if (simonGame[i] === 3) {
               $("#green").css("opacity", "1")
               setTimeout(function () {
                   $("#green").css("opacity", ".5");
               }, 1000* (i + 1))
           } else if (simonGame[i] === 4) {
               $("#yellow").css("opacity", "1")
               setTimeout(function () {
                   $("#yellow").css("opacity", ".5");
               }, 1000 * (i + 1))
           }
    }
    console.log(simonGame);
}
function userClick() {
    $("#red").click(function () {
        colorClick.push(1);
        console.log(colorClick);
        // setTimeout(function () {
        //     if (simonGame.toString() === colorClick.toString()) {
        //         colorClick = []
        //         randomNum = Math.floor(Math.random() * 4 + 1);
        //         randomColor(randomNum);
        //
        //     } else {
        //         alert("Loser")
        //     }
        // }, 4000)
        for(var j = 0; j < colorClick.length; j++) {
            setTimeout(function () {
                if (simonGame.toString() === colorClick.toString()) {
                    colorClick = []
                    randomNum = Math.floor(Math.random() * 4 + 1);
                    randomColor(randomNum);

                } else {
                    alert("Loser")
                }
            }, 4000)
        }

    });
    $("#blue").click(function () {
        colorClick.push(2);
        console.log(colorClick)
        // setTimeout(function () {
        //     if (simonGame.toString() === colorClick.toString()) {
        //         colorClick = []
        //         randomNum = Math.floor(Math.random() * 4 + 1);
        //         randomColor(randomNum);
        //
        //     } else {
        //         alert("Loser")
        //     }
        // }, 4000)
        for(var j = 0; j < colorClick.length; j++) {
            setTimeout(function () {
                if (simonGame.toString() === colorClick.toString()) {
                    colorClick = []
                    randomNum = Math.floor(Math.random() * 4 + 1);
                    randomColor(randomNum);

                } else {
                    alert("Loser")
                }
            }, 4000)
        }

    });
    $("#green").click(function () {
        colorClick.push(3)
        console.log(colorClick)
        // setTimeout(function () {

        //     if (simonGame.toString() === colorClick.toString()) {
        //         colorClick = [];
        //
        //         randomNum = Math.floor(Math.random() * 4 + 1);
        //         randomColor(randomNum);
        //
        //     } else {
        //         alert("Loser")
        //     }
        // }, 4000)
        for(var j = 0; j < colorClick.length; j++) {
            setTimeout(function () {
                if (simonGame.toString() === colorClick.toString()) {
                    colorClick = []
                    randomNum = Math.floor(Math.random() * 4 + 1);
                    randomColor(randomNum);

                } else {
                    alert("Loser")
                }
            }, 4000)
        }

    });
    $("#yellow").click(function () {
        colorClick.push(4);
        console.log(colorClick)
        // setTimeout(function () {
        //     if (simonGame.toString() === colorClick.toString()) {
        //         colorClick = []
        //         randomNum = Math.floor(Math.random() * 4 + 1);
        //         randomColor(randomNum);
        //
        //     } else {
        //         alert("Loser")
        //     }
        // }, 4000)
        for(var j = 0; j < colorClick.length; j++) {
            setTimeout(function () {
                if (simonGame.toString() === colorClick.toString()) {
                    colorClick = []
                    randomNum = Math.floor(Math.random() * 4 + 1);
                    randomColor(randomNum);

                } else {
                    alert("Loser")
                }
            }, 4000)
        }

    });
    for(var j = 0; j < colorClick.length; j++) {
        setTimeout(function () {
            if (simonGame.toString() === colorClick.toString()) {
                colorClick = []
                randomNum = Math.floor(Math.random() * 4 + 1);
                randomColor(randomNum);
                userClick();

            } else {
                alert("Loser")
            }
        }, 4000)
    }
}
})