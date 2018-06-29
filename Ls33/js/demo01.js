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
        //reject("Sorry");
    },3600);
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
//yeah haha!


new Promise((resolve,reject)=>{
    console.log("111");
    setTimeout(()=>{resolve("xx")},5000);
}).then(
    (val)=>{console.log("val1:",val);console.log("222");},//成功
    (err)=>{console.log("err1:",err)} //失败
).then(
    (val)=>{console.log("val2:",val)},//成功
    (err)=>{console.log("err2:",err)} //失败
)
console.log("333");
//111  333
//5秒之后
// val1: xx 
// 222
// val2: undefined