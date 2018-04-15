/**
 * Created by JiXinchan on 2018.4.12.
 */

//part 1
var tmp=100;
function foo(x){
	var tmp=10;
	return function(y){
		console.log(x+y+(++tmp));
	}
}
var fee= foo(2);
fee(10);//23
fee(10);//24
fee(10);//25

//闭包嵌套
function f1(m){
	var z = 100;
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));//设置断点，查看有几个闭包
    	}
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);//113
f3(10);//114
//两个闭包，x属于f2，z属于f1


//part2 闭包应用
//用来给对象添加和修改属性
function foo(x){
	var tmp=3;
	return function (y){
		x.count=x.count?x.count+1:1;
		console.log(x + y + tmp,x.count);
	}
}
var age= new Number(2);//一个Number对象
var bar= foo(age);
bar(10);//15 1
bar(10);//15 2
bar(10);//15 3

//part3
function fn() {
    var max = 10;//若屏蔽此行，则输出为100
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//输出15