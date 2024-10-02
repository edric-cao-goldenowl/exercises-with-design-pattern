import { Employee } from "./Employee";

export class FullTimeEmployee extends Employee {
    calculateSalary(): number {
        return 5000;
    }
}
