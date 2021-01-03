class Department {
    // default is public
    // private name: string;
    // private:外部、外部クラスからアクセスできない
    // private employees: string[] = []
    // protected:外部からアクセスできないが、このクラスを継承したサブ（派生）クラスからはアクセスできる
    protected employees: string[] = []


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


// const it = new ITDepartment('D1', ['Max'])
// it.addEmployee('Max')
// it.addEmployee('Manu')

// console.log(it)
// it.describe()
// it.printEmployeeInfomation()


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
