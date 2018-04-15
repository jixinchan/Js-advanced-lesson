/**
 * Created by JiXinchan on 2018.4.12.
 */

 //闭包作用：
 //使能够访问到局部变量；使内存中的变量不被释放

 //可以通过调用f来改变n的值
 function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//1000
f();//1001


var n = 10;
function f1(){
    var n=999;
    nAdd=function(){n+=1;};//nAdd不是闭包
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); // 999
nAdd();//能执行是因为f1被赋值给了一个全局变量
result(); // 1000

//闭包实现数据封装性
function Person(){
	var name="default";
	return{
		getName:function(){
			return name;
		}
		setName:function(newname){
			name=newname;
		}
	}
}
var john = Person();
console.log(john.getName());
john.setName("john");
console.log(john.getName());



var jack = Person();
console.log(jack.getName());
jack.setName("jack");
console.log(jack.getName());

var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
document.onclick = result1;//未执行add之前，10
nAdd();//会修改m的值
result2(); // 11

