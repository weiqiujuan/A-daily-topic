//代码输出
//循环内执行的每个函数将在整个循环完成后执行，因此所有函数都会引用存储在i中的最后一个值。
//通过为每次迭代创建一个唯一的作用域，可以使用闭包来防止这个问题，并将该变量的每个唯一值存储在其作用域中。
for(var i =0;i<5;i++){
    setTimeout(function () {
        console.log(i)
    },i*1000)
}//5，5，5，5

//方法一：let
for(let i =0;i<5;i++){
    setTimeout(function () {
        console.log(i)
    },i*1000)
}//0，1，2，3，4

//方法二:闭包作用域
for(var i =0;i<5;i++){
    (function (x) {
        setTimeout(function () {
            console.log(x)
        },x*1000)
    })(i)
}//0，1，2，3，4