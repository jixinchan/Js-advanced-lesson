/*
	Created by JiXinchan on 2018.4.16
*/
//JS对象综述
//JS对象是一种复合值：讲很多值复合在一起
//JS对象是若干无须属性的集合。键值对。键是字符串
 var obj1={
 	name:"jiaqi",
 	anotherName:"little sweet",
 	age:13,
 	action:function(){
 		console.log("我是"+this.name+"我还是个"+this.anotherName+",今年"+this.age+"岁");
 	}
 }
 obj1.action();

//JS对象分类：内置对象、宿主对象、自定义对象