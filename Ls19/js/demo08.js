/*
	Created by JiXinchan on 2018.5.7
*/
//创建Date对象4种方式
var date1 = new Date(2017,9,18,12,34,1);//9是10月
console.log(date1);
//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)
var date2 = new Date(17,9,18,12,34,1);
console.log(date2);
//Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)
var date3 = new Date("2018-05-07");//5月就是5月
console.log(date3);
//Mon May 07 2018 08:00:00 GMT+0800 (中国标准时间)

//var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);//逆运算是date4.getTime();

var date5 = new Date();//new Date(Date.now());
console.log(date5);

//无效日期
var date6 = new Date(NaN);
console.log(date6);//Invalid Date
date6 instanceof Date;//true

//是否有new
var d1=new Date();
var d2=Date();
console.log(d1,typeof d1);//"object"
console.log(d2,typeof d2);//string

