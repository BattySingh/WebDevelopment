function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}

console.log("hello-world: " + kebabToSnake("hello-world"));
