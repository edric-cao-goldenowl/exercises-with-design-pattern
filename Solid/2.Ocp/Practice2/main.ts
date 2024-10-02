import { FullTimeEmployee } from './FullTimeEmployee';
import { PartTimeEmployee } from './PartTimeEmployee';
import { Intern } from './Intern';

const fullTimeEmployee = new FullTimeEmployee("Alice");
console.log(`${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`);

const partTimeEmployee = new PartTimeEmployee("Bob");
console.log(`${partTimeEmployee.name}'s salary is ${partTimeEmployee.calculateSalary()}`);

const internEmployee = new Intern("Charlie");
console.log(`${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`);

const employee = new Intern("employee");
console.log(`${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`);