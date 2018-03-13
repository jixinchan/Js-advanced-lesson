/*
	Created by JiXinchan on 2018.3.12
*/
//Number是基本数据类型，在访问方法时，会创建临时包装对象
//，访问到的方法都是对象中的属性和方法，访问完成后，会拆开包装
//访问对象属性时，首先访问自身属性，访问不到时，则会在原型链上寻找对应的属性和方法
//Number原型方法（Number对象继承的方法）
//Number.prototype.toFixed();

var a=1234.5678;
console.log(a.toFixed(2));
console.log(a.toPrecision(2));
console.log(a.toString());
console.log(a.toExponential(2));

console.log(isNaN("12,3"));//true