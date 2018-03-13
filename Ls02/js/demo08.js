/*
	Created by JiXinchan on 2018.3.12
*/
//undefined
var a;
console.log(a);//undefined
//若没有var a，则会报错。

function foo(x,y){
	console.log(x,y);
}
foo(1);//1 undefined
var b = function fee(){

}
console.log(b);
