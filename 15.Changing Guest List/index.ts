//Task no 15

let guestList :string[] = ["Arsal", "Wahib", "Nabeel", "Zafeer"];

//name of the guest who can’t make it to the dinner.

let not_attend_diner :string = "Arsal";
console.log(`${not_attend_diner} cannot attend the dinner`);

//replacing the guest who cant make it to the dinner, a new guest.

guestList.splice(0,1,"Kabir");
console.log(guestList);

//Print a second set of invitation messages, who is still in your list.

guestList.forEach((newList)=>{
    console.log(`Dear ${newList}, you are invited to the dinner.`);
});