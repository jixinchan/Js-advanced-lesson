/*
	Created by JiXinchan on 2018.4.23
*/
//三种创建对象的方法
var obj1={
	name:"Daenerys",
	show:function(){
		console.log(name);
	}
}

var obj2=Object.create(obj1);
//name是obj1的属性，obj2自身没有属性
console.log(obj2.__proto__);//是obj1
obj2.name="Linda";//自有属性
console.log(obj2.show());//原型属性

function person(name,age){
	this.name=name;
	this.age=13
}

person.prototype.show=function(){
	console.log(this.name);
}//在原型上添加属性方法

var obj3=new person("Jack",20);
console.log(obj1,obj2,obj3);
obj3.show();
console.log(obj3 instanceof person);