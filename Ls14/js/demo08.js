/*
	Created by JiXinchan on 2018.4.19
*/
//可写特性（[[writable]]），确定属性是否可写性
//可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
var Person = {name:"Daenerys"};
Object.defineProperty(Person,"name",{
	writable:false,
	configurable:false,
	enumeralbe:true,
	value:"Sienna"
});
console.log(Person.name);//Sieana
Person.name = "Lucy";
console.log(Person.name);//Sieana
delete Person.name;
console.log(Person.name);//Sieana

//不能再修改
Object.defineProperty(Person,"name",{
	writable:true,
	configurable:true,
	enumeralbe:true,
	value:"Sieana"
})