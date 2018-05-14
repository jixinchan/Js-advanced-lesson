/*
	Created by JiXinchan on 2018.5.8
*/
//分组的 反向引用
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/."$2/$3$1");
//   10/23/2017

//分组的 忽略分组?:
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/."$2/$3$1");
//   23$310
//忽略第一个分组

//注意括号的转义字符，第一个相当于做了分组
console.log(/^(ab)$/.test("(ab)"));//false
console.log(/^\(ab\)$/.test("(ab)"));//true