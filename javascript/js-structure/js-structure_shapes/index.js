import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Square from "./components/Circle/Square.js";
import Pentagon from "./components/Circle/pentagon.js";

console.clear();

const root = document.getElementById("root");

const circle = Circle();
root.append(circle);

const square = Square();
root.append(square);

const pentagon = Pentagon();
root.append(pentagon);

root.append(circle, square, pentagon);