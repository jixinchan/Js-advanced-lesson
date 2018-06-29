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
}//a,b 只输出不是Symbol的
Object.getOwnPropertySymbols(obj);
//[Symbol(a), Symbol(b)]
Object.getOwnPropertySymbols(obj).forEach((v)=>{console.log(obj[v])});
//Hello World


//Symbol.for(str)
//去搜索有没有以str为名称的Symbol，有就返回，没有就创建
//会登记在全局环境中供搜索，Symbol()不会创建
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true

//Symbol.keyfor()方法返回一个已登记的Symbol类型值的key
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined

//新增数据结构set
//- 它类似于数组，但是成员的值都是唯一的，没有重复的值
//- 用Set构造函数来生成Set对象，通过new实例化Set对象
//- 通过add方法向Set结构加入成员，Set结构不会添加重复的值
let s1 = new Set([1,2,3,1,2,3]);
console.log(s1);
var s2 = new Set();
[2,3,4,2,3,5].map(x=>s2.add(x));
for (var i of s2) {
    console.log(i);
}//2 3 4 5

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
//{}引用数据类型 内存空间不同

//has delete clear keys values entries
var s = new Set();
s.add(2).add(1).add(2);
for (var i of s) {
    console.log(i);
}//1  2
s.size // 2
s.has(1); // true
s.has(2); // true
s.has(3); // false
s.delete(2);
s.has(2); // false

var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);

var set = new Set(['red', 'green', 'blue']);
console.log(typeof set.keys());//object
console.log(typeof set.values());
console.log(typeof set.entries());
for (var item of set.keys()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.values()) {
    console.log(item);
}
// red
// green
// blue

for (var [key,value] of set.entries()) {
    console.log(key,value);
}
//Set结构的实例的forEach方法，用于对每个成员执行某种操作，没有返回值。
var set = new Set([1, 2,]);
set.forEach((value, key) => console.log(value * 2) );
set = new Set([...set].map(x => x * 2));
// 返回Set{2, 4}
var set = new Set([2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set{2, 4}

// set应用案例 并集、交集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

//新增数据结构Map，类似于对象
//key 可以是任意数据类型
var o = {};
var m =new Map();
m.set(1,'number');
m.set(o,'string');
m.get(1);
m.has(o);
m.delete(1);
m.has(1);

var m1 = new Map([
    [1,'number'],
    ['o','string']
]);
//等价于
var arr = [
    [1,'number'],
    ['o','string']
];
arr.forEach(([key,value])=>map.set(key,value));

// 如果对同一个键多次赋值，后面的值将覆盖前面的值。
let map = new Map();
map.set(1, 'aaa').set(1, 'bbb');
map.get(1); 

//因为数组是引用数据类型，两个地方的['a']严格不等
var map = new Map();
map.set(['a'],234);
map.get(['a']);//undefined
//基本数据类型
var map = new Map();
map.set('a', 555);
map.get('a');//555

//
var map = new Map();
var o={};
map.set({},3);
map.set(o,4);
map.get(o);//4
map.get({});//undefined

let map = new Map([
    [1,'number'],
    [2,'number2'],
    [3,'number3']
]);
console.log([...map.keys()]);
console.log([...map.values()]);
console.log([...map.entries()]);


let map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
let map1 = new Map(
    [...map0].filter(([k, v]) => k < 3)
);
// 产生Map结构 {1 => 'a', 2 => 'b'}
let map2 = new Map(
    [...map0].map(([k, v]) => [k * 2, '_' + v])
);