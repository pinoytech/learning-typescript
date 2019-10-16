// asserting data type on declaration
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];

const ColorRed = 0;

// using the dot notation when using enum data types
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3
}
let BackgroundColor = Color.Green;
