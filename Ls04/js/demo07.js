/*
	Created by JiXinchan on 2018.3.15
*/
var str="123qwe";
function foo(){
	str.length=3;
	console.log(str.length);
}
foo();

function foo(){
	'use strict'
	str.length=3;
	console.log(str.length);
}
foo();//严格模式下不能修改属性的值


//严格模式下禁止删除未定义的变量
delete a;
delete str1;
'use strict'
delete a;
delete str1;

//严格模式下禁止函数参数重名
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//非严格模式下正常执行 7

"use strict";
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//严格模式下报错

//严格模式下的arguments
function ff(a){
	a=23;
	return[a,arguments[0]];
}
var b=34;
console.log(ff(b));//23 23

function ff(a){
	"use strict"
	a=23;
	return[a,arguments[0]];
}
var b=34;
console.log(ff(b));//23 34