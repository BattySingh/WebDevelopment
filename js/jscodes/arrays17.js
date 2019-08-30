let ages = [5, 25, 17, 30, 1];

document.write("Ages: " + ages.join(" - - - - "));

function checkAge(age) {
    return (age >= 18);
}

document.write("<br><br>New Ages: " + ages.filter(checkAge));