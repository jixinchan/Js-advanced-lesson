/*
    Created by JiXinchan on 2018.3.29
*/
//JS采用的是静态词法作用域，代码完成后作用域链就已形成，与代码的执行顺序无关

var name="王佳琦";
function echo(){
	console.log(name);
}
function foo(){
	var name="wangjiaqi";//只属于foo，echo访问不到。
	echo();
}
foo();//输出：王佳琦

var x="out";
var f1=function(){
	var x="in";//没有这行两次都输出out
	console.log(x);
};
f1();//访问局部变量
console.log(x);//访问全局变量

//在函数内部定义的变量如果未加var，相当于全局变量
var f2=function(){
	var y="局部";
	console.log(y);
	y="全局";//把局部覆盖
	console.log(y);
};
f2();//局部  全局
console.log(y);//报错。局部变量函数执行完成后被释放

//ES5中无块作用域
if(true){
    var z = 23;
}
console.log(z);//23

if(false){
    var z = 23;
}
console.log(z);//undefined