let line = 'DDADSADASDAAADS';
let array = line.split('')
let uniqueLine = [...new Set (array)]
let result = uniqueLine.toString()
result = result.replace(/,/g, '');
console.log(result)

