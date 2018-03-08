/*
	Created by JiXinchan 2018/3/8
*/
var a=123;//在栈区创建对象
var b=a;//在栈区创建对象，赋值为a
b=456;
console.log(a);//123

var c={n:123};//在堆区创建对象c
var d=c;//该对象的引用d
d.n=456;
console.log(c.n);//456

var a=123;
function foo(x){
	x=456;
};
foo(a);
console.log(a.x);//123 a，x都在栈区，修改的是x的值。

var a={x:23};
function foo(y){
	y.x=34;
};
foo(a);
console.log(a.x);//34 a在堆区，y是a对象的引用变量名

var a={x:23};
function foo(y){
	y.x=34;//1
	y={x:56};//2
};
foo(a);
console.log(a.x);//为34；若1、2换顺序，为23