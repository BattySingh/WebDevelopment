var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point;
}());
var point = new Point(); // creating an object and allocating memory to it
point.x = 3;
point.y = 2;
point.draw();
