function Point(x,y) {
    this.x=x;
    this.y=y;
    this.moveTo=function (x,y) {
        this.x=x;
        this.y=y;
        console.log(this.x+','+this.y)
    }
}
let p1=new Point(0,0)

let p2={x:0,y:0}

p1.moveTo(1,1);//1,1
p1.moveTo.apply(p2,[10,10]);//10,10
//定义一个Point构造函数，用Ponit生成一个对象p1,改对象同时具有moveTo方法
//使用对象字面量创建另一个对象p2,使用apply可以将p1的方法应用到p2上，这时候this也被绑定到对象p2上。