// Inline annotation to declare variable data type
let drawPoint = (point: { x: number; y: number }) => {
  //...
};

drawPoint({
  x: 1,
  y: 2
});

// Using interfaces
// interfaces use Pascal naming convention

interface Point {
  x: number;
  y: number;
  draw: () => void;
}

let drawAnotherPoint = (point: Point) => {
  //...
};

let getDistance = (pointA: Point, pointB: Point) => {
  //...
};

drawAnotherPoint({
  x: 1,
  y: 2
});
