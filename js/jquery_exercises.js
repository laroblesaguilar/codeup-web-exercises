"use strict"
$(document).ready(function(){

$("h1").click(function(e){
    $(this).css("background-color", "red")
});

$("p").dblclick(function(e){
    $(this).css("font-size", "18px")
});

$("li").hover(
    function(){
        $(this).css("color", "red")
    },
    function () {
        $(this).css("color", "black")
    }
);


});