"use strict";
//Task no 43
// Unchanged Magicians: Start with your work from Exercise 42. Call the function
//make_great() with a copy of the array of magicians’ names. Because the original
//array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the
//original names and one array with the Great added to each magician’s name.
const magician = [
    "Harry Houdini",
    "David Blaine",
    "Doug Henning",
    "Dai Vernon",
];
function copy_magicianArray(copy_magicn_Arr) {
    return [...copy_magicn_Arr];
}
;
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
const copy_magician = copy_magicianArray(magician);
make_great(copy_magician);
console.log("This is my original array: " + "\n");
show_magicians(magician);
console.log("\n" + "This is my modfied copy of the array: " + "\n");
show_magicians(copy_magician);
