//Nicholas Migliorisi  Functions Assignment  06/25/2015 SDI Week 4  WDDBS

//Powerball and Florida State Lottery



while(true){                     //Starting a loop to validate the user input
    var gameType = prompt("What game would you like to play? \nFlorida State Lottery or Powerball?"); //colecting the data from the user
if(gameType == "Powerball"){          //If the user selects powerball then the loop breaks and it prints to the console
    console.log("Powerball")
    break;
}else{                               //If the user doesn't select Powerball then the code looks here
    if(gameType == "Florida State Lottery"){        //If the user picks Florida state Lottery then its printed to the console and the loop breaks
        console.log ("Florida State Lottery")
        break;
    }
    }
    if(gameType != "Powerball" || "Florida State Lottery"){   //If neither Powerball nor Florida State Lottery is chosen, the user is alerted and the loop goes back to the start.
        alert("Thats not a valid game. Try again!")   //If none are selected and the user says PA lottery, for example, this yells at them.
    }
}


if(gameType = "Powerball") {    //If the user picks Powerball the code arrives here to figure out the 5 random numbers
    function randomBall(min, max) {
        return Math.round(min + Math.random() * (max - min));  //Defining the minimum and maximum bounds for the game

    }

    var index = {}, numbers = [];  //This whole block is the randomization  the top half is the bounds of 5 numbers
    for (var n = 1; n <= 5; n++) {
        var number;
        do {
            number = randomBall(1, 59);                   //The bottom half is the range of numbers
        } while (index.hasOwnProperty(" " + number));
        index[" " + number] = true;
        numbers.push(number);
    }

    delete index;

    function powerBall(min, max) {
        return Math.round(min + Math.random() * (max - min));  //Defining the minimum and maximum bounds for the powerball

    }

    var pbIndex = {}, pbNumbers = [];  //This is where we find the powerball number, just like we found th other 5 above
    for (var n = 1; n < 2; n++) {
        var pbNumber;
        do {
            pbNumber = powerBall(1, 35);
        } while (pbIndex.hasOwnProperty(" " + pbNumber));
        pbIndex[" " + pbNumber] = true;
        pbNumbers.push(pbNumber);
    }

    delete index;

    console.log("Your numbers are " + numbers.toString() + " and your Powerball is " + pbNumbers.toString()); //output to console

}



if(gameType = "Florida State Lottery") {    //If the user picks FS Lottery the code arrives here to figure out the 5 random numbers
    function randomBall(min, max) {
        return Math.round(min + Math.random() * (max - min));  //Defining the minimum and maximum bounds for the game

    }

    var index = {}, numbers = [];  //This whole block is the randomization  the top half is the bounds of 5 numbers
    for (var n = 1; n <= 6; n++) {
        var number;
        do {
            number = randomBall(1, 53);                   //The bottom half is the range of numbers
        } while (index.hasOwnProperty(" " + number));
        index[" " + number] = true;
        numbers.push(number);
    }

    delete index;
console.log("Your FL State Lottery numbers are " + numbers.toString());
}



