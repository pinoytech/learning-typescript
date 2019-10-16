class Point {
  private x: number;
  y: number;
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  // Alernative Way for declaring x and y
  // constructor(private x?: number, public y?: number) {}

  draw() {
    console.log("x:" + this.x);
  }
  getDistance(another: Point) {}
}

let point: Point = new Point(3, 4);
point.draw();

let secondPoint: Point = new Point(3);
secondPoint.draw();
