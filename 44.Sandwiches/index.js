"use strict";
//Task no 44
//Sandwiches: Write a function that accepts a array of items a person wants on
//a sandwich. The function should have one parameter that collects as many items
//as the function call provides, and it should print a summary of the sandwich
//that is being ordered. Call the function three times, using a different number
//of arguments each time.
function make_sandwich(items) {
    console.log("Making a sandwich with: ");
    items.forEach((element) => console.log("- " + element));
    console.log("\nEnjoy your sandwhich ! \n");
}
make_sandwich(["beef", "cheese", "tomato"]);
make_sandwich(["ham", "cheese", "lettuce"]);
make_sandwich(["chicken", "cheese"]);
