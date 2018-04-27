/*
	Created by JiXinchan on 2018.4.26
*/
//对象方法中的this
var obj={
	a:1,
	b:2,
	action:function(x,y){
		this.x=x;
		this.y=y;
	}
}
obj.action(2,3);