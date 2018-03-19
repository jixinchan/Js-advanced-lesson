/*
	Created by JiXinchan on 2018.3.19
*/

console.log(3===3);//t
console.log(3==="3");//f
console.log(3=="3");//t
console.log(3==new String(3));//t 引用类型向基本类型转换
console.log(3===new String(3));//f


var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);//f
console.log(obj1 == obj2);//f
console.log(obj1 === obj2);//f
console.log(obj1 == new String("xyz"));//f


var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);//f
console.log(obj1 !== obj2);//t
console.log(obj1 != obj2);//t
console.log(obj1 != new String("xyz"));//t


console.log(2 == 2);//t
console.log(new Number(2) == new Number(2));//f
console.log(2 == new Number(2));//t引用转基本


var obj1={x:1,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean(false)};
console.log(obj1.x===obj2.x);//t
console.log(obj1.y===obj2.y);//f
console.log(obj1.z===obj2.z);//f
console.log(obj1.x==obj2.x);//t
console.log(obj1.y==obj2.y);//f
//new Boolean(false)是一个对象，转换为布尔为true
//此处因obj2={x:2,y:[1],z:new Boolean(false)}二义性
console.log(obj1.z==obj2.z);//t



