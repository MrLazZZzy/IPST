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
    getName() {
        console.log(this.#name)
    }
    getSurname() {
        console.log(this.#surname)
    }
    getRate() {
        console.log(this.#rate)
    }
    getDays() {
        console.log(this.#days)
    }
}

let Worker1 = new Worker('Роман', 'Яринский', 200, 14)
Worker1.getName()
Worker1.getSurname()
Worker1.getRate()
Worker1.getDays()

let Worker2 = new Worker('Иван', 'Попоша', 0, 365)
Worker2.getName()
Worker2.getSurname()
Worker2.getRate()
Worker2.getDays()

let Worker3 = new Worker('Илья', 'Сишарп', 14500, 30)
Worker3.getName()
Worker3.getSurname()
Worker3.getRate()
Worker3.getDays()









