(function () {
    console.log(1)
    setTimeout(function () {
        console.log(2)
    },1000)
    setTimeout(function () {
        console.log(3)
    },0)
    console.log(4)
})()//1,4,3,2
//事件循环