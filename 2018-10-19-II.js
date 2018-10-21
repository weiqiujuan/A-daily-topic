//函数的最长通用法，属于全局性调用
function makeNoSense(x) {
    this.x=x
}
makeNoSense(5)
console.log(x)//5 ,x已经成为一个值为5的全局变量

function test() {
    this.x=1
    console.log(this.x)
}
test()//1