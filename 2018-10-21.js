function AClass(){
    this.Property=1;
    this.Method=function () {
        console.log(1)
    }
}

function AClass2() {
    this.Property2=2;
    this.Method2=function () {
        console.log(2)
    }
}
AClass2.prototype=new AClass()
AClass2.prototype.Property=3
AClass2.prototype.Method=function () {
    console.log(4)
}
let obj=new AClass2()
console.log(obj.Property)
obj.Method()