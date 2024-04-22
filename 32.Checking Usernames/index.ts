//Task no 32

//Make a list of five or more usernames called current_users.
let current_users: string[] = [
  "daNiyal",
  "Wahib",
  "abdUllah",
  "hussain",
  "huzaifa",
];

//Make another list of five usernames called new_users. Make sure one or two of
//the new usernames are also in the current_users list.

let new_users: string[] = ["Afnan", "Dayan", "Noman", "Daniyal", "Wahib"];

//Loop through the new_users list to see if each new username has already been
//used. If it has, print a message that the person will need to enter a
//new username. If a username has not been used, print a message saying that
//the username is available.

// Make sure your comparison is case insensitive. If 'John' has been used,
//'JOHN' should not be accepted.

new_users.forEach((new_usersName) => {
  let lowerCase = new_usersName.toLocaleLowerCase();
  if (
    current_users
      .map((current_usersName) => current_usersName.toLocaleLowerCase())
      .includes(lowerCase)
  ) {
    console.log(
      `The username ${new_usersName} is not available.Please write a different username`
    );
  } else {
    console.log(`The username ${new_usersName} is available`);
  }
});