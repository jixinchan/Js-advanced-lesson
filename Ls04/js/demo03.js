/*
	Created by JiXinchan on 2018.3.15
*/
//ES5中没有块作用域
for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);//5

if(true){
    var a = 20;
}
console.log(a);//该分支语句执行，所以有a
if(false){
    var b = 30;
}
console.log(b);//该分支语句未执行，所以没有b

