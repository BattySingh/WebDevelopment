let name = ["Raman", "Daya", "Abhijeet", "Freddy"];
name = name.sort();

document.write("<ul>");
for (let i = 0; i < name.length; i++) {
    document.write("<li>" + name[i] + "</li>");
}
document.write("</ul>");

name = name.reverse();

document.write("<ul>");
for (let i = 0; i < name.length; i++) {
    document.write("<li>" + name[i] + "</li>");
}
document.write("</ul>");