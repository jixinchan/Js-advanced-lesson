/*
    Created by JiXinchan on 2018.3.9
*/
//判等时的不同
//基本类型是判断变量的值是否相等（值比较）
//引用类型是判断所指向的内存空间是否相同（引用比较）
var a1=2;
var b1=2;
console.log(a1==b1);
console.log(a1===b1);//true基本类型，值相等且类型相同

var a2=new Number(3);
var b2=new Number(3);
console.log(a2==b2);
console.log(a2===b2);//false引用类型，在堆区申请了两块不同的空间。

var a3=new Number(4);
var b3=a3;
console.log(a3==b3);
console.log(a3===b3);//true b3和a3指向同一块内存

b3=new Number(4);
console.log(a3===b3);//false 此时b3再一次重新开辟了内存

var a4=5;
var b4=new Number(5);
console.log(a4==b4);//true 隐式类型转换，b4转换为a4？
console.log(a4===b4);//false

var a5={x:1};
var b5={x:1};//此时对象属性虽然为基本类型，但仍存储在堆区
console.log(a5==b5);//false
console.log(a5===b5);//false
console.log(a5.x==b5.x);//true
console.log(a5.x===b5.x);//true值相同且类型相同

