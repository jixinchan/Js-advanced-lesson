/*
	Created by JiXinchan on 2018.5.10
*/
// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 
// 1.字符串.字符串方法（正则对象）
// 2.正则对象.正则方法（字符串）
var regExp=/a?b/gi;
var matchResult="xxAbcaabbbxyz".match(regExp);
console.log(matchResult);//返回一个数组['ab','ab','b','b']

var regExp=/ab/;
var matchResult="xxAbcaabbbxyz".match(regExp);
console.log(matchResult);

var regExp=/a*b/gi;//0或多个a+b
var matchResult="xxAbcaabbbxyz".match(regExp);
console.log(matchResult);

var regExp=/a.b/gi;//a和b之间必须有任何一个字符
var matchResult="xxAbcaabbbxyz".match(regExp);
console.log(matchResult);

//test
var regExp=/a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

var regExp=/a/gi;
//test中的lastindex在执行时会变化，从下一个下标开始匹配
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false
