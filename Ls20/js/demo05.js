/*
	Created by JiXinchan on 2018.5.8
*/
//贪婪模式和非贪婪模式
"12347890".replace(/\d{3,6}/,"X");//默认贪婪 X90
"12347890".replace(/\d{3,6}?/,"X");//设置为非贪婪X47890
"12347890".replace(/\d{3,6}?/g,"X");// XX90

//分组
console.log("abcabcabccc".replace(/abc{3}/,"X"));
console.log("abcabcabccc".replace(/(abc){3}/,"X"));

console.log("a1bb2cc3de4".replace(/[a-z]{2}\d/g,"X"));
console.log("a1bb2cc3de4".replace(/([a-z]{2}\d){3}/,"X"));
console.log("a1bb2cc3de4".replace(/[a-z]{2}\d{3}/,"X"));
//a1XXX
//a1X
//a1bb2cc3de4

//  |或
console.log("xxabccxxdexx".replace(/(\bxx)|(xx\b)/g,'yy'));
console.log("abccde_abssde".replace(/ab(cc|ss)de/g,"XX"));