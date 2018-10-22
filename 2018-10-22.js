function fun(n,o){
    console.log(o)
    return {
        fun:function (m) {
            return fun(m,n)
        }
    }
}
let a=fun(0)//undefined
a.fun(1)//0
a.fun(2)//0
a.fun(3)//0

let b=fun(0).fun(1).fun(2).fun(3)//undefined 0 1 2

let c=fun(0).fun(1)//undefined 0
c.fun(2)//1
c.fun(3)//1