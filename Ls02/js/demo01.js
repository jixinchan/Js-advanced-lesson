/*
	Created by JiXinchan 2018/3/8
*/
/*数据类型
  基本类型(Number、String、Boolean、Null、 Undefined)
  引用类型(object(Array FUnction Date Error)) 
*/

//类型检测之 typeof
console.log(typeof 123);
console.log(typeof true);
console.log(typeof "123");
console.log(typeof undefined);
console.log(typeof null);        //注：此时值为object
console.log(typeof {name:"1"});

console.log(typeof Array);
console.log(typeof Date);
console.log(typeof Function);
console.log(typeof Number);      //这四个为function，因为是方法

console.log(typeof Math);

//类型检测之instanceof
var a={x:23,y:45};
console.log(a instanceof Object);//true
var b=[1,3,45];
console.log(b instanceof Array);//true
console.log(b instanceof Object);//true

var Person=function(){
	name:'JiXinchan'
};
var p=new Person();
console.log(p instanceof Person);//true
console.log(p instanceof Object);//true
