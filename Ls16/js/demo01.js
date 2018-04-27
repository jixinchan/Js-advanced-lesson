/*
	Created by JiXinchan on 2018.4.26
*/
//this不进行作用域传递

//一般函数中的this在非严格模式下指代全局对象
function thisTest(){
	console.log(this===window);
}
thisTest();

var a=10,b='hi';
function thisTest2(){
	this.a=1;
	delete this.b;
	this.c='haha';
}
thisTest2();
console.log(a,b,c);//1,'hi','haha'

function f(){
	var a=b=2;
}
console.log(a,b);//a is not defined