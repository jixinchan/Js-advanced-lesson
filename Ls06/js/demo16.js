/*
	Created by JiXinchan on 2018.2.19.
*/
var score = 76;
if(score>90){
    console.log("A");
}else if(score>75){
    console.log("B");
}else if(score>60){
    console.log("C");
}else{
    console.log("D");
}

//if与else if之间用||，前为假返回后者。
//if内部用&&，前为真执行后者
console.log((score>90&&"A")||(score>75&&"B")||(score>60&&"C")||("D"));