/**
 * JXC 2018.6.25
 */
//ES5中使用构造函数定义并生成新的对象
function Line(x,y,z){
    this.x=x;
    this.y=y;
    var z = z;//添加私有属性
    //this.show = function(){console.log(this.x,this.y,z);}  //调用时返回1,2,3
}
Line(2,3,6);//此时this执行window
var l1 = new Line(1,2,3);//this指向l1
// l1.constructor是构造函数
// l1.__proto__===Line.prototype
// Line.__proto__===Function.prototype

Line.prototype.show = function(){console.log(this.x,this.y,this.z);}
l1.show();//1 2 undefined

//class
class Line{
    constructor(){
        this.x=3;
        this.y=4;
        var private = 5;
        this.d = function() {
            console.log(this.x);
        }
    }
    show(){
        console.log("show:",this.x,this.y);
    }
}
var l2=new Line();
console.log(Object.getOwnPropertyNames(l2));
//["x", "y", "d"]

console.log(Object.getOwnPropertyNames(l2.__proto__));
//["constructor", "show"]

//class本质还是原型继承
typeof(Line);//'function'
console.log(typeof Line);//function
console.log(Line instanceof Function);//true
console.log(Line === Line.prototype.constructor); // true
console.log(l2.constructor === Line.prototype.constructor);

//实例化出的对象的原型是共享的
l1.__proto__===l2.__proto__;//true

//
const myclass = class Myself{//Myself 可以省略
    getClassName(){
        return Myself.name;
    }
}//类名是myclass

//类不存在变量提升
new Foo(); // ReferenceError
class Foo {}
//这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。

//类内定义的函数不可枚举
console.log(Object.keys(l2));
console.log(Object.keys(l2.__proto__));



//类的prototype属性相当于实例的原型，所有在类中定义的方法，都会被实例继承。
//如果在一个方法前，加上static关键字，
//就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class foo{
    static Method(){
        return 'hello';
    }
}
foo.Method();
var f = new foo();
console.log(foo instanceof Function);//true
f.Method();//Uncaught TypeError: f.Method is not a function
foo.Method2 = function(){return 'world';}//添加静态方法
foo.prototype.Method3=()=>{return 'jxc';}
f.Method2();//Uncaught TypeError: f.Method is not a function
f.Method3();//jxc

class Foo {
    static baz () {
        console.log('hello');
    }
    baz () {
        console.log('world');
        Foo.baz();
    }
    static fun1(o){
        // this.fun2();//报错
        o.fun2();
    }
    fun2(){
        console.log("fun2")
    }
}
var a = new Foo();
a.baz();//world hello
Foo.fun1(a);//fun2  参数是对象


//Class 的继承
class Person{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    // show(){
    //     console.log("I'm "+this.name+". My class is "+this.cla);
    // } //show函数在这里下面也能调用到
}
//Students.prototype.__proto__=Person.prototype
class Students extends Person{
    constructor(id,name,cla){
        super(id,name);
        this.cla = cla;
    }
    show(){
        console.log("I'm "+this.name+". My class is "+this.cla);
    }
}
var s1 = new Students(1,"Jack",2);
s1.show();


//super 关键字，既可以当函数，也可以当对象使用
//super 作为函数调用时，代表父类的构造函数
class A{};
A.p=10;
class B extends A{
    constructor(){
        super();
    }
}
//super 作为对象时，
//在普通方法中，指向父类的原型对象，在静态方法中，指向父类。
class A {
    constructor() {
        this.p = 2;
    }
}
class B extends A {
    get m() {
        return super.p;//指向父类的原型对象10
    }
}
//如果super作为对象，用在静态方法之中，
//这时super将指向父类，而不是父类的prototype
class Parent {
    static myMethod(msg) {//静态的类的方法
        console.log('static', msg);
    }
    myMethod(msg) {//原型方法，实例化出来的对象的方法
        console.log('instance', msg);
    }
}
class Child extends Parent {
    static myMethod(msg) {
        super.myMethod(msg);//super 指的是Parent类
    }
    myMethod(msg) {
        super.myMethod(msg);//super 指的是Parent.prototype
    }
}
Child.myMethod(1); // static 1
var child = new Child();
child.myMethod(2); // instance 2