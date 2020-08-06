var randomloc = Math.floor(Math.random() * 7)
var location1 =randomloc;
var location2 = location1+1;
var location3 =location2+1;
var misses= 0;
var guess;
var hits =0;
var guesses = 0; 
var isSunk = false;

while (isSunk == false){
    guess = prompt("Ready aim fire! (enter a # from 0-9):");
    if (guess<0 || guess > 10){
        alert("Please enter a valid cell #!");
    }
    else {
        guesses = guesses +1;
    }
        if (guess == location1 || guess == location2 || guess== location3){
            alert ("Hit");
            hits =hits+1;
            if (hits ==3){
                isSunk =true;
                alert("You sank my battleship!");
            }
                

        
        }else {
            alert("Miss");
            misses = misses + 1;
                if(misses == 3){
                isSunk = false;
                alert("Your battleship has sunk!")
                }
        }

}
    



var stats = "you took " +guesses+" guesses to sink the battleship,"+"which means your shooting accuracy was "+((3/guesses)*100)+"%";
alert(stats);

