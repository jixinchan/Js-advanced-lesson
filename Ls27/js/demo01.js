/**
 * JXC  2018.6.4
 */
//let用法与var相似。let声明的变量只在当前作用块有效。
//例一
//以下代码中将let换为var，则userId重复定义
let userId = 123;
//var userId=123;
document.onclick = function(){
    console.log("userID=",userId);
};
let a=2,b=3;
if(a<b){
    let userId=234;//不会造成变量污染
    //var userId=123;
    console.log(userId);//234
}


//例二
for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log(new Date,i);
    },1000*i);
}
// Mon Jun 04 2018 16:35:30 GMT+0800 (中国标准时间) 0
// Mon Jun 04 2018 16:35:31 GMT+0800 (中国标准时间) 1
// Mon Jun 04 2018 16:35:32 GMT+0800 (中国标准时间) 2
for(var i=0;i<3;i++){
    (function(j){setTimeout(function(){
        console.log(new Date,i);
    },1000*i)})(i);
}
// Mon Jun 04 2018 16:35:45 GMT+0800 (中国标准时间) 3
// Mon Jun 04 2018 16:35:46 GMT+0800 (中国标准时间) 3
// Mon Jun 04 2018 16:35:47 GMT+0800 (中国标准时间) 3



//const
const PI = 3.1415926;
console.log(PI);
PI=3.14;//不可以
const b;//不可以。常量必须赋值
const b=23;//可以
const a=[];
a=[1];//常量引用不可修改
a.push(1);//常亮的属性可以修改

//const作用域与let相同
let a=12,b=1;
if(a>b){
    let sum=a+b;
}
console.log(sum);//报错

const foo=function foo(){};//


