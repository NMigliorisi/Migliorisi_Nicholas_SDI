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
if(gameType = "Powerball") {
    var pwrStart = 1
    var pwrEnd = 59
    var numbers = new Array();
    for (n = pwrStart; n <= pwrEnd; n++) {
        numbers.push(n);
    }

    function powerNumbers() {
        var n = this.length, m, temp;
        if (n === 0) return false;
        while (--n) {
            n = Math.floor(Math.random() * ( n + 1 ));
            temp = this[m];
            this[n] = this[m];
            this[m] = temp;
        }
    }

    Array.prototype.shuffle = powerNumbers
    numbers.shuffle();

    numbers.pop();
    numbers.pop();
    numbers.pop();
    numbers.pop();
    numbers.pop();
}





