import { IShape } from "./IShape";

export class Triangle implements IShape {
    constructor(public length: number) {}

    calculateArea(): number {
        return 0.5 * this.length * this.length;
    }
}