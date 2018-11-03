//假设d是范围内的“空”对象：
var d = {};
['魏秋娟', 'liuxiaotian'].forEach(function (k) {
    d[k] = undefined
})
console.log(d)
//上面代码片段在对象d上设置了两个属性。理想情况下，对具有未设置键的js对象执行的查找评估为未定义。
//即循环那个数组，将该对象传递给objct.keys将返回一个包含这些设置键的数组。值未定义。