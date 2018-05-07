/*
	Created by JiXinchan on 2018.5.3
*/
//part 1  增删改查
var a=['h'];
a[1]='e';
a[2]='l';
console.log(a.length);//3
delete a[2];//删除后长度不变
console.log(a.length);//3

var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]]=b[0];
console.log(b);// [empty × 2, 3, undefined]

//part 2
var s=[];
s[-1]=true;//创建了一个名为‘-1’的属性
s['12']=12;//第13个元素为12
s[1.00]='hi'//第二个是‘hi’
console.log(s.length);//13
console.log(s);//[empty, "hi", empty × 10, 12, -1: true]