/*
	Created by JiXinchan on 2018.3.15
*/

//for ... in 遍历数组
var arr = [2,,"33"];
for(var i in arr){
    console.log(i,arr[i]);
}//输出0 2      2 “33” 忽略了空的

//for ... in 遍历对象
var obj = {x:10,y:20,z:"30"};
for(var k in obj){
    console.log(k,obj[k],typeof obj[k]);
}
//使用现有对象创建新的对象
var obj1 = {x:1};
var obj2 = Object.create(obj1);
obj2.y = 2;
obj2.z = 3;
for(var k in obj2){
    console.log(k,obj2[k]);
}
