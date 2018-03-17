/*
	Created by JiXinchan on 2018.3.15
*/
//检查是否是严格模式
"use strict"
function isStrictModel(){
	if(this==undefined){
		return true;
	}
	else{
		return false;
	}
}

function isStrictMode() {
    return this === window?false:true;
}
//只有在"use strict"写在检查函数前面的时候