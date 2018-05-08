/*
	Created by JiXinchan on 2018.5.7
*/
//Date静态方法
console.log(Date.now());//以毫秒为单位返回当前时间
console.log((new Date()).getTime());

console.log(Date.parse("1970-01-01"));//将字符创转换为毫秒
console.log(Date.parse("1970-01-02"));

console.log(Date.UTC(2017,9,1));//将给定日期转换为毫秒

//Date 原型方法
var d=new Date("1988-11-22");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//getDay()获得是当前星期的第几天
console.log(d.getTimezoneOffset());//返回时区偏移？？

d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);//会将月份和日期都设置
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());


var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());


// 15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23
// Sat Apr 21 2012 ___ 2012/4/21
// 2012-04-21T07:07:23.234Z