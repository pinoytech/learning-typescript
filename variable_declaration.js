// asserting data type on declaration
let a;
let b;
let c;
let d;
let e = [1, 2, 3];
const ColorRed = 0;
// using the dot notation when using enum data types
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let BackgroundColor = Color.Green;
