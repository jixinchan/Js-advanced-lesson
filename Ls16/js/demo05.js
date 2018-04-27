/*
	Created by JiXinchan on 2018.4.26
*/
//间接调用
obj1={x:1,y:2};
obj2={x:3,y:5};
var test=function(){
	console.log(this.x,this.y);
}
obj1.fun=test;
obj1.fun();
obj1.fun.call(obj2);//test.call(obj2);

//call,apply定义在function.prototype