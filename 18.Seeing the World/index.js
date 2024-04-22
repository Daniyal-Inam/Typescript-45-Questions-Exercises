"use strict";
//Task no 18
Object.defineProperty(exports, "__esModule", { value: true });
let vistCountry = ["Saudi Arabia", "Turkey", "Dubai", "China", "Malaysia"];
//Print array in its original order.
console.log("original order: ", vistCountry);
//Print array in alphabetical order without modifying the actual list.
console.log("alphabetical order: ", [...vistCountry].sort());
//Showing the array is still in its original order.
console.log("original order after sorting: ", vistCountry);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order: ", [...vistCountry].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("original order, after reverse alphabetical order: ", vistCountry);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse order in original order: ", vistCountry.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("original order after reverse order: ", vistCountry.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sort alphabetical order in original order: ", vistCountry.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("sort to reverse alphabetical order", vistCountry.sort().reverse());
