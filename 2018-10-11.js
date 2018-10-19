//数组的扁平化
function steamroller(arr) {
    let newResult=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            newResult.push.apply(newResult,steamroller(arr[i]))
        }else{
            newResult.push(arr[i])
        }
    }
    return newResult
}

console.log(steamroller([1,4,5,[2,3,4,[4,7,8]]]))