/*
	Created by JiXinchan on 2018.3.9
*/
//值传递
var str_a="hello world!";
function foo1(arg){ //传递的字符串的值，在栈区重新给形参分配空间
    console.log(arg);
    arg="hello js!";
}
foo1(str_a);
console.log(str_a);//两次都是hello world；
//引用传递
var str_b={s:"hello world"};
function foo2(arg){ //传递的是字符串的引用，形参和str_b指向堆区同一块内存
    console.log(arg);
    arg.s="hello js";
}
foo2(str_b);
console.log(str_b.s);//hello js