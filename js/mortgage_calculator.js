"use strict"
let M; //monthly mortgage payment
let P = Number($("#amount").val().replace(",", ""))                    //principle / initial amount borrowed
let I = $("#interest").val() / 100 / 12;       //monthly interest rate
let N = $("#years").val() * 12;                //number of payments months

//monthly mortgage payment
const monthlyPayment = (p, n, i) => p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
M = monthlyPayment(P, N, I);
$("#monthly").text("$" + Math.round(monthlyPayment(P, N, I)))
$("#totalCost").text("$" + Math.round(monthlyPayment(P, N, I) * N))

$("#amount").on("keydown", function () {
    let P = Number($("#amount").val().replace(",", ""))                    //principle / initial amount borrowed
    let I = $("#interest").val() / 100 / 12;       //monthly interest rate
    let N = $("#years").val() * 12;//number of payments months
    monthlyPayment(P, N, I)
    $("#monthly").text("$" + Math.round(monthlyPayment(P, N, I)))
    $("#totalCost").text("$" + Math.round(monthlyPayment(P, N, I) * N))
})

$("#interest").keydown(function () {
    let P = Number($("#amount").val().replace(",", ""))                    //principle / initial amount borrowed
    let I = $("#interest").val() / 100 / 12;       //monthly interest rate
    let N = $("#years").val() * 12;                //number of payments months
    monthlyPayment(P, N, I)
    $("#monthly").text("$" + Math.round(monthlyPayment(P, N, I)))
    $("#totalCost").text("$" + Math.round(monthlyPayment(P, N, I) * N))
})

$('select').on('change', function () {
    let P = Number($("#amount").val().replace(",", ""))                    //principle / initial amount borrowed
    let I = $("#interest").val() / 100 / 12;       //monthly interest rate
    let N = $("#years").val() * 12;                //number of payments months
    monthlyPayment(P, N, I)
    $("#monthly").text("$" + Math.round(monthlyPayment(P, N, I)))
    $("#totalCost").text("$" + Math.round(monthlyPayment(P, N, I) * N))

});
