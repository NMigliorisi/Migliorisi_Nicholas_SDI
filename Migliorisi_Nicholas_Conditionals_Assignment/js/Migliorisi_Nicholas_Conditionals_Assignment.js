//Nicholas Migliorisi Conditionals Assignment SDI Week 3 WDDBS 06/18/2015

var ticketOne = prompt("We are attempting to calculate the average price of concert tickets to decide a price cut. \n Please insert a ticket price you have purchased:");                          //Gathering info for input 1.
var ticketTwo = prompt("Insert another price you have paid:");                //Gathering info for input 2.
var ticketThree = prompt("Insert a price a friend or relative has paid:");    //Gathering info for input 3.
var forgotPrice = ("You forgot to tell me a price");                          //variable to prompt the user if they forgot to give a price.

//If a slot is left blank, then a prompt will pop at the end asking for a price
if(ticketOne == ""){
    prompt(forgotPrice)
}else{
    ticketTwo
}

if(ticketTwo == ""){
    prompt(forgotPrice)
}else{
    ticketThree
}

if(ticketThree == ""){
    prompt(forgotPrice)
}else{
 alert("Thank You!")
}

var sum = ticketOne + ticketTwo + ticketThree

var average = sum / 3

if(average > 95){
    alert("We will discount your next ticket 10%.")
}else{
   alert("You are not eligible for a discount.")
}

console.log(average);
