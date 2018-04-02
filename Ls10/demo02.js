/*
    Created by JiXinchan on 2018.4.2
*/
//js词法作用域
//实例一
var name="Daenerys";
function echo(){
	console.log(name);
}
function fn(){
	var name="Linda";
	console.log(name);
	echo();
	//调用echo()时，作用域决定于定义函数的位置
	//而不是调用位置
}
fn();

//实例二
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Jack

var a="global";
function checkA(){
	var a="local";
	return function(){
		return a;
	};
}
console.log(checkA()());//local
//使用new Function的不一定遵从词法作用域
var a="global";
function checkA(){
	var a="local";
	return new Function("return a;");
}
console.log(checkA()());//