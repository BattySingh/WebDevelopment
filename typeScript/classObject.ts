class Point {
    x: number;
    y: number;

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }
}

let point: Point = new Point(); // creating an object and allocating memory to it
point.x = 3;
point.y = 2;
point.draw();