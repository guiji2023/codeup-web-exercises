const  targetNumber = Math.floor(Math.random() * 100 ) +1;

let attempts = 0;

function checkGuess(){

    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

    // check if the guess is valid
    if (!isNaN(userGuess) && userGuess > 0 && userGuess < 100){
        attempts ++;
        if (userGuess === targetNumber){
            alert("Congrats, you got it!");
        } else{


                checkGuess();
        }
    }
}

checkGuess();