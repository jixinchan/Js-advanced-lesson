/*
	Created by JiXinchan on 2018.4.28
*/
//part1
//确定对象的构造函数名
function F(){}
var f=new F();
console.log(f.constructor.name);
//创建相似对象
function P(name){this.name=name}
var p1=new P('a');
var p2=new p1.constructor('b');
//constructor可用于指定构造函数
function Shape(area){
	this.area=area;
}
Shape.prototype.sayArea=function(){
	console.log(this.area);
}
var Tangle = function(edges){
	this.edges=edges;
}
Tangle.prototype= new Shape(12);
console.log(Shape.prototype.constructor); //function Shape()
console.log(Tangle.prototype.constructor); //function Shape()
Tangle.prototype.constructor = Tangle;     //修正constructor指向
console.log(Tangle.prototype.constructor);

//part2 公有属性、私有属性、特权方法
function A(id) {
    this.publicId = id;//公有属性
    var privateId = 456;//私有属性
    this.getId = function () {
        console.log(this.publicId,privateId);
    };//能访问到私有属性的方法
}
var a = new A(123);
console.log(a.publicId);
console.log(a.privateId);//报错
a.getId();//可以得到
