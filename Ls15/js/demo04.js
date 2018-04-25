/*
	Created by JiXinchan on 2018.4.23
*/
function Person(name,age){
	this.name=name;
	this.age=age;
}
//很多时候将公有属性定义在原型上
//私有属性时用闭包
Person.prototype.sayhi=function(){
	console.log(this.name,this.age);
}
var p=new Person("Jack",22);
p.sayhi();

Person.__proto__===Function.prototype;//true
Person.__proto__.__proto__===Object.prototype;//true