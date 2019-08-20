var num = prompt("Enter the number: ");

function addNum(num) {
    var sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }

    return sum;
}

var result = addNum(num);
alert(`The sum is: ${result}`);
