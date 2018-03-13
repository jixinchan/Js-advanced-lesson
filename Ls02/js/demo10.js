/*
	Created by JiXinchan on 2018.3.12
*/
//包装对象，对于基本数据类型来说，调用方法时，
//将其包装成对象,调用对象原型的方法，然后拆开包装
var str="asdfghjkl";
str.length=2;
console.log(str,str.length);//asdfghjkl 9
//基本数据类型

var arr=[1,2,3,4,5];
arr.length=2;
console.log(arr,arr.length);//[1,2] 2
//引用数据类型