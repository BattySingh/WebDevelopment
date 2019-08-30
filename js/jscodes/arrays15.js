let ages = [12, 22, 18, 10];

document.write("Ages: " + ages.join(" - ") + "<br>");

document.write("Ages: " + ages.some(checkAge));

function checkAge(age) {
    return (age >= 18);
}