let name = [
    ['gohan', 13, 'male', 'Saiyan'],
    ['goku', 25, 'male', 'Super Saiyan'],
    ['chichi', 23, 'female', 'Strong'],
    ['Vegeta', 28, 'male', 'Super Saiyan']
];

document.write("<table border=\"1\">");

for (let i = 0; i < name.length; i++ ) {
    document.write("<tr>");
    for (let j = 0; j < 4; j++) {
        document.write("<td>" + name[i][j] + "</td>");
    }
    document.write("<br>");
    document.write("</tr>");
}

document.write("<table>");