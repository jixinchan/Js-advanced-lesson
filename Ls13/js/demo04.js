/*
	Created by JiXinchan on 2018.4.16
*/

//创建对象的方式
//对象字面量直接、create静态方法、构造函数

var o={
	name:"jiaqi"
}
o.__proto__===Object.prototype;

//create
var o1=Object.create(o);
o1.__proto__===o;


var Person=function(name){
	this.name=name;
}
var p=new Person("jxc");
p.__proto__===Person.prototype;

Person.__proto__===Function.prototype;
Person.__proto__.__proto__===Object.prototype;
Person.__proto__.__proto__.__proto__===null;


//注意！！！！！！！
var objStr = new Object("xxx");
console.log(typeof objStr);//object
console.log(objStr instanceof String);//true

var objNum = new Object(23);
console.log(typeof objNum);//object
console.log(objNum instanceof Number);//true

var objBoolean = new Object(true);
console.log(typeof objBoolean);//object
console.log(objBoolean instanceof Boolean);//true