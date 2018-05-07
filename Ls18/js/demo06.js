/*
	Created by JiXinchan on 2018.5.3
*/
//part 1 排序和颠倒顺序 破坏性
//Array.prototype.reverse()
var arr1=[1,2,4];
arr1.reverse();
console.log(arr1);

//Array.prototype.sort(compareFunction？)
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);//按字母顺序

var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//[-1, -20, 50, 7]

arr3.sort(function(a,b){
	return a>b;
});//[-20, -1, 7, 50]

arr2.sort(function(a,b){
	return a[1]>b[1];
});

//part2 合并，切分和连接，非破坏性
//Array.prototype.concat()
var arr4=arr1.concat(arr3);//返回一个新数组

//Array.prototype.slice(begin?,end?)不写参数原数组
var arr5=arr4.slice(3,7);//返回从3开始不包括7的新数组

//Array.prototype.join(separator?)返回字符串
var str = arr5.join("**");

//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));//3******5

//part3 值的查找
//Array.prototype.indexOf(searchValue,startIndex?)
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//2
console.log(arr8.indexOf(5,3));//3

//Array.prototype.lastIndexOf(searchElement,startIndex?)
//从startIndex开始往前找，匹配的第一个便是
console.log(arr8.lastIndexOf(5));//6
console.log(arr8.lastIndexOf(5,3));//3