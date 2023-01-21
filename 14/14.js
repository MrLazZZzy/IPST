class MyString {
    constructor(string) {
        this.string = string
    }
    get reverse() {
        return this.string.split('').reverse().join('')
    }
    get ucFirst() {
        return this.string[0].toUpperCase() + this.string.slice(1)
    }
    get ucWords() {
        return this.string.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    }
}

let MyString1 = new MyString('никак вы бл*ть не научитесь')
console.log(MyString1.reverse)
console.log(MyString1.ucFirst)
console.log(MyString1.ucWords)









