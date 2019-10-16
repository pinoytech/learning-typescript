class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("x:" + this.x);
    }
    getDistance(another) { }
}
let point = new Point(3, 4);
point.draw();
let secondPoint = new Point(3);
secondPoint.draw();
