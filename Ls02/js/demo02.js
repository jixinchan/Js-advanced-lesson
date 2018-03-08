/*
	Created by JiXinchan 2018/3/8
*/
/*基本类型的变量一般存储在栈区，引用类型的变量
（地址）存储在栈区或者堆区，被引用的变量在堆区
*/
var a;
console.log(a==window.a);//true;
