//Task no 16

//Start with your program from Exercise 15.
let guestList :string[] = ["Arsal", "Wahib", "Nabeel", "Zafeer"];

//name of the guest who can’t make it to the dinner.

let not_attend_diner :string = "Arsal";
//console.log(`${not_attend_diner} cannot attend the dinner`);

//replacing the guest who cant make it to the dinner, a new guest.

guestList.splice(0,1,"Kabir");
//console.log(guestList);

//informing people that you found a bigger dinner table.
guestList.forEach((newList)=>{
    console.log(`Dear ${newList}, i found a bigger dinner table so i am invited more people.`);
});

// Add one new guest to the beginning of your array.
guestList.unshift("Dayan");
console.log(guestList);

// Add one new guest to the middle of your array.
guestList.splice(3,0,"Arsalan");
console.log(guestList);

// Use append() to add one new guest to the end of your list.
guestList.push("Afnan");
console.log(guestList);

//New set of invitation messages, one for each person in your list.
guestList.forEach((more_Guests)=>{
    console.log(`Dear ${more_Guests}, you are invited in the more people list on dinner.`);
});