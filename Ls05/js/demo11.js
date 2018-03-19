/*
	Created by JiXinchan on 2018.3.19
*/
var a = 34;
if(a = 45){
    console.log("是否会输出？");
}

var b = 34;
if(45 == b){//反写的好处：若将判等写成赋值号，会报错。
    console.log("是否会输出？");
}