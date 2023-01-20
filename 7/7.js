let word1 = 'дим'
let word2 = 'an'
let word3 = 'рота'
let word4 = 'аргентинам'
function ReverseString(string) {
    return string.split('').reverse().join('').substring(1)
}
console.log(word1 + ReverseString('дим'))
console.log(word2 + ReverseString('an'))
console.log(word3 + ReverseString('рота'))
console.log(word4 + ReverseString('аргентинам'))








