import { Employee } from "../../../Solid/2.Ocp/Practice2/Employee";
import { FullTimeEmployee } from "../../../Solid/2.Ocp/Practice2/FullTimeEmployee";
import { Intern } from "../../../Solid/2.Ocp/Practice2/Intern";
import { PartTimeEmployee } from "../../../Solid/2.Ocp/Practice2/PartTimeEmployee";


describe('Employee Salary Calculation', () => {
    test('FullTimeEmployee should have a salary of 5000', () => {
        const employee = new FullTimeEmployee("Alice");
        expect(employee.calculateSalary()).toBe(5000);
    });

    test('PartTimeEmployee should have a salary of 3000', () => {
        const employee = new PartTimeEmployee("Bob");
        expect(employee.calculateSalary()).toBe(3000);
    });

    test('Intern should have a salary of 1000', () => {
        const employee = new Intern("Charlie");
        expect(employee.calculateSalary()).toBe(1000);
    });

    test('Employee should throw an error when calling calculateSalary', () => {
        const employee = new Employee("Generic Employee");
        expect(() => employee.calculateSalary()).toThrow("Unknown employee type");
    });
});
