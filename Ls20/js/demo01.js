/*
	Created by JiXinchan on 2018.5.8
*/
//正则表达式是对字符串和特殊字符操作的一种逻辑公式，
//是对字符串进行模式匹配的工具
//正则对象的创建
//1.字面值
var reg1=/[bcf]at/gi;
//2.构造函数 bcf后跟at的
var reg2=new RegExp(/[bcf]at/,"gi");
var reg3=new RegExp("[bcf]at","gi");

console.log("a fAt bat,a faT cat".match(reg1));

//
console.log("moon2xyz".replace(/o/,"ab"));//mabon2xyz
console.log("moon2xyz".replace(/o/g,"ab"));//mababn2xyz
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));//moon2 aboxyz
console.log("moon2xyz".replace(/\dx/,"_"));//moon_yz
console.log("moon2xyz".replace(/[xyz]/g,"ab"));//moon2ababab
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));//mabn2xab
console.log("m2on2x2z".replace(/2[x-z]/g,""));//m2on



var str="12_we_w*ee";
var a=str.split('_');
var b=str.split(/[_*]/gi);
console.log(a,b);
//(3) ["12", "we", "w*ee"] (4) ["12", "we", "w", "ee"]

