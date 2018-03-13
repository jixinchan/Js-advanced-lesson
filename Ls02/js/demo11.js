/*
	Created by JiXinchan on 2018.3.12
*/
//Part1
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(0));//false
console.log(Boolean(NaN));//false
console.log(Boolean(1));//true
console.log(Boolean(""));//false
console.log(Boolean("abc"));//true
console.log(Boolean({}));//true

if(new Boolean(false)){
	console.log("q");
}//是一个new的对象 为true

//Part2
console.log(Number({x:1,y:2}));//NaN
console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0

console.log(parseFloat("32343,345xx"));//32343
console.log(parseInt("123.345xx"));//123

//Part3
console.log(String(undefined));//'undefined'
console.log(String(null));//'null'
console.log(String(true));//'true'
console.log(String(false));//'false'
console.log(String(0));//'0'
console.log(String(234));//'234'
console.log(String({x:1,y:2}));//[object,object]