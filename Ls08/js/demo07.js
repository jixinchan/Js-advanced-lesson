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

//将数组所有元素改为数字类型
var result = ["1", "2", "3"].map(function(val) {
    return parseInt(val);
});
for (var i=0;i<result.length;i++){
    console.log(typeof result[i]);
}
//array.map(function(){})返回经括号中函数处理后的数组

//reduce 相当于 [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var arr = [1, 3, 5, 7, 9];
arr.reduce(function f(x, y) {
    return x + y;
}); // 25
//filter 数组过滤 ，返回为false的将被过滤掉
arr.filter(function(x){
	return x%2!==0;
});
// sort 排序.返回为负，交换位置。返回值为正，不交换
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); 

var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());
console.log("输出：",obj.fun3()());
console.log("输出：",obj.fun4());
// 输出： ƒ fun2() {
//         return this.x;//若改为 return this;
//     }
// 输出： 12
// 输出： 34