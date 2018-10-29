/*(
    function () {
        try {
            throw new Error()
        }catch (x){
            var x=1
            var y=2
            console.log(x)
        }
        console.log(x)
        console.log(y)
    }
)()*///1,undefined,2
//var 语句被挂起（没有他们的值初始化）到它所属的全局或函数作用域顶部，即使它位于with或者catch
//块内，但是，错误的标识符只在catch块内部可见。
(
    function () {
        var x,y//outer and hoisted
        try {
            throw new Error()
        }catch (x/*inner*/){
             x=1//inner x,not the outer one
             y=2//there is only one y,which is in outer scope
            console.log(x)/*inner*/
        }
        console.log(x)
        console.log(y)
    }
)()
