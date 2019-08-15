var num = prompt("Guess a Number between 0 and 9: ");

if (num >=0 && num < 10) {
    if (num == 7) {
        alert("You Guessed it Right!");
    } else if (num > 7) {
        alert("Number too high. Play Again!")
    } else if (num < 7) {
        alert("Number too Low. Play Again!");
    }
}
