"use strict";
//Task no 34
Object.defineProperty(exports, "__esModule", { value: true });
//Think of at least three kinds of your favorite pizza. Store these pizza names
//in a array,
let pizzas = ["fajita", "tikka", "malai boti"];
//Modify your for loop to print a sentence using the name of the pizza instead
//of printing just the name of the pizza. For each pizza you should have one
//line of output containing a simple statement like I like pepperoni pizza.
//Add a line at the end of your program, outside the for loop, that states how
//much you like pizza. The output should consist of three or more lines about
//the kinds of pizza you like and then an additional sentence, such as I really
//love pizza!
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("\n", "I really love pizza!");