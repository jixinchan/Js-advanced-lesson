/*
	Created by JiXinchan on 2018.4.19
*/
//通过Object.defineProperty来添加和改变get/set的属性特性
var say={
	_word:"hello"
};
Object.defineProperty(say,'word',{
	get:function(){
		return this._word;
	}//只定义了get特性，因此只能读不能写
});
console.log(say.word);//word
say.word="你好";//只定义了getter访问器，因此写入失败
console.log(say.word);

var say={
	_word:"hello"
};
Object.defineProperty(say,'word',{
	get:function(){
		return this._word;
	}
	set word(val){
		this._word="你好";
	}
});
console.log(say.word);//word
say.word="你好";//只定义了getter访问器，因此写入失败
console.log(say.word);