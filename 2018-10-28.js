console.log(sum(2,3))//5
console.log(sum(2)(3))//5

//method1:else部分返回一个匿名函数，它将传递给sum()的参数和传递给匿名函数的参数
function sum(x) {
    if(arguments.length===2){
        return arguments[0]+arguments[1]
    }else{
        return function (y) {
            return x+y
        }
    }
}
//method2
function sum2(x,y) {
    if(y!==undefined){
        return x+y
    }else{
        return function (y) {
            return x+y
        }
    }
}