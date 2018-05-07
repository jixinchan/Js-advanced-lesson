/*
	Created by JiXinchan on 2018.5.3
*/
//数组方法
//part1 数组的静态方法
//Array.from();从一个类似数组或可迭代对象中创
//建一个新的数组实例
var bar=[1,2,3];
Array.from(bar);//[1,2,3]
Array.from('foo');//["f","o","o"]

//Array.of() 方法创建一个具有可变数量参数的新
//数组实例，而不考虑参数的数量或类型。
Array.of(7);//[7]
Array.of(1,2,3);
Array(7);//[ , , , , , ,]
Array(1,2,3);

//Array.isArray() 用于确定传递的值是否是一个 Array
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray("foobar");   // false
Array.isArray(undefined);  // false

function foo(){
    console.log(Array.isArray(arguments));
         //false.arguments不是数组
    //console.log(arguments.pop());//这样不能调用
    console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,5);


//part 2 数组原型方法 破坏性添加删除方法
//Array.prototype.shift()返回去除的元素
var arr2=[1,2,3,4,5,6];
var se=arr2.shift();
console.log(se,arr2);//1  [2, 3, 4, 5, 6]

var newLength = arr2.unshift(1,2);//返回新的数组长度
console.log(newLength,arr2);//6 [1,2,2,3,4,5,6]

var popElement = arr2.pop();//返回pop出去的元素
console.log(popElement,arr2);//6 [1, 2, 2, 3, 4, 5]

var newLength = arr2.push(77,88);//返回新的数组长度
console.log(newLength,arr2);//8 [1, 2, 2, 3, 4, 5, 77, 88]

//splice。有第三个参数的情况下必须有第二个参数
var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");//返回切掉的数组
console.log(spliceElements,arr5);//[b,c]  [a,d,x]
var spliceElements = arr5.splice(-2);//[c,d]

//用apply合并两个数组。
//因为apply在传参数是传入的是一个参数数组
var arr3 = ["a","b"];
var arr4 = ["c","d"];
//Array.prototype.push.apply(arr3,arr4);
arr3.push(arr4);
console.log(arr3);