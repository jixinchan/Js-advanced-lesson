/**
 * JXC 2018.6.8
 */
//对象的解构赋值
var{ foo1,foo2 } = {foo1:"aaa",bar1:"bbb"};

// 数组的元素是按次序排列的，变量的取值由它的位置决定
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
var {bar2,foo2}={foo2:"ccc",bar2:"ddd"};

var {a}={b:1,c:2};
console.log(a);//undefined

var {a:v}={a:3};
console.log(v);//3

//对象的内部解构赋值实际上是下面形式的简写
var {a:a,b:b}={a:1,b:2}

let obj1={a:1,b:3};
let {a:x,b,y}=obj1;
console.log(x,y);//1,3

let {a,b}=obj1;
console.log(a,b);//1,3

//嵌套结构的赋值
var obj1={
    p:[
        'Hello',
        {y:'World'}
    ]
};
var {p:[x,{y}]}=obj1;
//console.log(p);//此时p只是模式，不会被赋值
let {p}=obj1;
console.log(x,y);
console.log(p);

//默认值
var {x1 = 1}={};//1
var {x2,y2 = 3}={x2:4};//4,3
var {x3:y3=2}={x3:3};
console.log(y3);//3
console.log(x3);//报错