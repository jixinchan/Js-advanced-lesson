/*
	Created by JiXinchan on 2018.4.16
*/
//JS对象属性的分类
//数据属性、访问属性、内置属性

//访问其属性高于其他属性
//set get函数优先级
var info={
	_code:21,
	get code(){
		return this._code;
	},
	set code(val){
		this._code=val;
	}
}
console.log(info.code);//调用get
info.code=23;//调用set
console.log(info.code,info._code);

// var info={
// 	code:21,
// 	get code(){
// 		return this.code;
// 	},
// 	set code(val){
// 		this.code=val;
// 	}
// }
// console.log(info.code);//调用get
// info.code=23;//调用set
// console.log(info.code,info._code);

//只读
var f={
	_x:1,
	get x(){
		return this._x;
	}
}
console.log(f.x);
f.x=4;//相当于添加一个属性
console.log(f.x);//1 get优先级高

//实例
var p1={
	_name:"jiaqi",
	_age:20,
	set age(val){
		if(val>0&&val<160){
			this._age=val;
		}else{
			console.log("请设置正常年龄");
		}
	}
	get age(){
		return this.age;
	}
}
p1.age=166;
console.log(p1.age);    


                                  