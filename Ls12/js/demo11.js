/**
 * Created by JiXinchan on 2018.4.12.
 */

//闭包是由函数和与其相关的引用环境组合而成的实体
//闭包是词法作用域中的函数和其相关变量的包裹体
function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3= f1();
console.log(f3);//1
console.log(f3);//1

function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3= f1();
console.log(f3());//1
console.log(f3());//2


function createInc(value){
	return function(step){
		value+=step;
		return value;
	}
}
var inc=createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
var inc2=createInc(5);//一个新的闭包
console.log(inc(1));//9
console.log(inc2(1));//6

function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1