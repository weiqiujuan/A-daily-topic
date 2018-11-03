//如果数组太大，下面的递归代码将导致堆栈溢出，如何解决这个问题，但是仍然保留递归模式？
/*var list = readHugeList();
var nextListItem = function () {
    var item = list.pop();
    if (item) {
        nextListItem()
    }
}*/
//添加设置setTimeout函数
var list = readHugeList();
var nextListItem = function () {
    var item = list.pop();
    if (item) {
        setTimeout(nextListItem, 0)
    }
}

//堆栈溢出被消除，因为事件循环处理递归，而不是调用堆栈。当函数运行时，如果item不为null，
// 则将超时函数推送到事件队列，并且函数退出，从而使调用堆栈清零。
//当时间队列运行超时事件时，将处理下一个项目，并设置一个计时器以再次调用nextListItem。
//因此，该方法从头到尾不经过直接递归调用即可处理。