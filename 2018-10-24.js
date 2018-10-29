(function () {
    var a=b=3
})()
console.log('a defined? '+(typeof a!=='undefined'))
console.log('b defined? '+(typeof b!=='undefined'))
//a defined? false
//b defined? true
//var a=b=3是b=3的简写，var a=b,b最终成为一个全局变量（它不再var关键字的后面）因此仍在作用域内，即使在函数之外。
//在严格模式下(使用strict),语句var a=b=3,会产生一个ReferenceError的运行错误，b没有定义。
// 从而避免了可能导致任何头headfakes/bugs.(在此时代码必须添加strict)