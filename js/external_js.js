"use strict";

console.log("hello from externlal JavaScript");
alert("Welcome to my website!");
var userColor = prompt("What is your favorite color?");
alert("Great " + userColor + " is my favorite color too!");

var rentalPerDayDollars = 3;
var littleMermaidDays;
var brotherBearDays;
var herculesDays;
var totalRentalCost;

littleMermaidDays = prompt("How many days did you the little mermaid for?");
alert("Your total is $" + littleMermaidDays * rentalPerDayDollars);

brotherBearDays = prompt("How many days did you rent Brother bear for?");
alert("Your total is $" + brotherBearDays * rentalPerDayDollars);

herculesDays = prompt("How many days for Hercules?")
alert("Your total is $" + herculesDays * rentalPerDayDollars);

totalRentalCost = (brotherBearDays * rentalPerDayDollars) + (herculesDays * rentalPerDayDollars) + (littleMermaidDays * rentalPerDayDollars);
alert("Your grand total is $" + totalRentalCost);

var googleHourlyRateDollars = 400;
var amazonHourlyRateDollars = 380;
var facebookHourlyRateDollars = 350;
var googleHours;
var amazonHours;
var facebookHours;
var totalPayment;
totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;

googleHours = prompt("How many hours did you work for Google this week?");
alert("You will get $" + googleHourlyRateDollars * googleHours + " from google this week!");

amazonHours = prompt("How many hours did you work for Amazon this week?");
alert("You will get $" + amazonHourlyRateDollars * amazonHours + " from Amazon this week!");

facebookHours = prompt("How many hours for FB this week?");
alert("You will get $" + facebookHours * facebookHourlyRateDollars + " from FB this week");

alert("Your total payment is $" + totalPayment);