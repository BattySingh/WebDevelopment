// DOM selectors

let ids = document.querySelector("h1");
ids.style.color = "#338899";

let classs = document.querySelector("body");
let bgc = false;

setInterval ( function () {
    if ( bgc ) {
        classs.style.background = "white";
    } else {
        classs.style.background = "#88AADD";
    } bgc = !bgc;
}, 1000);
