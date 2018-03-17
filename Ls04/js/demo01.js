/*
	Created by JiXinchan on 2018.3.15
*/
var a=[2,3,4];
var b=a;
console.log(a,b);[]
b.pop();
console.log(a,b);
b=[5,6,7];
console.log(a,b);

function foo(x){
	x.push(5);
	x=[6,7,8];
	x.push(9);
}
foo(a);
console.log(a);

function fee(x){
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
}
var m=1,n=2,q=3;
fee(m,n,q);


//二义性
// 存在二义性的语句，要避免有二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
// 下述代码是对象还是语句块
{
    foo:max(2,3)
}

// 存在二义性的语句 补充一
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}

// 存在二义性的语句 补充二
var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}