/**
 * JXC 2018.6.21
 */
//ES5中的对象属性名都是字符串
//Symbol可以接受一个字符串作为参数，表示对Symbol的描述
//symbol 表示一个独一无二的值，属于基本数据类型，不能用new
let s = Symbol();
typeof(s);
s instanceof Object;//false 
var f1 = Symbol('bar');
var f2 = Symbol('foo');
console.log(f1);
console.log(f2);

var a = Symbol();
var b = Symbol('foo');
console.log(s===a);
conosle.log(s==a);
console.log(b===f2);
conosle.log(b==f2);//all are false

//如果Symbol的参数为对象 会调用toString.
var obj={};
var o1 = Symbol(obj);
var obj2={
    toString(){
        return 'abc';
    }
}
var o2 = Symbol(obj2);

//Symbol值不能与其他类型的值进行运算，会报错。
var sym = Symbol('My symbol');
"your symbol is " + sym;//error


//由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为
//标识符，用于对象的属性名，就能保证不会出现同名的属性。
var ms = Symbol();
var o3 = {};
//1
a[ms] = 'hello';
//2
var o3 = {
    [ms]:'hello'
    //ms:'hello'
}
console.log(o3[ms]);
//3
Object.defineProperty(a,ms,{value:hello});
//configurable enumerable writable默认都为false
var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]: 'Hello!'
};
Object.defineProperty(obj, Symbol("abc"), { value: 'World!' });
console.log(obj);//obj有两个属性

//
var sym1 = Symbol('xx');
var sym2 = Symbol('xx');
var str1 = 'xx';
var str2 = 'xx';
var o4 = {};
o4[sym1]="12";//不能用.运算符
o4[sym2]="34";
o4[str1]="56";
o4[str2]="78";
o4;//3个属性
//{xx: "78", Symbol(xx): "12", Symbol(xx): "34"}

var ms2 = Symbol();
var o5 = {};
o5.ms2 = 'world';//.访问的是字符串类型的key
console.log(o5[ms2]);
console.log(o5['ms2']);

var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,//对象内的属性名也要写[]
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);//123 undefined
console.log(obj[myS2],obj["xx"]);// 456 456
console.log(obj["myS1"]);//undefined
console.log(obj["myS2"]);//undefined

//遍历
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
obj['a']='!';
obj.b='!!'
for (var k in obj){
    console.log(k);
}//a,b
Object.getOwnPropertySymbols(obj);
//[Symbol(a), Symbol(b)]
Object.getOwnPropertySymbols(obj).forEach((v)=>{console.log(obj[v])});
//Hello World


//Symbol.for(str)
//去搜索有没有以str为名称的Symbol，有就返回，没有就创建
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true

//新增数据结构set
//- 它类似于数组，但是成员的值都是唯一的，没有重复的值
//- 用Set构造函数来生成Set对象，通过new实例化Set对象
//- 通过add方法向Set结构加入成员，Set结构不会添加重复的值
let s1 = new Set([1,2,3,1,2,3]);
console.log(s1);
//数组去重
[...new Set([1,2,3,3])];
let set = new Set([2,3,4,5,6,2,3,4]);
console.log([...set]);
[1,2,3,4,2,3,4].map(x=>set.add(x));

var set = new Set();
set.add({});
console.log(set.size);//1
set.add({});
console.log(set.size);//2

//has delete 