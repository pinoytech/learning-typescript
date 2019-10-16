export class Point {
  constructor(private x?: number, public y?: number) {}

  draw() {
    console.log("x:" + this.x);
  }
}
