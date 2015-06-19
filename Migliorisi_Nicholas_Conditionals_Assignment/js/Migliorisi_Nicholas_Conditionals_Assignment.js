//Nicholas Migliorisi Conditionals Assignment SDI Week 3 WDDBS 06/18/2015

var ticketOne = prompt("We are attempting to calculate the average price of concert tickets to get you a discount. \n Please insert a ticket price you have purchased:");                          //Gathering info for input 1.
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
alert("If you have spent over $250 or and average of more than $95, you are eligible.") //Informing the user of they are eligible for a discount

var tic1 = parseInt(ticketOne);             //Changing string to number value for ticket one
var tic2 = parseInt(ticketTwo);             //Changing string to number value for ticket two
var tic3 = parseInt(ticketThree);           //Changing string to number value for ticket three

var sum = tic1 + tic2 + tic3;

//console.log(sum);

var average = sum / 3;                       //Dividing the ticket price sum by the amount of tickets purchased

 //If the average of the tickets is  more than 95, or the sum of tickets is 300 or more they get a discount, if not they get nothing.

(average > 95 || sum > 250) ? alert("We will discount your next ticket 10%.") : alert("You are not eligible for a discount");                                  //Deciding the availability of a discount or not.


console.log("average of " + average + " dollars");  //Displaying the average price to the console
console.log("sum of  " + sum + " dollars");         //Displaying the sum of the tickets
