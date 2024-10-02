import { IShape } from "./IShape";

export class Rectangle implements IShape {
    constructor(public height: number, public width: number) {}

    calculateArea(): number {
        return this.height * this.width;
    }
}