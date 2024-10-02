export class Employee {
    constructor(public name: string) { }

    calculateSalary(): number {
        throw new Error("Unknown employee type");
    }
}