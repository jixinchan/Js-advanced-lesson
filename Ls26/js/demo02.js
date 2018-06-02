/*
	Created by JiXinchan on 2018.5.28
*/

//part 函数回调
//同步执行的回调
var arr1=[1,2,3,4,5];
console.log("arr1:",arr1);
var newArray1=arr1.map(function(key){
	return key*key;
});
console.log("newarr1:",newarr1);

var arr2=[1,3,4,2,5];
console.log("arr2:",arr2);
var newArray2 =arr2.filter(function(a){
	return (a>2&&a<8)?true:false;
});
console.log("newArray2:",newArray2);

//异步执行的回调
var LTimeOperation = function(taskID){
	var id= taskID;
	this.go=function(callback){
		console.log('Start LTimeOperation #'+id);
		var delay = parseInt((Math.random()*10000000) % 5000);
		setTimeout(function(){
			console.log('task #'+id+' cost'+delay+' ms');
			callback();
		},delay);
	}
};
function foo(){
	console.log("回调函数很是不好理解,I'm callback\n");
}
for(var i=0;i<5;i++){
	var task=new LTimeOperation(i);
	task.go(foo);
}

//事件触发与监听
// 采用事件驱动模式。
// 任务的执行不取决代码的顺序，而取决于某一个事件是否发生。
document.onclick = function(){
	console.log("document 被点击了！");
}
//最后只剩下最后一个btn
for(var i=0;i<5;i++){
    var btn=document.createElement("button");
    btn.setAttribute("id","btnId"+i);
    btn.setAttribute("style","width:200px");
    btn.setAttribute("style","height:20px");
    document.body.appendChild(btn);
}

//立即执行表达式
for(var i=0;i<5;i++) {
    (function (i) {
        document.getElementById("btnId" + i).addEventListener("click", function () {
            document.bgColor = "#"+i*2+i*2+i*2+i*2+"00";
            console.log("#"+i*2+i*2+i*2+i*2+"00");
        });
    })(i);
}