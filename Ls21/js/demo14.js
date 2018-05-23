/*
	Created by JiXinchan on 2018.5.14
*/
// Error的子类
// ReferenceError 引用错误、RangeError 范围错误、
// TypeError 类型错误 URIError 资源定位错误、
// EvalError 与eval( )有关的错误、其他错误
//part1 Reference error
try{
	var x=y;
	//y没有定义所以产生错误 引用错误
}catch(e){
	console.log(e.name,emessage);
}
finally{
	console.log("finally");
}

//part2 RangeError
try{
	var arr=new Array(-2);
}catch(e){
	console.log(e.name,e.message);
}
finally{
	console.log("finally");
}

//part3 TypeError
try{
    var a;a.aa();
}catch(e){
    console.log(e.name,e.message);
}
finally {
    console.log("finally");
}
//TypeError Cannot read property 'aa' of undefined

//
var e1=new RangeError("a is out of range");
try{
	throw e1;
}catch(e){
    if (e instanceof TypeError) {
        console.log("TypeError"+": "+e.name+e.message);
    } else if (e instanceof RangeError) {
        console.log("RangeError"+": "+e.name+e.message);
    } else if (e instanceof ReferenceError) {
        console.log("ReferenceError"+": "+e.name+e.message);
    } else {
        console.log("OtherError"+": "+e.name+e.message);
    }
}