//如何从外部读取局部变量
//链式作用域结构：子对象会一级一级的向上寻找所有父对象的变量，所以，父对象的所有变量，对子对象都是可见的
//如果将子函数作为返回值，父函数就可以在外部读取它的内部变量了呀
var result=function (){
    var n=99;
    function f2() {
        console.log(n)
    }
    return f2()
}
result()

