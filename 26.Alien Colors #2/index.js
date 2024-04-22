"use strict";
//Task no 26
let alien_color = 'green';
//write an if-else chain, If the alien’s color is green, print a statement that 
//the player just earned 5 points for shooting the alien.
//run the if block 
if (alien_color === 'green') {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points for shooting the alien.");
}
////run the else block 
alien_color = 'red';
if (alien_color === 'green') {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points for shooting the alien.");
}
