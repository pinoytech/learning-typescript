class Point {
  constructor(private _x?: number, public _y?: number) {}

  draw() {
    console.log("x:" + this.x);
  }
  getDistance(another: Point) {}

  set x(value) {
    this._x = value;
  }

  get x() {
    return this._x;
  }
}

let point: Point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();
