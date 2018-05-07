/*
	Created by JiXinchan on 2018.5.3
*/
//part 1  （迭代-非破坏性-检测方法）
//Array.prototype.forEach(callback,thisValue?)
var arr1=[2,5,8];
arr1.forEach(function(a){
	console.log(a,this);//window
});
console.log(arr1);

var arr2=[3,6,7];
arr1.forEach(function(a){
	console.log(a,this);//arr2
},arr2);
console.log(arr1);

var arr3=[];
arr1.forEach(function(a,i,array){
	arr3[i]=a>this[i]?a:this[i];
},arr2);
console.log(arr3);//3,6,8

//every（有不满足的立即返回false）
var returnValue=arr1.every(function(a){
	console.log(a);
	return a%2==0;
});
console.log(returnValue);
//some（有满足的立即返回true）
var returnValue=arr1.some(function(a){
	console.log(a);
	return a%2==0;
});
console.log(returnValue);

//part2  （迭代-非破坏性-转换方法）
//Array.prototype.map(callback,thisValue?)
//创建一个新数组，其结果是该数组中的每个元
//素都调用一个提供的函数后返回的结果。
var arr4=[3,4,6,1,7];
var arr5=arr4.map(function(a){
	return a*a;
});
console.log(arr5,arr4);
//filter() 方法创建一个新数组, 其包含通过所提
//供函数实现的测试的所有元素。 
var arr6=arr4.filter(function(a){
	return(a>4&&a<7)?true:false;
});
console.log(arr6);//[6]


//part 3 （迭代-非破坏性-归约方法）
//reduce
function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs,"x"));
console.log(arr4.reduceRight(printArgs));
console.log(arr4.reduceRight(printArgs,"x"));