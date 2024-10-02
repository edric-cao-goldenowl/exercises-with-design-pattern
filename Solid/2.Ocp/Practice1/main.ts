import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { IShape } from "./IShape";
import { ShapeCollection } from "./ShapeCollection";
import { Triangle } from "./Triangle";

let shapes: IShape[] = [
    new Circle(5),
    new Rectangle(4, 5),
    new Triangle(3),
];

const shapesInstance = new ShapeCollection(shapes);
console.log(shapesInstance.calculateTotalArea());