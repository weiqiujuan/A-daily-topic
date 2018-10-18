//foo被调用了多少次
function foo(num) {
    console.log('foo '+num)
    data.count++
}
var data={count:0}
var i
for(i=0;i<10;i++){
    if(i>5){
        foo(i)
    }
}
//输出结果：[foo 6,foo 7,foo 8,foo 9]
//a: 很明显调用四次
