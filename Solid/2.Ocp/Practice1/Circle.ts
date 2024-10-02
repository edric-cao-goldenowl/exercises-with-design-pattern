import { IShape } from "./IShape";

export class Circle implements IShape {
    constructor(public radius: number) {}

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}