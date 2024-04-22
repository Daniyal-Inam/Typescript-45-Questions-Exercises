"use strict";
//Task no 24
Object.defineProperty(exports, "__esModule", { value: true });
let name1 = "Daniyal";
let name2 = "Inam";
let name3 = "Daniyal Inam";
//Tests for equality and inequality with strings
console.log("Equality test with strings: ", name1 == "Daniyal");
console.log("Inequality test with strings: ", name1 != name2);
//Tests using the lower case function
console.log("lower case function test: ", name1.toLocaleLowerCase() == "daniyal");
//Numberic tests involving equality and inequality, greater than and less than,
//greater than or equal to, and less than or equal to
let num1 = 18;
let num2 = 22;
console.log("Equality test with numbers: ", num1 == 18);
console.log("Inequality test with numbers: ", num1 != num2);
console.log("Greater than test with numbers: ", num2 > num1);
console.log("Less than test with numbers: ", num1 < num2);
console.log("Greater than or equal to test with numbers: ", num2 >= num1);
console.log("Less than or equal to test with numbers: ", num1 <= num2);
//Tests using "and" and "or" operators
console.log("And operator test: ", (num1 == 18) && (num2 == 22));
console.log("Or operator test: ", (num1 == 18) || (num2 == 22));
//Test whether an item is in a array
let names = ["Daniyal", "Inam", "Kabir"];
console.log("Is 'Daniyal' in the list: ", names.includes("Daniyal"));
// Test whether an item is not in a array
console.log("Is 'Wahib' is not in the list: ", !names.includes("Wahib"));
