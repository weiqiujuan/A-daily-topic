var myObject={
    foo:'bar',
    func:function () {
        var self=this;
        console.log('outer func:this.foo='+this.foo)//bar
        console.log('outer func:self.foo='+self.foo)//bar
        (function() {
            console.log('inner func:this.foo='+this.foo)//undefined
            console.log('inner func:self.foo='+self.foo)//bar
        }())
    }
}
myObject.func()
//在外部函数中，this和self都引用myObject,因此都可以正确的引用和访问foo
//在函数内部中，不再指向myObject，因此，this.foo在内部函数中是未定义的，而对局部变量self的引用仍然在范围内并且可以在那里访问。