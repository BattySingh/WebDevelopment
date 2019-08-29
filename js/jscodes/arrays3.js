// creating an array and taking values from the user
let colors = new Array(3);

for (let i = 0; i < colors.length; i++) {
    colors[i] = prompt("Enter your one favorite color: ");
}

alert("Processing........");

document.write("<ol>");
for (let i = 0; i < colors.length; i++) {
    document.write("<li>" + colors[i] + "</li>");
}
document.write("</ol>");