/*
	Created by JiXinchan on 2018.4.19
*/
//属性特性描述符
var obj={
	a:1
};
Object.defineProperty(obj,"b",{
	configurable:false,
	writable:false,
	enumerable:true,
	value:6
});
Object.defineProperty(obj,"c",{
	configuralbe:false,
	value:7
})
Object.getOwnPropertyDescriptor(obj,'a');
Object.getOwnPropertyDescriptor(obj,'b');
Object.getOwnPropertyDescriptor(obj,'c');