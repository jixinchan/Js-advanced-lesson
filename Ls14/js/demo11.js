/*
	Created by JiXinchan on 2018.4.19
*/

var say={
	_word:"hello"
};
Object.defineProperty(say,'word',{
	configurable:false,//若为true则可以delete
	enumerable：true,
	get:function(){
		return this._word;
	}
	set word(val){
		this._word="你好";
	} //有set所以可以修改写入
});
console.log(say.word);
say.word="你好";
console.log(say.word);
delete say.word;
console.log(say.word);