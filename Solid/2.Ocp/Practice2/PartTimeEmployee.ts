import { Employee } from './Employee';

export class PartTimeEmployee extends Employee {
    calculateSalary(): number {
        return 3000;
    }
}