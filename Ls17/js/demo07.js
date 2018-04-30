/*
	Created by JiXinchan on 2018.4.28
*/
//字面量方式创建的对象原型是Object.prototype
//create方法创建的是对象原型是括号里的对象
//构造函数创建的对象原型是构造函数Person.protoype
//变量共享
var parentObj={
	a:123,
	b:456
}
var obj1= Object.create(parentObj);
var obj2= Object.create(parentObj);
obj1.__proto__.a=111;//修改了原型的a的值
console.log(obj2.a);

var fobj={
	show:function(){
		console.log(this.x);
	}
}
var fobj1=Object.create(fobj);
fobj.x=123;
fobj.show();//this指向调用此函数的主体。。123

