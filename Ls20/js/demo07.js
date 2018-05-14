/*
	Created by JiXinchan on 2018.5.11
*/
//RegExp.prototype 上的属性
// - global 默认为false
// - ignore case 默认为false
// - multiline 默认为false 标志为m为true
// - lastIndex 表示当前匹配内容的最后一个字符的下一个位置
// - sourse 正则表达式文本字符串
var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);

console.log(reg2.lastIndex);//0
reg2.test("abc23def");
console.log(reg2.lastIndex);//1
reg2.test("abc23def");
console.log(reg2.lastIndex);//2

while (reg2.test("abc23def")){
    console.log(reg2.lastIndex);
}//1 2 3 4 5 6 7 8



