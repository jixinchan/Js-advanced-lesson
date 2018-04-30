/*
	Created by JiXinchan on 2018.4.28
*/
//静态方法与方法
var BClass = function(){};
BClass.prototype.f2=function(){
	console.log('prototype');
}
BClass.f1=function(){
	console.log('static');
}
BClass.f1();
var BC1=new BClass();
BC1.f2();
BC1.f1();//报错。只能通过类来调用