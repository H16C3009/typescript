class Department {
    // default is public
    private name: string;
    private employees: string[] = []

    constructor(n: string) {
        this.name = n
    }

    describe(this: Department) {
        console.log('department:' + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInfomation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('Accounting')
accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna'
// accounting.name = 'New Name'

console.log(accounting)
accounting.describe()
accounting.printEmployeeInfomation()

// const accountingCopy = { name: 'dummy', describe: accounting.describe }
// accountingCopy.describe()

