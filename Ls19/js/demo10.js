/*
	Created by JiXinchan on 2018.5.8
*/
//日期格式示例
//YYYY-MM-DDTHH:mm:ss.sssZ
//sss表示毫秒数的整数部分
console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));
console.log(new Date().toISOString());

console.log(new Date("1999-11-22T13:17"));
//Mon Nov 22 1999 13:17:00 GMT+0800 (中国标准时间)

console.log(new Date("1970-01-01").getTime());//0