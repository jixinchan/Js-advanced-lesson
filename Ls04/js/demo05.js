/*
	Created by JiXinchan on 2018.3.15
*/
function foo(){
	f=123;
}
foo();
console.log(f);//123

function foo(){
	'use strict'
	f=123;
}
foo();
console.log(f);//undefined