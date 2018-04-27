/*
	Created by JiXinchan on 2018.4.26
*/
//构造函数中的this指向的是最终实例化出的对象
function Line(a,b){
	this.a=a;
	this.b=b;
	this.print=function(){//若此时没有this。print是window的
		console.log(this.a,this.b);
	}
}
var l1=new Line(1,2);
var l2=new Line(2,3);
l1.print();
l2.print();

//若直接调用,相当于给window添加了a,b属性
Line(2,3);
console.log(a,b);


function Line(a,b){
	var a=a;//私有属性
	var b=b;//私有属性
	this.print=function(){//若此时没有this。print是window的
		console.log(a,b);
	}
}
var l1=new Line(1,2);//闭包
l1.print();