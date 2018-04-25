/*
	Created by JiXinchan on 2018.4.23
*/
function Person(name) {
    this.name = name;
    this.age =20;
}
Person.prototype.show = function () {
    console.log(this.name,this.age);
};//定义在原型上

var p=new Person("Sienna");//name,age是自有属性
console.log(Object.keys(p));//name,age
console.log(p.name);
console.log(p.age);
p.show();//不是自有的

p.__proto__===Person.prototype;//true