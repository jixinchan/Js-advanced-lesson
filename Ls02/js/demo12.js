/*
	Created by JiXinchan on 2018.3.12
*/
//比较运算符与隐式类型转换
var a=2;
var b=3;
console.log(typeof(a>b),a>b);
console.log(typeof(a==b),a==b);
console.log(typeof(a<b),a<b);

//+-隐式类型转换
var c="jxc"+5+"20";
var d="521"-1;
console.log(c,d);

//逻辑运算符隐式类型转换
var e=!2;
var f=!!2;
var g=!!{};
var h=!!"";
var i=!!undefined;
console.log(e,f,g,h,i);

var j={x:1};
if(j){//在这里 为true  隐式转换
	console.log(j);
}