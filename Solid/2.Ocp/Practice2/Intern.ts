import { Employee } from './Employee';

export class Intern extends Employee {
    calculateSalary(): number {
        return 1000;
    }
}