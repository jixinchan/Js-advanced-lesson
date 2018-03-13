/*
	Created by JiXinchan on 2018.3.12
*/
//字符串比较
console.log("A">"a");
console.log("B".localeCompare("A"));//1
console.log("A".localeCompare("A"));//0
console.log("A".localeCompare("B"));//-1

//字符串连接
var a="123";
var b="345";
var c=a+b;

//字符串常用方法，字符串的方法源于String.prototype
var str="qwert";
console.log(str.slice(2));//ert
console.log(str.slice(2,4));//er
console.log(str.slice(-2));//rt
console.log(str.slice(2,-2));//e

console.log(str.split("e"));//['qw','rt']
console.log(str.split("e",1));//['qw']
console.log(str.split("e",2));//['qw','rt']

console.log(str.charAt(2));//得到下标为2的字符
console.log(str.charCodeAt(3));//得到下标为3的字符的asc
console.log("asasasd".indexOf("a"));//从头开始第一个a的下标
console.log("asasasd".indexOf("a",1));//从1开始得到的第一个a的下标
 console.log("abcDEFabcD".lastIndexOf("D"));

var str1="qwertyu"
console.log(str1.substr(1,4));//wert   4是截取的长度
console.log(str1.substring(1,4));//wer 4是截取字符的结束位置的后一个下标

console.log(str.concat(str1));//拼接 
console.log("    www\\n d\r".trim());//只留下原始字符串,移除前导空格和尾随空格
console.log("qweD".toLowerCase());
console.log("ASDF".toUpperCase());

