function Two20181029(){
    for(var i=0;i<5;i++){
        var btn=document.createElement('button')
        btn.appendChild(document.createTextNode('Button'+i))
        btn.addEventListener('click',function () {
            console.log(i)
        })
        document.body.appendChild(btn)
    }
}
//(a)当用户点击button4的时候，什么被记录到控制台，为什么？
//(b)提供一个或多个可按期工作的替代代码。
//a.无论用户点击哪个按钮，数字5将始终记录到控制台。这时因为，在调用onclick方法时，for循环已经完成，并且i值已经成为5.
//b.改变代码
for(var i=0;i<5;i++){
    var btn=document.createElement('button')
    btn.appendChild(document.createTextNode('Button'+i))
    btn.addEventListener('click',(function () {
        console.log(i)
    })(i))
    document.body.appendChild(btn)
}
for(var i=0;i<5;i++){
    var btn=document.createElement('button')
    btn.appendChild(document.createTextNode('Button'+i))
    (function (i) {
        btn.addEventListener('click',function () {
            console.log(i)
        })
    })(i)
    document.body.appendChild(btn)
}