/*
	Created by JiXinchan on 2018.3.26
*/
//函数对象的属性length得到形参数目
//函数对象的arguments.length属性得到是参数目
function foo(x,y,z){
	if(foo.length==arguments.length){console.log("数目相同");}
	else{console.log("数目bu同");}
}
foo(1,1,1,1);

//caller==null指调用当前函数的是顶层
function foo(){
	if(foo.caller==null){
		console.log("foo id called by the toppest level");
	}else{
		console.log("foo is called by function");
	}
}
foo();
function foo1(){
	foo();
}
foo1();

var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();
obj.foo2();


//callee返回正在执行的Function
//多用于递归
function Res(n){
	if(n=1)return 1;
	else return n+Res(n-1);//return n+arguments.callee(n-1);
}


//prototype是构造函数的原型属性
console.log(Object.__proto__===Function.prototype);//true


//关于绑定bind
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();//直接调用  23
		foo();//45
        //var fee = foo.bind(this); fee();23
    }
};
obj.test();