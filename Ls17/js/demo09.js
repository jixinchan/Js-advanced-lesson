/*
	Created by JiXinchan on 2018.4.28
*/
//JS实现继承 一
function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.showName=function(){
	console.log(this.name);
}
function Student(name,age,id){
	Person.call(this,name,age);
	this.id=id;
}
Student.prototype.showId=function(){
	console.log(this.id);
}
Student.prototype.__proto__=Person.prototype;
var s1=new Student("xxx",20,2017001);//name属性在s1上
var s2=new Student("EEE",19,2017002);


//JS实现继承 二
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
//将实例化出的一个Person对象赋值给s1的原型
Student.prototype.constructor = Student;
//使student构造器能够指向Student
//有这一行最后输出ƒ Student(name,age,id){..}
//没有这一行最后输出ƒ Person(name,age){..}
var s1 = new Student("xxx",20,2017001);
var s2 = new Student("EEE",19,2017002);
s1.constructor;