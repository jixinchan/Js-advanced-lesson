/*
	Created by JiXinchan on 2018.5.20
*/
window.onload=function (){
	window.foo=function(){
		var value=document.getElementById("value").value;
		try{
			var m=parseInt(value);
			var arr=new Array(m);
			alert("数组长度合法");
		}
		catch(e){
			alert(e);
			arr=[];
		}
	};
};