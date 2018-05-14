/*
	Created by JiXinchan on 2018.5.10
*/
//part1
//[]
console.log("asdgAa12fg".replace(/[a]/,"C"));
console.log("asdgAa12fg".replace(/[a]/g,"C"));
console.log("asdgAa12fg".replace(/[a]/gi,"C"));

//取反[^]
console.log("asdgAa12fg".replace(/[^a]/,"C"));
console.log("asdgAa12fg".replace(/[^a]/g,"C"));
console.log("asdgAa12fg".replace(/[^a]/gi,"C"));

//范围
console.log("14536abcdk".replace(/[6-9e-z]/g,"X"));

//part2
//^表示整个字符串的前边界 
//$表示整个字符串的后边界
console.log("This is a Boy is".replace(/^is/g,0));
//This is a Boy is
console.log("This is a Boy is".replace(/\bis/g,0));
//This 0 a Boy 0
console.log("This is a Boy is".replace(/is$/g,0));
//This is a Boy 0
console.log("This is a Boy is".replace(/is\b/g,0));
//Th0 0 a Boy 0


//part3
//量词
//? 0次或1次，最多一次
console.log("noonoonoooooN".replace(/o?/g,"X"));
//+ 出现1或多次
console.log("AadAaaDfADfa".replace(/Aa+/g,0));
//* 出现任意次
console.log("AadAaaDfADfa".replace(/Aa*/g,0));
//{n} 出现n次
console.log("AadAaaDfADfa".replace(/Aa{2}/g,0));
//{n,m} 出现n到m次
console.log("AadAaaDfAaaaDfa".replace(/Aa{1,3}/g,0));
//{n,}至少n次