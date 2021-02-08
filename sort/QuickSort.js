function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function partition(arr, l, r) {
    // 使用最后一个元素作为划分点
    const pivotVal = arr[r]
    while(l < r) {
        while (arr[l] <= pivotVal && l < r) {
            l++
        }
        if (l < r) {
            swap(arr, l, r)
            r --
        }
        while (arr[r] >= pivotVal && l < r) {
            r--
        }
        if (l < r) {
            swap(arr, l, r)
            l++
        }
    }
    return l
}

function quickSort(arr, l, r) {
    if (l < r) {
        let partitionIndex = partition(arr, l, r)
        quickSort(arr, l, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, r)
    }
    return arr
}

const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
console.log('unsort', testArr)
quickSort(testArr, 0, testArr.length - 1);
console.log('sort', testArr)