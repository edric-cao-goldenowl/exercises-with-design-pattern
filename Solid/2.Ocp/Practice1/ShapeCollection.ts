import { IShape } from './IShape';

export class ShapeCollection {
    constructor(private shapes: IShape[]) {}

    calculateTotalArea(): number {
        return this.shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
    }
}