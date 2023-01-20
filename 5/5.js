let line = 'DDADSADASDAAADS';
let array = line.split('')
let uniqueLine = [...new Set (array)]
let result = uniqueLine.toString()
console.log(result)