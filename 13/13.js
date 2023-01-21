class Worker {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name
        this.#surname = surname
        this.#rate = rate
        this.#days = days
    }

    get Rate() {
        return this.#rate
    }
    get Days() {
        return this.#days
    }
    get Salary() {
        return this.#rate * this.#days
    }
    get Name() {
        return this.#name + ' ' + this.#surname
    }
    set days(days) {
        this.#days = days
    }
    set rate(rate) {
        this.#rate = rate
    }
}

let Worker1 = new Worker('Роман', 'Яринский', 200, 14)
Worker1.rate = 2500; Worker1.days = 62
console.log(Worker1.Name, Worker1.Salary, Worker1.Days, Worker1.Rate)

let Worker2 = new Worker('Иван', 'Попоша', 0, 365)
Worker2.rate = 0; Worker2.days = 365
console.log(Worker2.Name, Worker2.Salary, Worker2.Days, Worker2.Rate)

let Worker3 = new Worker('Илья', 'Сишарп', 14500, 30)
Worker3.rate = 4235689; Worker3.days = 2
console.log(Worker3.Name, Worker3.Salary, Worker3.Days, Worker3.Rate)










