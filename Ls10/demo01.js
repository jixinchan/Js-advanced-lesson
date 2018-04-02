/*
    Created by JiXinchan on 2018.4.2
*/
//全局作用域
//作用域控制着变量与函数的可见性和函数周期
//也是根据名称查找变量的一系列规则
var a=1;
var b=2;
function foo(){
	var a=10,//覆盖性
	    c=20;
	//console.log(a,b,c,d);
	function fee(){
		var a=100,    //此处，改为；则不会报错
		    d=200;
		//console.log(a,b,c,d);//b,c链式
	}
	fee();
	console.log(a,b,c,d);
}
foo();