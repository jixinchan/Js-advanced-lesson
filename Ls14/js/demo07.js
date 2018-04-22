/*
	Created by JiXinchan on 2018.4.19
*/
//Js属性特性
//可枚举特性（[[enumerable]]），属性是否可枚举
var obj={
	a:1,
	b:2
};
for(var i in obj){
	console.log(i,obj[i]);
}
//a 1
//b 2

//修改其可枚举特性为false
Object.defineProperty(obj,'a',{enumerable:false});
//{b: 2, a: 1}
for(var i in obj){
	console.log(i,obj[i]);
}
//b 2
//只修改writable为false，不影响可枚举