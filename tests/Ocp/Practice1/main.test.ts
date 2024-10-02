import { Circle } from "../../../Solid/2.Ocp/Practice1/Circle";
import { Rectangle } from "../../../Solid/2.Ocp/Practice1/Rectangle";
import { ShapeCollection } from "../../../Solid/2.Ocp/Practice1/ShapeCollection";
import { Triangle } from "../../../Solid/2.Ocp/Practice1/Triangle";

describe('Shape', () => {
    test('nên tính diện tích của Circle', () => {
        const circle = new Circle(5);
        expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
    });

    test('nên tính diện tích của Rectangle', () => {
        const rectangle = new Rectangle(4, 5);
        expect(rectangle.calculateArea()).toBe(20);
    });

    test('nên tính diện tích của Triangle', () => {
        const triangle = new Triangle(3);
        expect(triangle.calculateArea()).toBe(4.5);
    });

    test('nên tính diện tích tổng của tất cả các hình dạng', () => {
        const shapes = [
            new Circle(5),
            new Rectangle(4, 5),
            new Triangle(3),
        ];
        const shapeCollection = new ShapeCollection(shapes);
        expect(shapeCollection.calculateTotalArea()).toBeCloseTo(103.04, 2);
    });
});
