var num = prompt("Enter the number: ");
let t1 = performance.now();

function addNum(num) {
    var sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }

    return sum;
}

let t2 = performance.now();

var result = addNum(num);
console.log(`The sum is: ${result}`);
console.log("Time: " + ((t2 - t1) / 1000) + " seconds");
