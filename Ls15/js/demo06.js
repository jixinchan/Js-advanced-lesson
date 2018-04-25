/*
	Created by JiXinchan on 2018.4.23
*/
//part1
function myObj(){ }
myObj.prototype.z = 3;

var obj = new myObj();
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

//part2
obj.z = 5;

obj.hasOwnProperty("z");
console.log(obj.z);
console.log(MyObj.prototype.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

delete  obj.__proto__.z;//或者delete MyObj.prototype.z;
console.log(obj.z);


//code for dream
var Robot = function(name) {        //声明一个构造函数
                this.name = name;
                this.say = function(){
                            console.log(this.name)
                         }
                };
var info = { age: 12, gender: "boy" };//继承属性
Robot.prototype = info;

var robot = new Robot("bower");

console.log(robot);            //打印结果为Robot {name: "bower", say: ƒ}
console.log('age' in robot);    //打印结果为true
console.log(robot.hasOwnProperty('age'));    //打印结果为false

robot.name = "cup";
robot.age = 13;

console.log(robot);            //打印结果为 {name: "cup", say: ƒ, age: 13}
console.log('age' in robot);    //打印结果为true
console.log(robot.hasOwnProperty('age'));//true 是自有属性