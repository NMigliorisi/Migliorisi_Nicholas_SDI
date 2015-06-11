//Nicholas Migliorisi  06/11/15 Expressions assignment WDDBS Week 2 SDI

var lengthInput = prompt("We are finding the density of a box with a mass of 100 kilograms. \nPlease insert the length of the box:");                                                     //Gathering the length
var widthInput = prompt("Please insert the width:");         // Gathering the width
var heightInput = prompt("Please insert the height:");       //Gathering the height

var volume = lengthInput * widthInput * heightInput;         //Finding volume
var mass = 100;                                              //Determining the mass

var density = mass / volume;                                 //finding density
//console.log(density);                                      // prints it to the console
alert("The density of our box is "+ density + "kg/m cubed"); //displays answer to user

