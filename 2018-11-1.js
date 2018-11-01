//使用typeof bar ==='object' 来确定bar是否是一个对象时有什么潜在的缺陷？这个陷阱如何避免

const log=console.log.bind(console)
var bar={}
log(typeof null)//object
log(typeof bar)//object

//通过检查bar是否为空来轻松避免该问题：
log((bar!==null)&&(typeof bar ==='object')||(typeof bar ==='function')||(toString.call(bar)!=='[object Array]'))

//对数组和函数返回false,但对于对象返回true:
log((bar!==null)&&(bar.constructor===Object))