"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(this.name);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT部門・ID：' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートがありません。');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を設定して下さい。');
        }
        this.addReport(value);
    }
    describe() {
        console.log('会計部門・ID：' + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
        console.log(this.lastReport);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('D1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
console.log(it);
it.describe();
it.printEmployeeInfomation();
const accounting = new AccountingDepartment('D2', []);
accounting.mostRecentReport = 'settter something';
accounting.addReport('Something1');
accounting.addReport('Something2');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();
console.log(accounting);
//# sourceMappingURL=app.js.map