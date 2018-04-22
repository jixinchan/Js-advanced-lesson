/*
	Created by JiXinchan on 2018.4.19
*/
//Object.keys返回所有非继承可枚举属性的键
var obj={x:1};
Object.keys(obj);
Object.getOwnPropertyDescriptor(obj,"x");
Object.defineProperty(obj,"y",{
	value:2
})
Object.keys(obj);//没有y.因为y默认不可枚举
obj.z=3;
Object.keys(obj);//有z。因为z默认可枚举

//getOwnPropertyNames返回所有自由键包括不可枚举的
console.log(Object.getOwnPropertyNames(obj));

// in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
// for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
for(var k in obj){ //遍历不到x属性
    console.log(k,obj[k]);
}
console.log("x" in obj,"y" in obj);

//Object.prototype.hasOwnProperty
//判断自身是否有该属性，不包括可枚举的属性
Object.hasOwnProperty("y");//false
Object.hasOwnProperty("z");//true

//propertyIsEnumerable判断自身是否有该属性并检测该属性是否可枚举