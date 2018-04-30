/*
	Created by JiXinchan on 2018.4.28
*/


function Animal(name){
	this.name=name;
}
Animal.prototype.age = 5;
function Pig(no){
	this.no=no;
}
Pig.prototype=new Animal('pig');
var p1=new Pig(001);
var p2=new Pig(007);

console.log(p1.__proto__);//Animal {name: "pig"}
console.log(p1.__proto__.__proto__);//{age: 5, constructor: ƒ}



