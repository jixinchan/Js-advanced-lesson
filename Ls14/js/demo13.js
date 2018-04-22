/*
	Created by JiXinchan on 2018.4.21
*/
//给多个属性设置属性特性的方法
var obj={_x:2};
Object.defineProperties(obj,{
	y:{value:4,writable:true,configurable:true,enumerable:true},
	z:{value:6,writable:true,configurable:true,enumerable:false},
	x:{
		get:function(){return this._x;}
		set:function(val){this._x=val;}
	}
});

//添加访问器属性可以给他起个名字
year：{
	get:function(){},
	set:function(){}
}

var empty = {};
var obj2 = Object.create{empty,{
	x:{value:2},y:{value:4}
}}
console.log(obj2.hasOwnProperty("x"));