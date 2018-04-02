/*
    Created by JiXinchan on 2018.4.2
*/
//ES5中无作用域
if(true){
	var a=10;
}
console.log(a);//可访问到a=10

//变量污染
var usr="jack";
document.onclick=function(){console.log(usr);}
//......
if(true){
	var usr="harrison";
}
//会出harrison。

//将再次定义封装在function作用域内
var usr="jack";
document.onclick=function(){console.log(usr);}
//......
(function(){
	if(true){
		var usr="harrison";
	}
}());//jack