/**
 * JXC 2018.6.28
 */
//状态之间可能发生的两种状态转换
//(pending ->fulfilled 或者 pending ->rejected）
//状态发生转换后Promise 对象的 then 方法绑定的处理方法（handlers ）就会被调用

//promise
var jxcpromise = new Promise(function(resolve,reject){
    console.log("do");
    setTimeout(function(){
        resolve("Good");
    },3600);
    //setTimeout(resolve,3600,'Good');//等效于上面三行
    setTimeout(reject,4000,'Sorry');
});
jxcpromise.then(
    (val)=>{console.log(val+" haha!");return 'yeah';},
    (err)=>{console.log(err+" wawa!");return 'woo';}
).then(
    (val)=>{console.log(val+" haha!");},
    (err)=>{console.log(err+" wawa!");}
)
//do
//Good haha!
//yeah haha!不会输出Sorry 状态一经改变不再改变


new Promise((resolve,reject)=>{
    console.log("111");
    setTimeout(()=>{resolve("xx")},5000);
    console.log('444')
}).then(
    (val)=>{console.log("val1:",val);console.log("222");},//成功
    (err)=>{console.log("err1:",err)} //失败
).then(
    (val)=>{console.log("val2:",val)},//成功
    (err)=>{console.log("err2:",err)} //失败
)
console.log("333");
//111 444 333 即使不延迟执行也会先输出444
//5秒之后
// val1: xx 
// 222
// val2: undefined

new Promise((resolve,reject)=>{
    setTimeout(()=>{reject("xx")},5000);
}).then(
    (val)=>{console.log("val1:",val);console.log("222");},//成功
    (err)=>{return new Promise((a,b)=>b('yy'))} //失败
).then(
    (val)=>{console.log("val2:",val)},//成功
    (err)=>{console.log("err2:",err)} //失败
)
//err2:yy

//then方法返回的结果是一个Promise对象

var p = new Promise(function(res,rej){
    rej('Sorry');
});
p.then(
    (a)=>{console.log('1',a)}
).then(
    (a)=>{console.log('2',a)}
).then(
    (a)=>{console.log('3',a)},
    (b)=>{console.log('4',b)}
)
//如果没有reject函数，那就继续往下直到找到匹配reject的函数为止。

//用catch捕获错误
p.then(
    (a)=>{console.log('1',a)}
).then(
    (a)=>{console.log('2',a)}
).catch((error)=>{console.log('error'+error);})

var p2 = new Promise((resolve,reject)=>{
	console.log(111);
	reject(new Error("222"));
	console.log(333);
});
p2
.then(()=>{console.log('444') })
.then(()=>{console.log("555");})
.catch((err)=>{console.log("666",err); })
.finally(()=>{console.log("finally")})//都会执行

//Promise.resolve()返回一个Promise对象
//参数是Promise对象就返回这个对象，
//参数含then方法，返回对象的状态由执行这个then后决定
//参数是基本数据类型，返回对象状态是fulfilled
Promise.resolve(new Promise((resolve,reject)=>{
	setTimeout(reject,2000,"bbb");
})).then(
	(val)=>{console.log("val:",val)},
	(err)=>{console.log("err:",err)}
)//err:bbb
Promise.resolve("Success").then(function (value) {
	console.log('1'+value); // "Success"
}, function (value) {
    console.log('2'+value);
});//1Success

var a = Promise.resolve("ssss");
var b = Promise.resolve(a);
b.then(
    (val)=>{console.log('value:'+val);}
);
console.log('a===b?'+(a===b));

//Promise.reject()
//方法返回一个带有拒绝原因reason参数的Promise对象
var p = Promise.reject("reject reason");
p.then(
	(v)=>{console.log("v:",v)},
	(e)=>{console.log("e:",e)}
)
//e:reject reason

//Promise.all()
//参数是一个Promise数组，当数组中所有对象都返回成功时
//函数执行成功，有一个失败就执行失败
var p1 = new Promise((resolve,reject)=>{
    resolve('hello');
    //reject('hi');//若执行此句，返回hi
});
var p2 = new Promise((resolve,reject)=>{
    resolve("world");
    //reject("boyfriend");//若执行此句返回boyfriend
});
Promise.all([p1,p2]).then(val=>{
    console.log(val);
}).catch(e=>{console.log(e)});
//['hello','world']

//Promise.race()
//参数是Promise数组，返回值是Promise对象
//父Promise调用race，用子promise返回的成功或失败作为value来执行自己对应的成功或失败的语句
var p1 = new Promise((resolve,reject)=>{setTimeout(resolve,Math.random()*5000,"a")});
var p2 = new Promise((resolve,reject)=>{setTimeout(reject,Math.random()*5000,"b")});
var p3 = Promise.race([p1,p2]).then(
	(val)=>{console.log("val:",val)},
	(err)=>{console.log("err:",err)}
);//只执行第一个返回的