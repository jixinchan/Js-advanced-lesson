/*
	Created by JiXinchan on 2018.4.16
*/
//part1
var a=new Object({name:"Jhon"});
var b=new String('str');
var c=new Boolean(true);
var d=new Number(10);
var e=new Function();
var f=new Array(5);
var g=new RegExp('\\d');
var h=new Error();
var i=new Date();
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);//function
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);

console.log(a instanceof Function);
console.log(b instanceof Function);
console.log(c instanceof Function);
console.log(d instanceof Function);
console.log(e instanceof Function);//true
console.log(f instanceof Function);
console.log(g instanceof Function);
console.log(h instanceof Function);
console.log(i instanceof Function);

console.log(a instanceof Object);//全为true
console.log(b instanceof Object);
console.log(c instanceof Object);
console.log(d instanceof Object);
console.log(e instanceof Object);
console.log(f instanceof Object);
console.log(g instanceof Object);
console.log(h instanceof Object);
console.log(i instanceof Object);

//part2
console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log(Boolean instanceof Function);
console.log(Boolean instanceof Object);
console.log(String instanceof Function);
console.log(String instanceof Object);
console.log(Number instanceof Function);
console.log(Number instanceof Object);
console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);
console.log(JSON instanceof Function);
console.log(JSON instanceof Object);//false