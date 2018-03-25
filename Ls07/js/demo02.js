/*
    Created by JiXInchan on 2018.3.23
*/
//Part1
//普通函数直接调用
function test1() {
    console.log("this is",this);
}
test1();//当前函数在window下

//思考嵌套的情况下
function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//test2在window下



//对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//调用对象的方法  23

//给obj动态添加方法
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//添加给对象添加方法
obj.sayHi();//obj

var name = "全局";
sayHi();//全局


//Part2
//间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB

//间接调用 实例二 移花接木 吸星大法

obj1={x:1};
obj2={x:2,
    foo:function(){console.log(this.x);}
};
obj2.foo.call(obj1);


var fish={
    name:'a',
    swim:function(m,n){
        console.log("I am "+this.name+" I can swim ",m,n)
    }
}
var bird={
    name:'b',
    fly:function(m,n){
        console.log("I am "+this.name+" I can fly ",m,n)
    }
}
fish.swim.call(bird,3,4);
fish.swim.apply(bird,[3,4]);
fish.swim(1,2);
fish.swim.call(null,1,2);
//swim(1,2);与swim.call(null,1,2);相同


//很多方法都可以通过间接调用的方式来调用，比如很多原型的方法
function test() {
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,"4",5);


//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack



var x=23;
var test=function(){
    console.log("输出："+this.x);
};
var obj={
    x:45
};
obj.test=test;
obj.test();//45当前对象是obj
test();//23当前对象是window

//调用函数的主体是window
var x=45;
var obj={
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);
        }
        foo();
    }
}
obj.test();



/*
//思考如下代码 详情参见高阶函数章节
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//输出什么
console.log(obj.fun3()());//输出什么
console.log(obj.fun4());//输出什么
*/