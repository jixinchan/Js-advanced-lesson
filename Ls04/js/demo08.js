/*
	Created by JiXinchan on 2018.3.15
*/
//case在比较时使用的是全等操作符比较
//不会发生隐式类型转换
var i = 65;
switch(new Boolean(true)){
    case i>=60://判断i>=60===true?
        alert('及格');
        break;
    case i<60:
        alert('不及格');
        break;
    default:
        alert('default');
}
//default 一个新的对象，在堆区的新的内存

// var j = 23;                输出case_111
// var j = "23";              输出case_222
// var j = new String("23");  输出case_default
//var j = new Number(23);     输出case_default
switch (j){
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}

