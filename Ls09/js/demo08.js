/*
    Created by JiXinchan on 2018.3.29
*/
//- 解析器在执行代码前的进行代码扫描（var、function）
//- 将变量和函数声明在当前作用域（全局、函数）内进行提升

//part 1
console.log(a);
var a=1;
console.log(a);
//相当于
var a;
console.log(a);//undefined
a=1;
console.log(a);//1


//part 2
foo();
function foo(){
    console.log("f1");
}
function foo(){//覆盖
    console.log("f2");
}


//part 3
foo();
var foo = function(){
    console.log("foo");
};
//相当于
var foo;
foo();
foo = function(){
    console.log("foo");
};

console.log(foo);//输出undefined
var foo = function(){
    console.log("foo");
};
foo();//输出foo
//相当于
var foo;
console.log(foo);//输出undefined
foo = function(){
    console.log("foo");
};
foo();//输出foo


//part 4
AA();
function AA(){          //解析器不会对已定义的进行二次声明
    console.log("AA_1");
}//提升
var AA=function(){//提升var AA;
    console.log("AA_2");
}
AA();

