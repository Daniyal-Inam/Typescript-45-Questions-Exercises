//Task no 17

//Initial list of guests
let guest :string[] = ["Dayan", "Kabir", "Wahib", "Arsalan", "Nabeel", "Zafeer", "Afnan"];

//Informing that only two people can be invited  
console.log("Due to limited space avaiable, only two people can be invited for dinner.");

//removing guest, only two people remain
while(guest.length > 2){
    const  removedGusest =  guest.pop();
    console.log(`Sorry, ${removedGusest}, you're no longer for dinner`);
};

//Printing invitation to the remain two guest
guest.forEach((remainingGuest)=>{
    console.log(`Dear ${remainingGuest}, you're still invited to dinner.`);
});

//Removing the last two names from the list 
guest.pop();
guest.pop();

//final list to conform it's empty
console.log("final guest list: ", guest);