num = -9

while (num > -10 && num < 19) {
    console.log(num);
    num++;
}

alert("Starting even numbers:");

var even1 = 11;
while (even1 > 10 && even1 < 40) {
    if (even1 % 2 == 0) {
        console.log(even1);
    }
    even1++;
}

alert("STARTING ODD NUMBERS:");

var num1 = 301;
while (num1 > 300 && num1 < 333) {
    if (num1 % 2 == 1) {
        console.log(num1);
    }
    num1++;
}

alert("Divisible by 5 and 3 between 5 and 50");

num2 = 6;
while (num2 > 5 && num2 < 50) {
    if ( (num2 % 3 == 0) && (num2 % 5 == 0) ) {
        console.log(num2);
    }
    num2++;
}
