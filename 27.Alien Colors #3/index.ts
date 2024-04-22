//Task no 27

//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.

//first version alien_color = 'green'
let  alien_color: string = 'green';
 
if(alien_color === 'green'){
    console.log("player earned 5 points.");    
}else if(alien_color === 'yellow'){
    console.log("player earned 10 points.");    
}else if(alien_color === 'red'){
    console.log("player earned 15 points.");
}else{
    ("Please select right color");
}

//second version alien_color = 'yellow'
alien_color = 'yellow'

if(alien_color === 'green'){
    console.log("player earned 5 points.");    
}else if(alien_color === 'yellow'){
    console.log("player earned 10 points.");    
}else if(alien_color === 'red'){
    console.log("player earned 15 points.");
}else{
    ("Please select right color");
}

//third version alien_color = 'red'
alien_color = 'red'

if(alien_color === 'green'){
    console.log("player earned 5 points.");    
}else if(alien_color === 'yellow'){
    console.log("player earned 10 points.");    
}else if(alien_color === 'red'){
    console.log("player earned 15 points.");
}else{
    ("Please select right color");
}