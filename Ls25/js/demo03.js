window.onload = function(){
	var div3 = document.getElementById("div3");
	function div3click(){
		alert("div3click");
	}
	function div2click(){
		alert("div2click");
	}

	div3.onclick = div3click;
	div3.onclick = null;
}



// window.onload = function(){
// 	var div3 = document.getElementById("div3");
// 	function div3click(){
// 		alert("div3click");
// 	}
// 	div3.addEventListener("click",div3click);
// 	div3.removeEventListener("click",div3click);
// }
// function div2click(){
// 	alert("div2click");
// }

// 1.事件冒泡：从最具体的那个点开始接受事件，逐级向上。
// 2.事件捕获：从最不具体的点开始接收
// 3.HTML事件处理程序：在HTML中在标签中直接添加事件。
// 	缺点：HTML和JS紧密的耦合性
// 4.DOM0级事件处理程序：在JS中通过id获取元素，再用匿名函数添加事件
// 	优点：可以给一个元素添加多个事件，多个事件处理程序，按顺序执行
// 5.DOM2级事件处理程序：
// 	两个方法：
// 	用于处理指定和删除事件处理程序的操作
// 	addEventListener（）添加事件   三个参数
// 	removeEventListener（）删除事件
// 	两个方法传入的参数一样，用add添加的必须用remove删除
// 	去掉on
// 6.IE事件处理程序
// 	IE8以及更早的版本只支持事件冒泡
// 	attachEvent（）
// 	detachEvent（）两个参数
// 	加上on
// 7.跨浏览器
// 	var eventUtil={
// 		//添加句柄
// 		addHandler:function(element,type,handler){
// 			if(element.addEventListener){
// 				element.addEventListener(type,handler,false)
// 			}else if(element.attachEvent){
// 				element.attachEvent('on'+type,handler)
// 			}else{
// 				element['on'+type]=handler;
				
// 			}
// 		}
// 		//删除句柄
// 		removehandler：function(element,type,handler){
// 			if(element.removeEventListener){
// 				element.removeEventListener(type,handler,false)
// 			}else if(element.detachEvent){
// 				element.detachEvent('on'+type,handler)
// 			}else{
// 				element['on'+type]=null;
				
// 			}
// 		}
// 	}
	
// 8.事件对象
// 	type
// 	target
// 	stopPropagation（）用于阻止事件冒泡
// 	preventDefault（）阻止事件的默认行为
	
// 9.IE中的事件对象