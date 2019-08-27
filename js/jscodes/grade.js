let percentage = 88;

if (percentage >= 80 && percentage <= 100) {
    document.write("Merit");
} else if (percentage >= 60 && percentage <= 79) {
    document.write("Ist Division");
} else if (percentage >= 45 && percentage <= 59) {
    document.write("IInd Division");
} else if (percentage >= 33 && percentage <= 44) {
    document.write("IIIrd Division");
} else if (percentage <= 32) {
    document.write("Fail");
}