"use strict";
//Task no 33
Object.defineProperty(exports, "__esModule", { value: true });
//Store the numbers 1 through 9 in a array.
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Loop through the array.
//Use an if-else chain inside the loop to print the proper ordinal ending for
//each number.Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",
//and each result should be on a separate line.
for (let ordinalNumber of ordinalNumbers) {
    if (ordinalNumber === 1) {
        console.log(`${ordinalNumber}st`);
    }
    else if (ordinalNumber === 2) {
        console.log(`${ordinalNumber}nd`);
    }
    else if (ordinalNumber === 3) {
        console.log(`${ordinalNumber}rd`);
    }
    else {
        console.log(`${ordinalNumber}th`);
    }
}
