/**
 * JXC 2018.6.7
 */
//var声明提升
console.log(a);//undefined
var a = 12;
console.log(a);//12

var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();

//let没有声明提升
console.log(a);//报错
let a = 23;
console.log(a);


 //let暂时性死区
 //在当前区域形成死区
 let temp = 123;
 if(true){
     console.log(temp);
     let temp = 234;
 }

 typeof b;//undefined

 typeof b;//报错
 let b;

 //let const不能重复声明
let a;
let a;

let b;
var b;
