/*
	Created by JiXInchan on 2018.3.23
*/
//函数定义 函数声明方式
function max(a,b){
    return a>b?a:b;
}
max(2,3);

//函数定义 函数表达式方式 等号右侧可以是匿名函数也可以是非匿名函数
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);


//非匿名函数便于调用栈追踪,追踪具体的函数名
var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
};
foo(2,3);//max
foo = function min(a,b){
    console.trace();
    return console.log(a>b?b:a);
};
foo(2,3);//min
//匿名
var foo=function(){}foo();//foo
foo=function(){}foo();//foo

//函数定义 Function构造函数方式
function foo1(x,y,z){
	var t=x>y?x:y;
	return t>z?t:z;
}
foo1(2,1,4);
var str="var t=x>y?x:y;return t>z?t:z;";
var min=new Function('x','y','z',str);
min(4,1,2);

