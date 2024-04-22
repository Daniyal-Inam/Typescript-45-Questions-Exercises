"use strict";
//Task no 41
//Magicians: Make a array of magician’s names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array.
const magician = ['Harry Houdini', 'David Blaine', 'Doug Henning', 'Dai Vernon'];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
;
show_magicians(magician);
