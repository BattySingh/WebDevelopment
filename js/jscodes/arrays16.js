let ages = [25, 12, 18, 5];

document.write("Ages: " + ages.join(" - - - - ") + "<br>");

document.write("Value matching criteria is: " + ages.find(checkCriteria));

function checkCriteria(age) {
    return (age >= 18);
}

document.write(", Index: " + ages.findIndex(checkCriteria));