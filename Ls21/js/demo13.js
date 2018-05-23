/*
	Created by JiXinchan on 2018.5.20
*/
//Error
var e=new Error("message");
try{
	throw e;
}catch(e){
	console.log(e.name + ":"+e.message);
}

//创建error对象
var myError = new Error("季秋秋大臭屁");
console.log(myError.name,myError.message);

function MyError(name,message) {
    this.name = name||'MyError';
    this.message = message || 'Default Message';
}

try {
    // throw new MyError();
    throw new MyError('custom message');
} catch (e) {
    console.log(e.name);     // 'MyError'
    console.log(e.message);  // 'custom message'
}