// abstractクラスはインスタンス作成できない。継承されるためのクラスである。
abstract class Department {
    // default is public
    // private name: string;
    // private:外部、外部クラスからアクセスできない
    // private employees: string[] = []
    // protected:外部からアクセスできないが、このクラスを継承したサブ（派生）クラスからはアクセスできる
    protected employees: string[] = []
    // static property
    static fiscalYear = 2020

    // static method
    static createEmployee(name: string) {
        return { name: name }
    }

    constructor(protected readonly id: string, private name: string) {
        // this.name = n
        // console.log(Department.fiscalYear)
        console.log(this.name)
    }

    abstract describe(this: Department): void;

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

    describe() {
        console.log('IT部門・ID：' + this.id)
    }
}

// class DevelopmentSection extends ITDepartment {
//     addEmployee(name: string) {
//         if (name === 'Max') {
//             return;
//         }
//         this.employees.push(name)
//     }
// }


class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('レポートがありません。')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('正しい値を設定して下さい。')
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
    }

    describe() {
        console.log('会計部門・ID：' + this.id)
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports)
        console.log(this.lastReport)
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name)
    }
}


const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('D1', ['Max'])
it.addEmployee('Max')
it.addEmployee('Manu')

console.log(it)
it.describe()
it.printEmployeeInfomation()


const accounting = new AccountingDepartment('D2', [])

// Error setter & getter
// console.log(accounting.mostRecentReport)
// accounting.mostRecentReport = ''

accounting.mostRecentReport = 'settter something'

accounting.addReport('Something1')
accounting.addReport('Something2')
console.log(accounting.mostRecentReport)
// override method
accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.describe()

// accounting.printReports()
// accounting.printEmployeeInfomation()
console.log(accounting)


// const a = new DevelopmentSection('D3', [])

// // override method
// a.addEmployee('Maxa')
// a.addEmployee('Manua')

// // a.employees[1] = 'max'

// a.printEmployeeInfomation()
// console.log(a)
