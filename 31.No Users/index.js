"use strict";
//Task no 31
// No Users: Add an if test to Exercise 30 to make sure the list of users is
// not empty.
let userNames = [
    "daniyal",
    "hammad",
    "admin",
    "wahib",
    "haris",
    "kabir",
];
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct
// message is printed.
let user = userNames.splice(userNames.length, userNames.length);
console.log("We need to find some users!");
