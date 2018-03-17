/*
	Created by JiXinchan on 2018.3.15
*/
//Part1 表达式及表达式分类
//原始表达式，最简单的表达式，包括常量、保留字、变量
23;'aaa';   true;false;  i;sum;
obj={x:1};//对象初始化表达式
arr=[1,2];//数组初始化表达式
var foo=function(){};//函数定义表达式

obj.x;obj[i];//属性访问表达式
foo();//foo()为函数调用表达式
2+3；//算数运算表达式
2>3;//关系运算表达式
2&&3;//逻辑运算表达式

//Part2 
2>3;//表达式语句
//条件语句
if(){}
else{}
function foo(){
	var a=b=3;//相当于var a,b=3;
}
foo();
console.log("b:",b);//3
console.log("a:",a);//undefined

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out for ",i);//5