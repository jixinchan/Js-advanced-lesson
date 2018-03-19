/*
	Created by JiXinchan on 2018.3.19
*/

//+作为字符串将左右连接
console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]" string类型
console.log(true+true); //2
console.log("5"-2); //3

//自增自减运算符隐式转换为number类型
var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换Number
var x = "1";
console.log(x+1);//11 string
console.log(x/1);//11 number

//回顾++i 与 i++
var i=1;
var y = ++i + ++i + ++i;
console.log(y);//9  在C++中为12。
