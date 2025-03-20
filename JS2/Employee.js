class Employee {
    constructor(firstName, lastName, salary, position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.position = position;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    toString() {
        return `Employee [First Name: ${this.firstName}, Last Name: ${this.lastName}, Salary: ${this.salary}, Position: ${this.position}]`;
    }
}

module.exports = Employee;