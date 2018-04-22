/*
	Created by JiXinchan on 2018.4.19
*/
//part1
var obj={
	a:12,
	b:34
};

obj.c=56;
//直接添加的属性，其所有的默认属性都为true
for(var k in obj){
	console.log(k,obj[k]);
}

//part2
var obj2={
	d:78,
	e:90
};
//这样添加属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj2,"f",{
	value:12,
	consigurable:true
})
for(var k in obj2){
	console.log(k,obj2[k]);
}//访问不到f。因为f默认不可枚举