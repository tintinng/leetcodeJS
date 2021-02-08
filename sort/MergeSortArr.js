function merge(arrLeft, arrRight) {
    let temp = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < arrLeft.length && rightIndex < arrRight.length) {
        if (arrLeft[leftIndex] <= arrRight[rightIndex]) {
            temp.push(arrLeft[leftIndex])
            leftIndex++
        } else {
            temp.push(arrRight[rightIndex])
            rightIndex++
        }
    }
    // 合并剩余数组
    return temp.concat(arrLeft.slice(leftIndex)).concat(arrRight.slice(rightIndex))
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const arrLeft = arr.slice(0, mid)
    const arrRight = arr.slice(mid)
    return merge(mergeSort(arrLeft), mergeSort(arrRight))
}

const testArr = []
let i = 0
while (i < 100) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}

console.log(testArr)
const res = mergeSort(testArr)
console.log(res)
