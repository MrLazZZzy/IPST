let array = [1,2,3,6,8,1,6,3,2,1,0,4]
let array1 = ['one', 'two','three']

bubbleSort(array)
function bubbleSort (array) {
    for (let n = 0; n < array.length; n++) {
        for (let i = 0; i < array.length - 1 - n; i++) {
            if (array[i] > array[i + 1]) {
                const buff = array[i]
                array[i] = array[i + 1]
                array[i + 1] = buff
            }
        }
    }
}

console.log([...array, ...array1])