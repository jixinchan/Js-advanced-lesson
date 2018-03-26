/*
	Created by JiXinchan on 2018.3.26
*/
//高阶函数
//z = 2*(x+1)-3*y*y;
//c = 2*a*a-3*(b-1);
//k = 2*(i+1)-3(j-1);
function f1(x,y,c2,c3){
	return 2*f2(x)-3*f3(y);
}
var f2=function(x){
	return x+1;
}
var f3=function(x){
	return x*x;
}
var f4=function(x){
	return x-1;
}
f1(1,2,f2,f3);
f1(1,2,f3,f4);
f1(1,2,f2,f3);