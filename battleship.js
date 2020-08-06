var randomloc = Math.floor(Math.random() * 10)
var location1 =randomloc;
var location2 = location1 + 1;
var location3 =location2 + 1;
var misses =0;
var guess;
var hits =0;
var guesses = 0; 
var isSunk = false;
var isOver = false;
var answer;



function play() {
    

while (isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):")

    if (guess < 0 || guess > 9) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1; 
        }

    if (guess == location1 || guess == location2 || guess == location3) { 
            alert("HIT!");
            hits = hits + 1; 
                if (hits == 3) {
                    isSunk = true;
                    alert("You sank my battleship!"); 
                    playAgain();
                }
    } else if(guess !== location1 || guess !== location2 || guess !== location3){
            alert("MISS");
            misses = misses + 1;
                if (misses == 3){
                    alert("Your ship is sunk");
                    playAgain();
                }
    }
    

}

function playAgain () {
        
            answer = prompt("Would you like to play again? Enter 1 or 2");

                if(answer == 1){
                    play();
                
        }
                else{
                    var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + Math.floor(((3/guesses)*100))+ "%"; 
                    alert(stats);
                }
             
        
    }



}
    play();