/*
	Created by JiXinchan on 2018.2.19.
*/
//逻辑与、或的基本理解
console.log(2>1&&4<5);//t
console.log(true&&(!2));//f
console.log(false&&("2" == 2));//f
console.log(false&&false);//f

console.log(2>1||4<5);//t
console.log(true||(!2));//t
console.log(false||("2" == 2));//t
console.log(false||false);//f

console.log(new Boolean(false)&&4<5);//t
console.log('1'&&4<5);//t
console.log(2&&4<5);//t
console.log(undefined&&4<5);//undefined
console.log(NaN&&4<5);//NaN