/*
	Created by JiXinchan on 2018.5.11
*/
//正则表达式RegExp原型方法（test）
//正则表达式RegExp原型方法（exec），可获得详细信息
//part1  test
var regExp = /a/i;
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
console.log(regExp.test("ab"));
//都是true

var regExp = /a/gi;//若设置g,test会更改lastIndex
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false

//RegExp.prototype.exec 方法
//属性index表示匹配到的位置
//对于非全局模式下返回第一个匹配的和所有的分组项
var execExp = /\d{1,2}(\d)(\d)/;
var retExp = execExp.exec("12s342dsfsf233s");
console.log(retExp instanceof Array,retExp,execExp.lastIndex);
console.log(retExp instanceof Array,retExp,execExp.lastIndex);
//342 4 2     3 匹配到的342中的4,2是属于两个(\d)分组的
//342 4 2     3

//对于全局模式下 每检测一次lastIndex增加一次
var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);
console.log(execExp2.exec(ts),execExp2.lastIndex);
//342 4 2     6
//233 3 3     4