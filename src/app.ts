class Department {
    // default is public
    // private name: string;
    private employees: string[] = []

    constructor(private readonly id: string, private name: string) {
        // this.name = n
    }

    describe(this: Department) {
        console.log(`department (${this.id}):${this.name}`)
    }

    addEmployee(employee: string) {
        // this.id = 'D2'
        this.employees.push(employee)
    }

    printEmployeeInfomation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

// 継承元クラス＝ベースクラス
// 継承先（派生）クラス＝サブクラス
class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }
}


class AccountingDepartment extends Department {

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }
}


const it = new ITDepartment('D1', ['Max'])
it.addEmployee('Max')
it.addEmployee('Manu')

console.log(it)
it.describe()
it.printEmployeeInfomation()


const accounting = new AccountingDepartment('D2', [])
accounting.addReport('Something')
accounting.printReports()