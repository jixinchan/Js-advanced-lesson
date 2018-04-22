/*
	Created by JiXinchan on 2018.4.19
*/
//复习
var obj={X:2};

var obj1=Object.create(obj);
obj1.y=12;

var obj2=function(){this.z=3;}
var obj3=new obj2();
console.log(obj,obj1,obj3);

//{X: 2} {y: 12} obj2 {z: 3}
//先去找本身的属性，自身找不到，找原型的属性

console.log(obj.toString());//原型上有toString

for(var i in obj){
	console.log(i,obj[i]);
}//遍历不到toString。因为不可枚举