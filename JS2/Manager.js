const Employee = require('./Employee');

class Manager extends Employee {
    constructor(firstName, lastName, salary, position, department, bonus) {
        super(firstName, lastName, salary, position);
        this.department = department;
        this.bonus = bonus;
    }

    getSalary() {
        return this.salary + this.bonus;
    }

    toString() {
        return `${super.toString()}, Department: ${this.department}, Bonus: ${this.bonus}`;
    }
}

module.exports = Manager;