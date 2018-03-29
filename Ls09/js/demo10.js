/*
    Created by JiXinchan on 2018.3.29
*/
//ES5中没有块级作用域

if(true){
    var i = 0;
}
//相当于
var i;
if(true){
    i = 0;
}
console.log("i:",i);//0

function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();
console.log("j:",j);//未声明会报错。因为var j只能提升到foo内部最前边
//相当于
function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}