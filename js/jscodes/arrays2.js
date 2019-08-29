let list1 = [1, 2, 3, 4, 5];
let res = 0;

document.write("<ul>");

for (let i = 0; i < list1.length; i++) {
    document.write("<li>" + list1[i] + "</li>");

    res = res + list1[i];
}

document.write("</ul>");

document.write("<strong>");
document.write("<br><br>Sum: " + res);
document.write("</strong>");