/*
	Created by JiXinchan on 2018.4.16
*/

//对属性的增删改查
var obj={
	x:1
}

obj.y=12;
delete obj.y;
obj.x=11;
console.log(obj['x']);

var obj={
	x1:12,
	x2:23,
	x3:34
}
for(var i=0;i<4;i++){
	console.log(obj["x"+i]);
}


var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}
var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}

//.和[]访问方法。
//.是静态的标识符。[]是动态的表达式赋值
//数组[]表示法在存取属性值时会进行表达式运行。而点表示法是直接存取属性值