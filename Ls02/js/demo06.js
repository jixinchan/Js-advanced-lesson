/*
	Created by JiXinchan on 2018.3.9
*/
//parseInt()和parseFloat()都是全局函数
var a=3.4;
console.log(Math.ceil(a));
console.log(Math.floor(a));
console.log(Math.round(a));
var b=5e6;
console.log(b);
console.log(Math);

var c=Number("123s");
console.log(c);//NaN  属于基本类型中的Number类型。
console.log(NaN===NaN);//false

//正无穷与负无穷Infinity
var d=2/0;         //Infinity
var e=-2/0;        //-Infinity
var f=1/Infinity;  //0
var g=1/-Infinity; //-0
