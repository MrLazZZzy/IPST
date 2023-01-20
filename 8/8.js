let array1 = [[1,4,5],[1,3,4],[2,6]]
let array2 = []
let tmp

for (let i = 0; i < array1.length; i++)
{
    for (let j = 0; j < array1[i].length; j++)
    {
        tmp = array1[i][j];
        array2.push(tmp);
    }
}

array2.sort()
console.log(array2)




