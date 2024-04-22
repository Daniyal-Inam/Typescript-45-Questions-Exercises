"use strict";
//Task no 42
Object.defineProperty(exports, "__esModule", { value: true });
//Great Magicians: Start with a copy of your program from Exercise 41. Write
//a function called make_great() that modifies the array of magicians by adding
//the phrase the Great to each magician’s name. Call show_magicians() to see
//that the list has actually been modified.
const magician = [
    "Harry Houdini",
    "David Blaine",
    "Doug Henning",
    "Dai Vernon",
];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
make_great(magician);
show_magicians(magician);
