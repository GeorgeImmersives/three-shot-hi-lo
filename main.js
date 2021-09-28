const prompt = require("prompt-sync")();

let num = Math.ceil(Math.random()*100);

let guess1 = Number(prompt("Guess a number between 1 and 100! "));

if(guess1 == num){
    console.log(`Congrats you guessed the number of ${num}!`)
}
else{
    if(guess1 > num){
        console.log('Sorry, too high! Guess again!');
    }
    else if(guess1 < num){
        console.log('Sorry, too low! Guess again!');
    }
    const guess2 = Number(prompt('Enter guess: '));
    if(guess2 == num){
        console.log(`Congrats you guessed the number of ${num}!`)
    }
    else{
        if(guess2 > num){
            console.log('Sorry, too high! Guess again!');
            
        }
        else if(guess2 < num){
            console.log('Sorry, too low! Guess again!');
        }
        let guess3 = Number(prompt('Enter final guess: '));
        if(guess3 == num){
            console.log(`Congrats you guessed the number of ${num}!`)
        }
        else{
            console.log(`Sorry, the correct number is ${num}. You lose!`);
        }
    }
}



