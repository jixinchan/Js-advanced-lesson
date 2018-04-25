/*
	Created by JiXinchan on 2018.4.23
*/
//part1
//原型链。自有属性和继承属性
var pobj={
	x:1
}
var obj=Object.create(pobj);//x是obj的继承属性
obj.y=2;
obj.z=3;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.hasOwnProperty("x"));//判断是否是自身的属性
console.log("x" in obj);//继承属性

//part2
obj.x=4;//添加的自身的x，不同于原型的x

console.log(obj.hasOwnProperty("x"));//true
console.log(obj.x);//优先访问自身的x
console.log(pobj.x);

obj.x=5;//修改的也是自身的x。原型的x不变
delete obj.x;//删除了自身的属性

//要删除原型的属性
delete obj.__proto__.x;
console.log(pobj.x);

console.log(obj.x);//1