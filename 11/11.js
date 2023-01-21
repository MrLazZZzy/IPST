class Worker {
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getName() {
        console.log(this.name + ' ' + this.surname)
    }
    getSalary() {
        console.log('Зарплата', this.rate * this.days)
    }

}

let Worker1 = new Worker('Роман', 'Яринский', 200, 14)
Worker1.getName()
Worker1.getSalary()

let Worker2 = new Worker('Иван', 'Попоша', 0, 365)
Worker2.getName()
Worker2.getSalary()

let Worker3 = new Worker('Илья', 'Сишарп', 14500, 30)
Worker3.getName()
Worker3.getSalary()









