window.onload = function(){
	var div1 = document.getElementById("div1");
	function div1click(){
		alert("div1click");
	}
	div1.onclick = div3click;
}