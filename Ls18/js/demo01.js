/*
	Created by JiXinchan on 2018.5.3
*/
//创建数组的不同方式
var arr1=[1,2,3,'4'];

var arr2=new Array(5);
var arr21=new Array('5');

var arr22=[];
for(var i=0;i<5;i++){
	document.onclick=function(){
		arr22[i]=i;
	}
}
arr22;
//(6) [empty × 5, 5]
//异步执行。当点击时，for循环中的i已经是5.

var arr3=new Array(1,4,2,3);
console.log(arr1,arr2,arr3);

//数组中的值可以是表达式,可以包含对象、数组等
var a=12
var arr4=[a,a+1,a+2,a+3];
var arr5=[{x:1},[2,3]];

//数组是引用数据类型
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);//[][]

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);//[1,2,3][]