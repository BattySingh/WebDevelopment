var age = prompt("Enter your age: ");

if (age < 18) {
    console.log("Sorry, you are not old enough to enter the venue!");
}

else if (age >= 18 && age < 21) {
    console.log("You can ENTER, BUT CANNOT DRINK!!!");
}

else {
    console.log("Come on in. YOU CAN DRINK.");
}
