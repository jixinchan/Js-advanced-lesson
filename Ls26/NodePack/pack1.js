function Student(name,sex,id){
	this.name=name;
	this.sex=sex;
	this.id=id;
}
Student.prototype.show=function(){
	console.log("我的名字是："+this.name+"我的学号是："+this.id);
}
module.exports=Student;