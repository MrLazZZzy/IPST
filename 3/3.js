const array = [6,1,7,3,5,8,0,-1,3,2,4,5]
function quickSort(array){
    if (array.length <= 1){
        return array
    }
    let index = Math.floor(array.length / 2);
    let pivot = array[index]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++){
        if(i === index)
            continue
        if (array[i] < pivot){
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}
function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end){
        middle = Math.floor((start + end)/2);
        if (array[middle] === item){
            found = true
            position = middle
            return position;
        }
        if (item < array[middle]){
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}
console.log(quickSort(array))
console.log(binarySearch(quickSort(array), 0))