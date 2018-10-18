//setMin
function setMin() {
    if (arguments.length === 0) return Infinity;
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === null) arr.push(0);
        else arr.push(arguments[i])
        if (isNaN(arr[i])) return NaN
        if (arr[i] instanceof Array) {
            let temp = arr[i][0];
            while (temp instanceof Array) {
                temp = temp[0]
            }
            if (temp === undefined) temp = 0;
            if (isNaN(temp)) return NaN;
            arr[i] = temp;
        }
    }
    let result = arr ? arr[0] : 0;
    for (let i = 0; i < arr.length; i++) {
        result = arr[i] - result > 0 ? result : arr[i]
    }
    return result
}

console.log(setMin(888888, [9856], 155))
console.log(setMin(null))
console.log(setMin('obj'))