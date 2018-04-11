/**
 * Created by JiXinchan on 2018.4.9
 */

//立即执行表达式
(function setName(string){
    var name=string;
    console.log(name);
}('Mike'));//})('Mike');也可。

(function (x,y){
    console.log(x,y);
})(1,2);//可以没有函数名
//IIFE是表达式，要用分号结尾

//与运算符结合
var i=function(){}();//将函数执行的值赋给i
var i=function(){};//将函数对象赋给i

true&& function(x,y){
    return x==y?true:false;
}(1,2);

!function(x,y){
    return x==y?true:false;
}(1,2);

