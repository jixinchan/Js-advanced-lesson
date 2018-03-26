/*
	Created by JiXinchan on 2018.3.26
*/
//内置函数对象Array Function Date
//内置非函数对象 Math JSON
console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function以上三个都可以通过构造函数来创建对象

console.log(typeof Math);//Object
console.log(typeof JSON);//Object
console.log(typeof Error);//function

console.log(Array instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Math instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(JSON instanceof Object);//true
console.log(JSON instanceof Function);//false


console.log(typeof new Function());//function
console.log(typeof new new Function());//Object
console.log(typeof new new new Function());//error


var foo=new Function();
var fee=new foo();//Object
console.log(typeof fee);
