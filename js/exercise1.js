var num = prompt("Enter your Age: ");

if (num < 0) {
    console.log("ERROR!");
} else if (num == 21) {
    console.log("Happy 21st Birthday.");
} else if (num % 2 == 1) {
    console.log("Your age is Odd.");
}
