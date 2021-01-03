"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('department:' + this.name);
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();
const accountingCopy = { name: 'dummy', describe: accounting.describe };
accountingCopy.describe();
//# sourceMappingURL=app.js.map