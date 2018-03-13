/*
	Created by JiXinchan on 2018.3.12
*/
var obj={x:1,y:2,z:3};//原型是Object.prototype
console.log(obj.__proto__===Object.prototype);
console.log(Object.prototype);

var arr=[1,2,3,4,5,6];
console.log(arr.__proto__===Array.prototype);
console.log(Array.prototype);
console.log(arr.__proto__.__proto__===Object.prototype);

function f00(){
	console.log("q");
};
console.log(foo.__proto__ === Function.prototype);
console.log(foo.__proto__.__proto__ === Object.prototype);

