let number = Math.round(Math.random() * 100 + 1);
let guess = "";
while (guess != number) {
    guess = prompt("Guess a number between 1 and 100:");
if ( guess > number )
    alert("Too high.");
else if ( guess < number )
    alert("Too low.");
else 
    alert("Correct!")

}
