var text = prompt("Enter a name: ");

function capitalize(text) {
    return (text.charAt(0).toUpperCase() + text.slice(1));
}

console.log("Output: " + capitalize(text));
