function bubbleSort(arr) {
    let len = arr.length
    for (let i = len; i >= 2; --i) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([1, 7, 5, 6, 4, 2, 1]))