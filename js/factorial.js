function factorial(num) {
    if (num > 0) {
        return (num*factorial(num-1));
    } else if (num == 0) {
        return 1;
    }
}

console.log("Factorial of 5 is: " + factorial(5));
console.log("Factorial of 2 is: " + factorial(2));
console.log("Factorial of 10 is: " + factorial(10));
console.log("Factorial of 0 is: " + factorial(0));
