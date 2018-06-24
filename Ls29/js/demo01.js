/**
 * JXC 2018.6.11
 */
//ES6对string的扩展
//1 字符串的遍历
for(let c of 'qwer'){
    console.log(c);
}
//q w e r

for (let key in 'foo') {
    console.log(key);
}
//0 1 2


//2 新的方法
var s='qwerasdf';
var reg='/^q/gi';
s.replace(reg,"#");

s.startsWith('q');//true
s.endsWith("w");//false
s.includes("d");//true
//第二个参数表示从第几位开始匹配
s.startsWith("r",3);//true
s.startsWith("w",4);//false

//3  repeat
'xi'.repeat(2);//"xixi"
'na'.repeat(3.1);//"nanana"四舍五入
//当括号里的数为负数或


//对regexp的扩展
//1 构造函数实例化的不同
//在ES5中
var regex = new RegExp('xyz', 'i');
var regex = new RegExp(/xyz/i);
//不可以
var regex = new RegExp(/xyz/i, 'i');
//ES6中可以，且第二个参数可以覆盖第一个中的

//2 粘连修饰符
var s='aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
r1.exec(s); // ["aaa"]
r2.exec(s); // ["aaa"]
r1.exec(s); // ["aa"]
r2.exec(s); // null
//y修饰符要求匹配必须从头部开始
var r = /hello\d/y;
r.sticky // true

// ES5的source属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"

// ES6的flags属性
// 返回正则表达式的修饰符
/abc/ig.flags
// 'gi'


//对number的扩展
//isNaN(是否是NaN)  isFinite(是否有限)
Number.isFinite(12);
Number.isFinite(NaN);
Number.isFinite(Infinity);
Number.isFinite(-Infinity);
Number.isFinite('fo');
Number.isFinite('1');
Number.isFinite(false);

Number.isNaN(NaN); // true
Number.isNaN('15'); // false
Number.isNaN(true); // false
Number.isNaN(9/NaN); // true
Number.isNaN('true'/0); // true
Number.isNaN('true'/'true') // true

//对math
//去除一个数的小数部分，返回整数部分
Math.trunc(4.1); // 4
Math.trunc(4.9); // 4
Math.trunc(-4.1); // -4
Math.trunc(-4.9); // -4
Math.trunc(-0.1234); // -0
//判断一个数到底是正数、负数、还是零
Math.sign(-5); // -1
Math.sign(5); // +1
Math.sign(0); // +0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign('foo'); // NaN
Math.sign(); // NaN


//对array
let likeArray={
    '0':'a',
    '1':'b',
    '2':'c',
    length:3
}
var arr1 = Array.prototype.slice.call(arrayLike); 
// ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); 
// ['a', 'b', 'c']

function foo(){
    return Array.from(arguments);
}
foo(1,2,3,4);

//Array.of
var a=Array.of(1,2,3,4,5);
var b=Array.of('a','b','c');
console.log(a);
console.log(b);

//对Object的扩展
//允许在对象中直接写入变量和函数
var obj={
    name:"Linda",
    call:function(){
        console.log("My name is "+this.name);
    }
}
obj.call();
var name="Daenerys";
var person={
    name,
    call(){
        console.log("My name is "+this.name);        
    }
}
person.call();

//允许字面量定义对象是，用表达式作为对象的属性名
let key='name';
let obj={
    [key]:'Jack',
    ['a'+'bc']:123
}

//Object.is用来比较两个值是否严格相等，与===基本一致
Object.is(1,'1');
Object.is(1,1);
//区别
console.log(+0===-0);
console.log(NaN===NaN);
console.log(Object.is(+0,-0));
console.log(Object.is(NaN, NaN));

//Object.assign实现的是浅拷贝，不是深拷贝
//setPrototypeof
var obj2={
    name:"Marine",
    age:21
}
Object.keys(obj2);//[name,age]
var obj3=Object.create(obj2);
Object.keys(obj3);//[]

function obj(name,age){
    this.N=name;
    this.A=age;
}
var obj4=new obj("lili",23);
Object.keys(obj4);//[N,A]

Object.setPrototypeOf(obj4,obj2);
Object.keys(obj4);//[name,age]

//values  entries
