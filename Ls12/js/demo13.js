/**
 * Created by JiXinchan on 2018.4.12.
 */

 //闭包的常见形式
 function counter(){
 	var n=0;
 	return{
 		count:function(){return ++n;},
 		reset:function(){n=0;return n}
 	}
 }//返回一个对象 有两个方法
var c = counter();//两个闭包c  d
var d = counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2
