/*
	Created by JiXinchan on 2018.4.23
*/
//js对象继承
//js采用的是原型的继承方式，
//每个对象都有一个原型对象，最初始的原型对象是null
//通过任何方式创建的对象都有原型通过__proto__访问原型
var wangjiaqi={
	name:"jiaqi",
	hobby:function(){
		console.log("I like sleeping and eating!")
	}
}//原型是Object.prototype

var littlewjq=Object.create(wangjiaqi);
var smallwjq=Object.create(wangjiaqi);
smallwjq.age=23;
//little和small的原型是同一个

littlewjq.__proto__.name='wjq';//修改了原型上的属性
console.log(smallwjq.name);//wjq


var leastwjq=Object.create(smallwjq);
console.log(leastwjq.__proto__===smallwjq.prototype);//false
console.log(smallwjq.prototype);//undefined

console.log(wangjiaqi.__proto__===Object.prototype);
console.log(littlewjq.__proto__.__proto__===Object.prototype);
