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

}

let Worker1 = new Worker('Роман', 'Яринский', 200, 14)
console.log(Worker1.Name, Worker1.Salary, Worker1.Days, Worker1.Rate)

let Worker2 = new Worker('Иван', 'Попоша', 0, 365)
console.log(Worker2.Name, Worker2.Salary, Worker2.Days, Worker2.Rate)

let Worker3 = new Worker('Илья', 'Сишарп', 14500, 30)
console.log(Worker3.Name, Worker3.Salary, Worker3.Days, Worker3.Rate)









