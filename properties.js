class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log("x:" + this.x);
    }
    getDistance(another) { }
    set x(value) {
        this._x = value;
    }
    get x() {
        return this._x;
    }
}
let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();
