/*
	Created by JiXinchan om 2018.5.24
*/
//js事件是浏览器或用户自身执行得某种操作
window.onload = function(e){
	// //console.log("window onload");
	// console.log(e.target);
	// console.log(this);
	var div1 = document.getElementById("div1");//若此句及后者写在外面，会报错
	div1.onclick = function(e){
		// console.log(e.clientX,e.clientY,e.ctrlkey);
		// console.log(e);
		// console.log(e.target);//div1
		// console.log(this);//div1

		console.log(e);
        console.log(e.__proto__);
        console.log(e.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__.__proto__);

        document.addEventListener("myclick",)
	}
	// div1.ondrag = function(){
	// 	console.log("div1 ondrag");
	// }//拖动
}

var eve = new Event