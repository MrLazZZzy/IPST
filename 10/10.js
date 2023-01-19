const firstObj = { a: 1, b: 1 }
const secondObj = { a: 1, b: 1 }
function Comparison(firstObj, secondObj) {
    for (const prop in firstObj) {
        if (firstObj.hasOwnProperty(prop) && (firstObj[prop] !== secondObj[prop])) {
            return false

        } else if (firstObj.hasOwnProperty(prop) && (firstObj[prop] === secondObj[prop])) {
            return true
        }
    }
}

console.log(Comparison(firstObj, secondObj))






