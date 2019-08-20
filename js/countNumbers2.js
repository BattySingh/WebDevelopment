let num = prompt("Enter the number: ");

let t1 = performance.now();

function add (num) {
    return (num * (num + 1) / 2);
}

let res = add(num);
let t2 = performance.now();

console.log("Result: " + res);
console.log(`Time: ${(t2 - t1) / 1000} seconds`);
