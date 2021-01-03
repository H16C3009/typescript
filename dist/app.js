"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`department (${this.id}):${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('D1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
console.log(accounting);
accounting.describe();
accounting.printEmployeeInfomation();
//# sourceMappingURL=app.js.map