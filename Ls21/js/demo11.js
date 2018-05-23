/*
	Created by JiXinchan on 2018.5.14
*/
//try...catch
//try...finally
//try...catch...finally
//try中抛出异常，执行catch中的语句
//try中没有错误，跳过catch
//无论有无错误，finally都会执行
try{
	//可能出现错误的部分
	var a=new Array(-5);
	console.log("x");//不再执行，因为前一句有错误
}
catch(e){
	console.log(e);
	console.warn("Wran");//输出警告
	//console.error("Error ");//输出错误
	//console.assert(3<2,"错误时输出");
}
finally{
	console.log("finally");
}
 // RangeError: Invalid array length
 //    at <anonymous>:2:8
// Wran
// Error 
// Assertion failed: 错误时输出



 //part2 
 //异常处理嵌套
 try {
    try {
        throw "oops";
    }
    finally {
        console.log("finally");
    }
}
catch (e) {
    console.error("outer", e);
}

 try{
 	try{
 		throw "oops";//抛出异常
 	}
 	catch(e){//捕获异常
 		console.log("inner",e);
 	}
 	finally{
 		console.log("finally");
 	}
 }
 catch(e){
 	console.error("outer",e);
 }
//inner oops
//finally
  try{
 	try{
 		throw "oops";//抛出异常
 	}
 	catch(e){//捕获异常
 		console.log("inner",e);
 		throw e;
 	}
 	finally{
 		console.log("finally");
 	}
 }
 catch(e){
 	console.log("outer",e);
 }
//inner oops
//finally
//outer oops



//part3

try{
	function abc(x,cb){
		console.log(x);
		cb();
	}
	abc("aa",function(){
		var arr=new Array(-1);
	});
}
catch(e){
	console.log(e);
}
//能捕获异常

try{
	function abc(x,cb){
		console.log(x);
		cb();
	}
}
catch(e){
	console.log(e);
}
abc("aa",function(){
	var arr=new Array(-1);
});
//不能捕获异常
